import webapp2
from google.appengine.api import mail
from google.appengine.ext import ndb
from google.appengine.api import users
import uuid
import datetime
from google.appengine.api import modules


sender_address = "news@splunk-sizing.appspotmail.com"


class Subscription(ndb.Model):
    confirm_id = ndb.StringProperty()
    create_date = ndb.DateTimeProperty(auto_now=True)
    confirm_date = ndb.DateTimeProperty()
    confirmed = ndb.BooleanProperty()

    @classmethod
    def get_by_confirm_id(cls, confirm_id):
        return cls.query(Subscription.confirm_id == confirm_id).get()

    @classmethod
    def query_confirmed(cls):
        return cls.query()#Subscription.confirmed == True)


class SubscribeHandler(webapp2.RequestHandler):
    def get(self):
        email_address = self.request.get("email_address")
        if not mail.is_email_valid(email_address):
            self.response.write('invalid email address')
            self.response.status = 400
            return
        confirm_id = str(uuid.uuid4().get_hex().upper()[0:6])
        confirmation_url = 'http://'+modules.get_hostname()+'/news/confirm?confirm_id='+confirm_id
        subject = "Confirm your subscription"
        body = """Thank you for subscribing to splunk-sizing.appspot.com!

Please confirm your email address by clicking on the link below:

%s
""" % confirmation_url
        subscription = Subscription.get_or_insert(email_address)
        if subscription.confirmed:
            self.response.write('already confirmed')
            self.response.status = 400
            return
        subscription.confirm_date = None
        subscription.confirm_id = confirm_id
        subscription.put()
        mail.send_mail(sender_address, email_address, subject, body)


class ConfirmHandler(webapp2.RequestHandler):
    def get(self):
        confirm_id = self.request.get("confirm_id")
        subscription = Subscription.get_by_confirm_id(confirm_id)
        if subscription is None:
            self.response.write('Unknown subscription')
            return
        subscription.confirm_date = datetime.datetime.utcnow()
        subscription.confirmed = True
        subscription.put()
        self.response.write('Email address confirmed')


class ListHandler(webapp2.RequestHandler):
    def get(self):
        if users.get_current_user() is None:
            login_url = users.create_login_url()
            self.redirect(login_url)
            return
        if not users.is_current_user_admin():
            self.response.write('Only admins can do this')
            return
        confirmed_subscriptions = Subscription.query_confirmed()
        for subscription in confirmed_subscriptions:
            self.response.write(subscription.key.string_id()+', ')



app = webapp2.WSGIApplication(
    [
        ("/news/subscribe", SubscribeHandler),
        ("/news/confirm", ConfirmHandler),
        ("/news/list", ListHandler)
    ],
    debug=True
)