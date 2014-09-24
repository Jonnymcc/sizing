

$.fn.slideWithLabel = function(options) {

    var self=this;
    var fromSliderFunction=options['fromSlider'];
    var getValue;
    if(fromSliderFunction){
      options.min=0; options.max=1;
      getValue=function(){
        var sliderValue=self['slider']('value');
        return fromSliderFunction.call(self['slider'],sliderValue);
      };
    }else{
      getValue=function(){
        return self['slider']('value');
      };
    }
    var toSliderFunction=options['toSlider'];
    var convertToSliderValue;
    if(toSliderFunction){
      convertToSliderValue=function(value){
        return toSliderFunction.call(self['slider'],value);
      };
      options.value=convertToSliderValue(options.value);
    }else{
      convertToSliderValue=function(value){
        return value;
      };
    }
    var convertToDisplayValue=function(value){
      var display=options['display'];
      if(!display) return ''+value;
      return display.call(self['slider'],value);
    };

    var slider = this['slider'](options);

    var label = slider.next();
    label.css('display','none');
    label.css('position','absolute');
    label.css('padding-top','1em');
    var spacing = $('<div style="display: inline-block; height: 0;"></div>');
    spacing.insertAfter(slider);
    var updateLabel=function() {
        var handle = $(slider.children('.ui-slider-handle'));
        $('.slider-value', label).text(convertToDisplayValue(getValue()));
        //offset
        var top = handle.offset().top + handle.outerHeight(true);
        var left = handle.offset().left - (label.width() - handle.width())/ 2;
        var sliderOffset = slider.offset();
        left = Math.max(sliderOffset.left, left);
        left = Math.min(sliderOffset.left+slider.outerWidth()-label.outerWidth(), left);
        label.css('top', top);
        label.css('left', left);
        //label.animate({"left" : left}, 100);
        spacing.css('height',label.outerHeight(true));
        label.css('display','inline-block');
    };
    var lastValue=options.value;
    var fireChangedIfRequired=function(){
        var newValue=slider['slider']('value');
        if(lastValue!=newValue){
            lastValue=newValue;
            if(options['changed']){
                options['changed']();
            }
        }
    };
    slider.bind('change', function () {
        setTimeout(function(){
            updateLabel();
            fireChangedIfRequired();
        },1);
    });
    slider.bind('slide', function () {
        setTimeout(function(){
            updateLabel();
            fireChangedIfRequired();
        },1);
    });
    updateLabel();
    setTimeout(function() { updateLabel(); },1);

    $(window).resize(function() {
        updateLabel();
    });

    return function(){
      if(arguments.length==2 && arguments[0]=='value'){
        var fromValue=arguments[1];
        var toValue=convertToSliderValue(fromValue);
        return slider['slider']('value',toValue);
      }
      if(arguments.length==1 && arguments[0]=='value'){
        return getValue();
      }
      if(arguments.length==2){
        if(arguments[0]=='trigger'){
          slider.trigger(arguments[1]);
          return;
        }
      }
      return slider['slider'].apply(slider,arguments);
    };
};
