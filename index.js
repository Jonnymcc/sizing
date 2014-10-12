$(function() {
    $("button").css('outline','none').button();
    $('input:text').textfield();

    $(document).tooltip({
        show: null,
        position: {
            my: "left top",
            at: "left bottom"
        },
        open: function( event, ui ) {
            ui.tooltip.hide();
            /*
            ui.tooltip.css('opacity',0);
            ui.tooltip.animate({
            opacity: 0
            }, 1000 );
            ui.tooltip.animate({
            opacity: 1,
            top: ui.tooltip.position().top + 10
            }, "fast" );*/
        }
    });

    var dailyVolumeDefaultValue = 200;
    var compressionFactorDefaultValue = 0.15;
    var indexFactorDefaultValue = 0.35;
    var hotWarmRetensionDefaultValue = 5;
    var coldRetensionDefaultValue = 25;
    var frozenRetensionDefaultValue = 60;
    var indexersDefaultValue = 2;
    var indexersCalculatedAutomatically = true;
    var clusterReplicationDefaultValue = false;
    var searchFactorDefaultValue = 2;
    var replicationFactorDefaultValue = 2;
    var hotWarmPriceDefaultValue = '0.1';
    var coldPriceDefaultValue = '0.05';
    var frozenPriceDefaultValue = '0.01';
    var raidLevelVolume1DefaultValue = '0';
    var diskSizeVolume1DefaultValue = 1;
    var diskSpaceContingencyVolume1DefaultValue = 0.05;
    var raidLevelVolume2DefaultValue = '0';
    var diskSizeVolume2DefaultValue = 1;
    var diskSpaceContingencyVolume2DefaultValue = 0.05;
    var raidLevelVolume3DefaultValue = '0';
    var diskSizeVolume3DefaultValue = 1;
    var diskSpaceContingencyVolume3DefaultValue = 0.05;
    var storageTypeDetailed = 'detailed';
    var storageTypeSummary = 'summary';
    var hotWarmStorageTypeDefaultValue = storageTypeDetailed;
    var coldStorageTypeDefaultValue = storageTypeDetailed;
    var archivedStorageTypeDefaultValue = storageTypeDetailed;
    var detailedVolume1 = '1';
    var detailedVolume2 = '2';
    var detailedVolume3 = '3';
    var hotWarmDetailedVolumeDefaultValue = detailedVolume1;
    var coldDetailedVolumeDefaultValue = detailedVolume1;
    var archivedDetailedVolumeDefaultValue = detailedVolume2;

    var dailyVolumeKey = 'v';
    var compressionFactorKey = 'cf';
    var indexFactorKey = 'if';
    var hotWarmRetensionKey = 'hwr';
    var coldRetensionKey = 'cr';
    var frozenRetensionKey = 'ar';
    var indexersKey = 'i';
    var clusterReplicationKey = 'c';
    var searchFactorKey = 'sf';
    var replicationFactorKey = 'rf';
    var hotWarmPriceKey = 'hwp';
    var coldPriceKey = 'cp';
    var frozenPriceKey = 'ap';
    var raidLevelVolume1Key = 'rl';
    var diskSizeVolume1Key = 'ds';
    var diskSpaceContingencyVolume1Key = 'dc';
    var raidLevelVolume2Key = 'rlv2';
    var diskSizeVolume2Key = 'dsv2';
    var diskSpaceContingencyVolume2Key = 'dcv2';
    var raidLevelVolume3Key = 'rlv3';
    var diskSizeVolume3Key = 'dsv3';
    var diskSpaceContingencyVolume3Key = 'dcv3';
    var hotWarmStorageTypeKey = 'hwst';
    var coldStorageTypeKey = 'cst';
    var archivedStorageTypeKey = 'ast';
    var hotWarmDetailedVolumeKey = 'hwdv';
    var coldDetailedVolumeKey = 'cdv';
    var archivedDetailedVolumeKey = 'adv';

    var dailyVolumeFromHash = $.bbq.getState(dailyVolumeKey);
    if($.isNumeric(dailyVolumeFromHash)) dailyVolumeDefaultValue = parseInt(dailyVolumeFromHash);
    var compressionFactorFromHash = $.bbq.getState(compressionFactorKey);
    if($.isNumeric(compressionFactorFromHash)) compressionFactorDefaultValue = parseFloat(compressionFactorFromHash);
    var indexFactorFromHash = $.bbq.getState(indexFactorKey);
    if($.isNumeric(indexFactorFromHash)) indexFactorDefaultValue = parseFloat(indexFactorFromHash);

    var hotWarmRetensionFromHash = $.bbq.getState(hotWarmRetensionKey);
    if($.isNumeric(hotWarmRetensionFromHash)) hotWarmRetensionDefaultValue = parseInt(hotWarmRetensionFromHash);
    var coldRetensionFromHash = $.bbq.getState(coldRetensionKey);
    if($.isNumeric(coldRetensionFromHash)) coldRetensionDefaultValue = parseInt(coldRetensionFromHash);
    var frozenRetensionFromHash = $.bbq.getState(frozenRetensionKey);
    if($.isNumeric(frozenRetensionFromHash)) frozenRetensionDefaultValue = parseInt(frozenRetensionFromHash);
    var indexersFromHash = $.bbq.getState(indexersKey);
    if($.isNumeric(indexersFromHash)) {
        indexersDefaultValue = parseInt(indexersFromHash);
        indexersCalculatedAutomatically = false;
    }
    var clusterReplicationFromHash = $.bbq.getState(clusterReplicationKey);
    if($.isNumeric(clusterReplicationFromHash)) clusterReplicationDefaultValue = parseInt(clusterReplicationFromHash)!=0;
    var searchFactorFromHash = $.bbq.getState(searchFactorKey);
    if($.isNumeric(searchFactorFromHash)) searchFactorDefaultValue = parseFloat(searchFactorFromHash);
    var replicationFactorFromHash = $.bbq.getState(replicationFactorKey);
    if($.isNumeric(replicationFactorFromHash)) replicationFactorDefaultValue = parseFloat(replicationFactorFromHash);

    var hotWarmPriceFromHash = $.bbq.getState(hotWarmPriceKey);
    if($.isNumeric(hotWarmPriceFromHash)) hotWarmPriceDefaultValue = parseFloat(hotWarmPriceFromHash);
    var coldPriceFromHash = $.bbq.getState(coldPriceKey);
    if($.isNumeric(coldPriceFromHash)) coldPriceDefaultValue = parseFloat(coldPriceFromHash);
    var frozenPriceFromHash = $.bbq.getState(frozenPriceKey);
    if($.isNumeric(frozenPriceFromHash)) frozenPriceDefaultValue = parseFloat(frozenPriceFromHash);

    var raidLevelVolume1FromHash = $.bbq.getState(raidLevelVolume1Key);
    if(Object.prototype.toString.call(raidLevelVolume1FromHash)=='[object String]') raidLevelVolume1DefaultValue = raidLevelVolume1FromHash;
    var diskSizeVolume1FromHash = $.bbq.getState(diskSizeVolume1Key);
    if($.isNumeric(diskSizeVolume1FromHash)) diskSizeVolume1DefaultValue = parseFloat(diskSizeVolume1FromHash);
    var diskSpaceContingencyVolume1FromHash = $.bbq.getState(diskSpaceContingencyVolume1Key);
    if($.isNumeric(diskSpaceContingencyVolume1FromHash)) diskSpaceContingencyVolume1DefaultValue = parseFloat(diskSpaceContingencyVolume1FromHash);

    var raidLevelVolume2FromHash = $.bbq.getState(raidLevelVolume2Key);
    if(Object.prototype.toString.call(raidLevelVolume2FromHash)=='[object String]') raidLevelVolume2DefaultValue = raidLevelVolume2FromHash;
    var diskSizeVolume2FromHash = $.bbq.getState(diskSizeVolume2Key);
    if($.isNumeric(diskSizeVolume2FromHash)) diskSizeVolume2DefaultValue = parseFloat(diskSizeVolume2FromHash);
    var diskSpaceContingencyVolume2FromHash = $.bbq.getState(diskSpaceContingencyVolume2Key);
    if($.isNumeric(diskSpaceContingencyVolume2FromHash)) diskSpaceContingencyVolume2DefaultValue = parseFloat(diskSpaceContingencyVolume2FromHash);

    var raidLevelVolume3FromHash = $.bbq.getState(raidLevelVolume3Key);
    if(Object.prototype.toString.call(raidLevelVolume3FromHash)=='[object String]') raidLevelVolume3DefaultValue = raidLevelVolume3FromHash;
    var diskSizeVolume3FromHash = $.bbq.getState(diskSizeVolume3Key);
    if($.isNumeric(diskSizeVolume3FromHash)) diskSizeVolume3DefaultValue = parseFloat(diskSizeVolume3FromHash);
    var diskSpaceContingencyVolume3FromHash = $.bbq.getState(diskSpaceContingencyVolume3Key);
    if($.isNumeric(diskSpaceContingencyVolume3FromHash)) diskSpaceContingencyVolume3DefaultValue = parseFloat(diskSpaceContingencyVolume3FromHash);

    var hotWarmStorageTypeFromHash = $.bbq.getState(hotWarmStorageTypeKey);
    if(Object.prototype.toString.call(hotWarmStorageTypeFromHash)=='[object String]'){
        if(hotWarmStorageTypeFromHash==storageTypeDetailed ||
            hotWarmStorageTypeFromHash==storageTypeSummary)
            hotWarmStorageTypeDefaultValue = hotWarmStorageTypeFromHash;
        else
            console.warn('invalid hot-warm storage type in hash: '+hotWarmStorageTypeFromHash);
    }
    var coldStorageTypeFromHash = $.bbq.getState(coldStorageTypeKey);
    if(Object.prototype.toString.call(coldStorageTypeFromHash)=='[object String]'){
        if(coldStorageTypeFromHash==storageTypeDetailed ||
            coldStorageTypeFromHash==storageTypeSummary)
            coldStorageTypeDefaultValue = coldStorageTypeFromHash;
        else
            console.warn('invalid cold storage type in hash: '+coldStorageTypeFromHash);
    }
    var archivedStorageTypeFromHash = $.bbq.getState(archivedStorageTypeKey);
    if(Object.prototype.toString.call(archivedStorageTypeFromHash)=='[object String]'){
        if(archivedStorageTypeFromHash==storageTypeDetailed ||
            archivedStorageTypeFromHash==storageTypeSummary)
            archivedStorageTypeDefaultValue = archivedStorageTypeFromHash;
        else
            console.warn('invalid archived storage type in hash: '+archivedStorageTypeFromHash);
    }

    var hotWarmDetailedVolumeFromHash = $.bbq.getState(hotWarmDetailedVolumeKey);
    if(Object.prototype.toString.call(hotWarmDetailedVolumeFromHash)=='[object String]'){
        if(hotWarmDetailedVolumeFromHash==detailedVolume1 ||
            hotWarmDetailedVolumeFromHash==detailedVolume2 ||
            hotWarmDetailedVolumeFromHash==detailedVolume3)
            hotWarmDetailedVolumeDefaultValue = hotWarmDetailedVolumeFromHash;
        else
            console.warn('invalid hot-warm detailed volume in hash: '+hotWarmDetailedVolumeFromHash);
    }
    var coldDetailedVolumeFromHash = $.bbq.getState(coldDetailedVolumeKey);
    if(Object.prototype.toString.call(coldDetailedVolumeFromHash)=='[object String]'){
        if(coldDetailedVolumeFromHash==detailedVolume1 ||
            coldDetailedVolumeFromHash==detailedVolume2 ||
            coldDetailedVolumeFromHash==detailedVolume3)
            coldDetailedVolumeDefaultValue = coldDetailedVolumeFromHash;
        else
            console.warn('invalid cold detailed volume in hash: '+coldDetailedVolumeFromHash);
    }
    var archivedDetailedVolumeFromHash = $.bbq.getState(archivedDetailedVolumeKey);
    if(Object.prototype.toString.call(archivedDetailedVolumeFromHash)=='[object String]'){
        if(archivedDetailedVolumeFromHash==detailedVolume1 ||
            archivedDetailedVolumeFromHash==detailedVolume2 ||
            archivedDetailedVolumeFromHash==detailedVolume3)
            archivedDetailedVolumeDefaultValue = archivedDetailedVolumeFromHash;
        else
            console.warn('invalid archived detailed volume in hash: '+archivedDetailedVolumeFromHash);
    }

    var rawVolumeSlider = $('#raw-volume-slider');
    var compressionFactorSlider = $('#compression-factor-slider');
    var indexFactorSlider = $('#index-factor-slider');
    var hotWarmRetentionSlider = $('#hotwarm-retention-slider');
    var coldRetentionSlider = $('#cold-retention-slider');
    var frozenRetentionSlider = $('#frozen-retention-slider');
    var searchFactorSlider = $('#search-factor-retention-slider');
    var replicationFactorSlider = $('#replication-factor-retention-slider');
    var searchFactorMaxMessage = $('#search-factor-max-message');
    var replicationFactorMaxMessage = $('#replication-factor-max-message');
    var indexersSlider = $('#indexers-retention-slider');
    var searchFactorRetentionDiv = $('#search-factor-retention');
    var replicationFactorRetentionDiv = $('#replication-factor-retention');
    var calculateNumberCheckbox = $('#calculate_number_of_nodes');
    var enableClusterReplicationCheckBox = $('#enable-cluster-replication');
    var totalStorage = $('#total-storage');
    var hotWarmStorage = $('#hotwarm-storage');
    var hotWarmIndexerStorageDiv = $('#hotwarm-indexer-storage');
    var coldStorage = $('#cold-storage');
    var coldIndexerStorageDiv = $('#cold-indexer-storage');
    var frozenStorage = $('#frozen-storage');
    var frozenIndexerStorageDiv = $('#frozen-indexer-storage');
    var indexerStorageDiv = $('#indexer-storage');
    var hotWarmPriceGBInput = $('#hotwarm-price-gb');
    var coldPriceGBInput = $('#cold-price-gb');
    var frozenPriceGBInput = $('#frozen-price-gb');
    var hotWarmPriceDiv = $('#hotwarm-price');
    var coldPriceDiv = $('#cold-price');
    var frozenPriceDiv = $('#frozen-price');
    var totalPriceDiv = $('#total-price');
    var raidLevelVolume1Select = $('#raid-level-volume1');
    var physicalStorageVolume1RaidParityWarning = $('#physical-storage-volume1-raid-parity-warning');
    var diskSizeVolume1Select = $('#disk-size-volume1');
    var diskCountPerIndexerVolume1Div = $('#disk-count-per-indexer-volume1');
    var diskCountTotalVolume1Div = $('#disk-count-total-volume1');
    var physicalDiskSpacePerIndexerVolume1Div = $('#physical-space-per-indexer-volume1');
    var physicalDiskSpaceTotalVolume1Div = $('#physical-space-total-volume1');
    var effectiveDiskSpacePerIndexerVolume1Div = $('#effective-space-per-indexer-volume1');
    var effectiveDiskSpaceTotalVolume1Div = $('#effective-space-total-volume1');
    var diskSpaceContingencyVolume1Slider = $('#disk-space-contingency-slider-volume1');
    var diskSpaceContingencyVolume1Div = $('#disk-space-contingency-volume1');
    var raidLevelVolume2Select = $('#raid-level-volume2');
    var physicalStorageVolume2RaidParityWarning = $('#physical-storage-volume2-raid-parity-warning');
    var diskSizeVolume2Select = $('#disk-size-volume2');
    var diskCountPerIndexerVolume2Div = $('#disk-count-per-indexer-volume2');
    var diskCountTotalVolume2Div = $('#disk-count-total-volume2');
    var physicalDiskSpacePerIndexerVolume2Div = $('#physical-space-per-indexer-volume2');
    var physicalDiskSpaceTotalVolume2Div = $('#physical-space-total-volume2');
    var effectiveDiskSpacePerIndexerVolume2Div = $('#effective-space-per-indexer-volume2');
    var effectiveDiskSpaceTotalVolume2Div = $('#effective-space-total-volume2');
    var diskSpaceContingencyVolume2Slider = $('#disk-space-contingency-slider-volume2');
    var diskSpaceContingencyVolume2Div = $('#disk-space-contingency-volume2');
    var raidLevelVolume3Select = $('#raid-level-volume3');
    var physicalStorageVolume3RaidParityWarning = $('#physical-storage-volume3-raid-parity-warning');
    var diskSizeVolume3Select = $('#disk-size-volume3');
    var diskCountPerIndexerVolume3Div = $('#disk-count-per-indexer-volume3');
    var diskCountTotalVolume3Div = $('#disk-count-total-volume3');
    var physicalDiskSpacePerIndexerVolume3Div = $('#physical-space-per-indexer-volume3');
    var physicalDiskSpaceTotalVolume3Div = $('#physical-space-total-volume3');
    var effectiveDiskSpacePerIndexerVolume3Div = $('#effective-space-per-indexer-volume3');
    var effectiveDiskSpaceTotalVolume3Div = $('#effective-space-total-volume3');
    var diskSpaceContingencyVolume3Slider = $('#disk-space-contingency-slider-volume3');
    var diskSpaceContingencyVolume3Div = $('#disk-space-contingency-volume3');
    var storageConfigurationHotWarm = $('#storage-configuration-hotwarm');
    var storageConfigurationCold = $('#storage-configuration-cold');
    var storageConfigurationArchived = $('#storage-configuration-archived');
    var storageConfigurationHotWarmVolume = $('#storage-configuration-hotwarm-volume');
    var storageConfigurationColdVolume = $('#storage-configuration-cold-volume');
    var storageConfigurationArchivedVolume = $('#storage-configuration-archived-volume');
    var detailedStorageVolume1 = $('#detailed-storage-volume1');
    var detailedStorageVolume2 = $('#detailed-storage-volume2');
    var detailedStorageVolume3 = $('#detailed-storage-volume3');
    var detailedStorageVolume1Buckets = $('#detailed-storage-volume1-buckets');
    var detailedStorageVolume2Buckets = $('#detailed-storage-volume2-buckets');
    var detailedStorageVolume3Buckets = $('#detailed-storage-volume3-buckets');
    var summaryStorage = $('#summary-storage');
    var summaryStorageBuckets = $('#summary-storage-buckets');
    var summaryStorageHotWarmRow = $('#summary-storage-hotwarm-row');
    var summaryStorageColdRow = $('#summary-storage-cold-row');
    var summaryStorageArchivedRow = $('#summary-storage-archived-row');
    var hotwarmSummaryStorageSize = $('#hotwarm-summary-storage-size');
    var coldSummaryStorageSize = $('#cold-summary-storage-size');
    var archivedSummaryStorageSize = $('#archived-summary-storage-size');
    var conffileVolume1 = $('#conffile-volume1');
    var conffileVolume2 = $('#conffile-volume2');
    var conffileVolume3 = $('#conffile-volume3');
    var conffileSummaryVolume = $('#conffile-summaryvolume');
    var conffileVolume1Name = $('#conffile-volume1-name');
    var conffileVolume2Name = $('#conffile-volume2-name');
    var conffileVolume3Name = $('#conffile-volume3-name');
    var conffileSummaryVolumeName = $('#conffile-summaryvolume-name');
    var conffileVolume1Pathname = $('#conffile-volume1-pathname');
    var conffileVolume2Pathname = $('#conffile-volume2-pathname');
    var conffileVolume3Pathname = $('#conffile-volume3-pathname');
    var conffileSummaryVolumePathname = $('#conffile-summaryvolume-pathname');
    var conffileVolume1MaxVolumeDataSizeMB = $('#conffile-volume1-maxVolumeDataSizeMB');
    var conffileVolume2MaxVolumeDataSizeMB = $('#conffile-volume2-maxVolumeDataSizeMB');
    var conffileVolume3MaxVolumeDataSizeMB = $('#conffile-volume3-maxVolumeDataSizeMB');
    var conffileIndexHotwarmVolumeName = $('#conffile-index-hotwarm-volumename');
    var conffileIndexColdVolumeName = $('#conffile-index-cold-volumename');
    var conffileIndexHotwarmMaxDataSizeMB = $('#conffile-index-hotwarm-maxDataSizeMB');
    var conffileIndexColdMaxDataSizeMB = $('#conffile-index-cold-maxDataSizeMB');
    var conffileIndexFrozenTimePeriodInSecs = $('#conffile-index-frozenTimePeriodInSecs');
    var conffileIndexMaxDataSize = $('#conffile-index-maxDataSize');
    var retentionBarHomePart = $('.itunes > .bar-container > .bar > .home');
    var retentionBarColdPart = $('.itunes > .bar-container > .bar > .cold');
    var retentionBarFrozenPart = $('.itunes > .bar-container > .bar > .frozen');
    var retentionBarTotal = $('#total-rentention');

    var calculate = function(){
        console.debug("calculating...");
        var rawVolume = rawVolumeSlider('value');
        var compressionFactor = compressionFactorSlider('value');
        var indexFactor = indexFactorSlider('value');
        var hotWarmRetention = hotWarmRetentionSlider('value');
        var coldRetention = coldRetentionSlider('value');
        var frozenRetention = frozenRetentionSlider('value');
        var searchFactor = searchFactorSlider('value');
        var replicationFactor = replicationFactorSlider('value');
        var indexers = indexersSlider('value');
        var isCluster = enableClusterReplicationCheckBox.is(":checked");
        var hotWarmPriceGB = parseFloat(hotWarmPriceGBInput.val());
        var coldPriceGB = parseFloat(coldPriceGBInput.val());
        var frozenPriceGB = parseFloat(frozenPriceGBInput.val());
        var raidLevelVolume1 = raidLevelVolume1Select.val();
        var diskSizeGBVolume1 = parseInt(diskSizeVolume1Select.val())*1024;
        var diskSpaceContingencyVolume1 = parseFloat(diskSpaceContingencyVolume1Slider('value'));
        var raidLevelVolume2 = raidLevelVolume2Select.val();
        var diskSizeGBVolume2 = parseInt(diskSizeVolume2Select.val())*1024;
        var diskSpaceContingencyVolume2 = parseFloat(diskSpaceContingencyVolume2Slider('value'));
        var raidLevelVolume3 = raidLevelVolume3Select.val();
        var diskSizeGBVolume3 = parseInt(diskSizeVolume3Select.val())*1024;
        var diskSpaceContingencyVolume3 = parseFloat(diskSpaceContingencyVolume3Slider('value'));

        if(!isCluster){
          searchFactor = 1;
          replicationFactor = 1;
        }

        var total = hotWarmRetention + coldRetention + frozenRetention;
        var homeRetentionPercent = Math.round(hotWarmRetention / total * 100);
        retentionBarHomePart.css('width',homeRetentionPercent+'%');
        var coldRetentionPercent = Math.round(coldRetention / total * 100);
        retentionBarColdPart.css('width',coldRetentionPercent+'%');
        var frozenRetentionPercent = 100 - homeRetentionPercent - coldRetentionPercent;
        retentionBarFrozenPart.css('width',frozenRetentionPercent+'%');
        if(total<=90){
            retentionBarTotal.text(total+' days');
        }
        else if(total<=30*36){
            retentionBarTotal.text(Math.round(total/30)+' months');
        }
        else{
            retentionBarTotal.text(Math.round(total/30/12)+' years');
        }


        var newRawDataPerDay = rawVolume * compressionFactor;
        console.debug("rawDataPerDay: "+newRawDataPerDay+" GB");
        var newIndexDataPerDay = rawVolume * indexFactor;
        console.debug("indexDataPerDay: "+newIndexDataPerDay+" GB");

        var storageRawPerDay = newRawDataPerDay * replicationFactor;
        console.debug("storageRawPerDay: "+storageRawPerDay+" GB");
        var storageIndexPerDay = newIndexDataPerDay * searchFactor;
        console.debug("storageIndexPerDay: "+storageIndexPerDay+" GB");

        var storageHotWarmRaw = storageRawPerDay * hotWarmRetention;
        console.debug("storageHotWarmRaw: "+storageHotWarmRaw+" GB");
        var storageHotWarmIndex = storageIndexPerDay * hotWarmRetention;
        console.debug("storageHotWarmIndex: "+storageHotWarmIndex+" GB");
        var storageColdRaw = storageRawPerDay * coldRetention;
        console.debug("storageColdRaw: "+storageColdRaw+" GB");
        var storageColdIndex = storageIndexPerDay * coldRetention;
        console.debug("storageColdIndex: "+storageColdIndex+" GB");
        var storageFrozenRaw = storageRawPerDay * frozenRetention;
        console.debug("storageFrozenRaw: "+storageFrozenRaw+" GB");

        var storageHotWarmTotal = storageHotWarmRaw + storageHotWarmIndex;
        console.debug("storageHotWarmTotal: "+storageHotWarmTotal+" GB");
        var storageColdTotal = storageColdRaw + storageColdIndex;
        console.debug("storageColdTotal: "+storageColdTotal+" GB");
        var storageFrozenTotal = storageFrozenRaw + 0;
        console.debug("storageFrozenTotal: "+storageFrozenTotal+" GB");

        var storageHotWarmPerIndexer = storageHotWarmTotal / indexers;
        console.debug("storageHotWarmPerIndexer: "+storageHotWarmPerIndexer+" GB");
        var storageColdPerIndexer = storageColdTotal / indexers;
        console.debug("storageColdPerIndexer: "+storageColdPerIndexer+" GB");
        var storageFrozenPerIndexer = storageFrozenTotal / indexers;
        console.debug("storageFrozenPerIndexer: "+storageFrozenPerIndexer+" GB");

        var storageTotal = storageHotWarmTotal + storageColdTotal + storageFrozenTotal;
        console.debug("storageTotal: "+storageTotal+" GB");
        var storagePerIndexer = storageTotal / indexers;
        console.debug("storagePerIndexer: "+storagePerIndexer+" GB");

        var storageVolume1=0;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume1)
        {
            storageVolume1+=storageHotWarmTotal;
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume1)
        {
            storageVolume1+=storageColdTotal;
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume1)
        {
            storageVolume1+=storageFrozenTotal;
        }
        var storageVolume1PerIndexer = storageVolume1 / indexers;
        console.debug("storageVolume1PerIndexer: "+storageVolume1PerIndexer+" GB");

        var storageVolume2=0;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume2)
        {
            storageVolume2+=storageHotWarmTotal;
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume2)
        {
            storageVolume2+=storageColdTotal;
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume2)
        {
            storageVolume2+=storageFrozenTotal;
        }
        var storageVolume2PerIndexer = storageVolume2 / indexers;
        console.debug("storageVolume2PerIndexer: "+storageVolume2PerIndexer+" GB");

        var storageVolume3=0;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume3)
        {
            storageVolume3+=storageHotWarmTotal;
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume3)
        {
            storageVolume3+=storageColdTotal;
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume3)
        {
            storageVolume3+=storageFrozenTotal;
        }
        var storageVolume3PerIndexer = storageVolume3 / indexers;
        console.debug("storageVolume3PerIndexer: "+storageVolume3PerIndexer+" GB");
        
        var hotWarmPrice = 0;
        if(storageConfigurationHotWarm.val()==storageTypeSummary)
        {
            hotWarmPrice = hotWarmPriceGB*storageHotWarmTotal;
        }
        var coldPrice = 0;
        if(storageConfigurationCold.val()==storageTypeSummary)
        {
            coldPrice = coldPriceGB*storageColdTotal;
        }
        var frozenPrice = 0;
        if(storageConfigurationArchived.val()==storageTypeSummary)
        {
            frozenPrice = frozenPriceGB*storageFrozenTotal;
        }
        var totalPrice = hotWarmPrice+coldPrice+frozenPrice;

        var gbtobytesFactor=1024*1024*1024;
        var GBtoMBFactor=1024;
        totalStorage.text(numeral(storageTotal*gbtobytesFactor).format('0.0 b'));
        hotWarmStorage.text(numeral(storageHotWarmTotal*gbtobytesFactor).format('0.0 b'));
        coldStorage.text(numeral(storageColdTotal*gbtobytesFactor).format('0.0 b'));
        frozenStorage.text(numeral(storageFrozenTotal*gbtobytesFactor).format('0.0 b'));
        indexerStorageDiv.text(numeral(storagePerIndexer*gbtobytesFactor).format('0.0 b'));
        hotWarmIndexerStorageDiv.text(numeral(storageHotWarmPerIndexer*gbtobytesFactor).format('0.0 b'));
        coldIndexerStorageDiv.text(numeral(storageColdPerIndexer*gbtobytesFactor).format('0.0 b'));
        frozenIndexerStorageDiv.text(numeral(storageFrozenPerIndexer*gbtobytesFactor).format('0.0 b'));
        hotWarmPriceDiv.text(numeral(hotWarmPrice).format('$ 0.[00]a'));
        coldPriceDiv.text(numeral(coldPrice).format('$ 0.[00]a'));
        frozenPriceDiv.text(numeral(frozenPrice).format('$ 0.[00]a'));
        totalPriceDiv.text(numeral(totalPrice).format('$ 0.[00]a'));
        hotwarmSummaryStorageSize.text(numeral(storageHotWarmTotal*gbtobytesFactor).format('0.0 b'));
        coldSummaryStorageSize.text(numeral(storageColdTotal*gbtobytesFactor).format('0.0 b'));
        archivedSummaryStorageSize.text(numeral(storageFrozenTotal*gbtobytesFactor).format('0.0 b'));

        var calculateDiskCountAndEffectiveSpacePerIndexer=function(storage,raidLevel,diskSizeGB){
            var diskCount;
            var effectiveSpace;
            if(raidLevel=='0'){
                diskCount = Math.ceil(storage/diskSizeGB);
                effectiveSpace = diskCount * diskSizeGB;
            } else if(raidLevel=='10'){
                diskCount = Math.max(Math.ceil(storage/diskSizeGB)*2, 4);
                effectiveSpace = diskCount / 2;
            } else if(raidLevel=='0+1'){
                diskCount = Math.max(Math.ceil(storage/diskSizeGB)*2, 3);
                effectiveSpace = Math.floor(diskCount / 2);
            } else if(raidLevel=='5'){
                diskCount = 3;
                while(true){
                  effectiveSpace = (diskCount-1)*diskSizeGB;
                  if(effectiveSpace>=storage){
                    break;
                  }
                  diskCount++;
                }
            } else{
                diskCount = 0;
                effectiveSpace = 0;
            }
            return {
                diskCount: diskCount,
                effectiveSpace: effectiveSpace
            };
        };

        var volume1PerIndexer=calculateDiskCountAndEffectiveSpacePerIndexer(
            storageVolume1PerIndexer + (storageVolume1PerIndexer*diskSpaceContingencyVolume1),
            raidLevelVolume1,
            diskSizeGBVolume1);
        console.debug('diskCountVolume1PerIndexer: '+volume1PerIndexer.diskCount);
        var diskCountVolume1Total = volume1PerIndexer.diskCount * indexers;
        console.debug('diskCountVolume1Total: '+diskCountVolume1Total);
        var physicalDiskSpaceVolume1PerIndexer = volume1PerIndexer.diskCount * diskSizeGBVolume1;
        console.debug('physicalDiskSpaceVolume1PerIndexer: '+physicalDiskSpaceVolume1PerIndexer);
        var physicalDiskSpaceVolume1Total = physicalDiskSpaceVolume1PerIndexer * indexers;
        console.debug('physicalDiskSpaceVolume1Total: '+physicalDiskSpaceVolume1Total);
        var effectiveDiskSpaceVolume1Total = volume1PerIndexer.effectiveSpace * indexers;
        console.debug('effectiveDiskSpaceVolume1Total: '+effectiveDiskSpaceVolume1Total);

        diskCountPerIndexerVolume1Div.text(volume1PerIndexer.diskCount);
        diskCountTotalVolume1Div.text(diskCountVolume1Total);
        physicalDiskSpacePerIndexerVolume1Div.text(numeral(physicalDiskSpaceVolume1PerIndexer*gbtobytesFactor).format('0.0 b'));
        physicalDiskSpaceTotalVolume1Div.text(numeral(physicalDiskSpaceVolume1Total*gbtobytesFactor).format('0.0 b'));
        effectiveDiskSpacePerIndexerVolume1Div.text(numeral(volume1PerIndexer.effectiveSpace*gbtobytesFactor).format('0.0 b'));
        effectiveDiskSpaceTotalVolume1Div.text(numeral(effectiveDiskSpaceVolume1Total*gbtobytesFactor).format('0.0 b'));

        var volume2PerIndexer=calculateDiskCountAndEffectiveSpacePerIndexer(
            storageVolume2PerIndexer + (storageVolume2PerIndexer*diskSpaceContingencyVolume2),
            raidLevelVolume2,
            diskSizeGBVolume2);
        console.debug('diskCountVolume2PerIndexer: '+volume2PerIndexer.diskCount);
        var diskCountVolume2Total = volume2PerIndexer.diskCount * indexers;
        console.debug('diskCountVolume2Total: '+diskCountVolume2Total);
        var physicalDiskSpaceVolume2PerIndexer = volume2PerIndexer.diskCount * diskSizeGBVolume2;
        console.debug('physicalDiskSpaceVolume2PerIndexer: '+physicalDiskSpaceVolume2PerIndexer);
        var physicalDiskSpaceVolume2Total = physicalDiskSpaceVolume2PerIndexer * indexers;
        console.debug('physicalDiskSpaceVolume2Total: '+physicalDiskSpaceVolume2Total);
        var effectiveDiskSpaceVolume2Total = volume2PerIndexer.effectiveSpace * indexers;
        console.debug('effectiveDiskSpaceVolume2Total: '+effectiveDiskSpaceVolume2Total);

        diskCountPerIndexerVolume2Div.text(volume2PerIndexer.diskCount);
        diskCountTotalVolume2Div.text(diskCountVolume2Total);
        physicalDiskSpacePerIndexerVolume2Div.text(numeral(physicalDiskSpaceVolume2PerIndexer*gbtobytesFactor).format('0.0 b'));
        physicalDiskSpaceTotalVolume2Div.text(numeral(physicalDiskSpaceVolume2Total*gbtobytesFactor).format('0.0 b'));
        effectiveDiskSpacePerIndexerVolume2Div.text(numeral(volume2PerIndexer.effectiveSpace*gbtobytesFactor).format('0.0 b'));
        effectiveDiskSpaceTotalVolume2Div.text(numeral(effectiveDiskSpaceVolume2Total*gbtobytesFactor).format('0.0 b'));
        
        var volume3PerIndexer=calculateDiskCountAndEffectiveSpacePerIndexer(
            storageVolume3PerIndexer + (storageVolume3PerIndexer*diskSpaceContingencyVolume3),
            raidLevelVolume3,
            diskSizeGBVolume3);
        console.debug('diskCountVolume3PerIndexer: '+volume3PerIndexer.diskCount);
        var diskCountVolume3Total = volume3PerIndexer.diskCount * indexers;
        console.debug('diskCountVolume3Total: '+diskCountVolume3Total);
        var physicalDiskSpaceVolume3PerIndexer = volume3PerIndexer.diskCount * diskSizeGBVolume3;
        console.debug('physicalDiskSpaceVolume3PerIndexer: '+physicalDiskSpaceVolume3PerIndexer);
        var physicalDiskSpaceVolume3Total = physicalDiskSpaceVolume3PerIndexer * indexers;
        console.debug('physicalDiskSpaceVolume3Total: '+physicalDiskSpaceVolume3Total);
        var effectiveDiskSpaceVolume3Total = volume3PerIndexer.effectiveSpace * indexers;
        console.debug('effectiveDiskSpaceVolume3Total: '+effectiveDiskSpaceVolume3Total);

        diskCountPerIndexerVolume3Div.text(volume3PerIndexer.diskCount);
        diskCountTotalVolume3Div.text(diskCountVolume3Total);
        physicalDiskSpacePerIndexerVolume3Div.text(numeral(physicalDiskSpaceVolume3PerIndexer*gbtobytesFactor).format('0.0 b'));
        physicalDiskSpaceTotalVolume3Div.text(numeral(physicalDiskSpaceVolume3Total*gbtobytesFactor).format('0.0 b'));
        effectiveDiskSpacePerIndexerVolume3Div.text(numeral(volume3PerIndexer.effectiveSpace*gbtobytesFactor).format('0.0 b'));
        effectiveDiskSpaceTotalVolume3Div.text(numeral(effectiveDiskSpaceVolume3Total*gbtobytesFactor).format('0.0 b'));

        var configFilesHotWarmVolumeName;
        var configFilesColdVolumeName;

        var configFilesVolume1VolumeNameParts=[];
        var configFilesVolume1VolumeContainsHotWarm=false;
        var configFilesVolume1VolumeContainsCold=false;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume1)
        {
            configFilesVolume1VolumeNameParts.push('hotwarm');
            configFilesVolume1VolumeContainsHotWarm=true;
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume1)
        {
            configFilesVolume1VolumeNameParts.push('cold');
            configFilesVolume1VolumeContainsCold=true;
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume1)
        {
            configFilesVolume1VolumeNameParts.push('archived');
        }
        var configFilesVolume1VolumeName=configFilesVolume1VolumeNameParts.join('_');
        var maxVolumeDataSizeMBVolume1=volume1PerIndexer.effectiveSpace*GBtoMBFactor;
        maxVolumeDataSizeMBVolume1-=parseInt(maxVolumeDataSizeMBVolume1*diskSpaceContingencyVolume3);
        if(configFilesVolume1VolumeContainsHotWarm){
            configFilesHotWarmVolumeName=configFilesVolume1VolumeName;
        }
        if(configFilesVolume1VolumeContainsCold){
            configFilesColdVolumeName=configFilesVolume1VolumeName;
        }
        if(configFilesVolume1VolumeNameParts.length>0){
            conffileVolume1.show();
            conffileVolume1Name.text(configFilesVolume1VolumeName);
            if(configFilesVolume1VolumeContainsHotWarm){
                conffileVolume1Pathname.text('fast_disk');
            }else{
                conffileVolume1Pathname.text('big_disk');
            }
            conffileVolume1MaxVolumeDataSizeMB.text(maxVolumeDataSizeMBVolume1);
        }else{
            conffileVolume1.hide();
        }

        var configFilesVolume2VolumeNameParts=[];
        var configFilesVolume2VolumeContainsHotWarm=false;
        var configFilesVolume2VolumeContainsCold=false;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume2)
        {
            configFilesVolume2VolumeNameParts.push('hotwarm');
            configFilesVolume2VolumeContainsHotWarm=true;
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume2)
        {
            configFilesVolume2VolumeNameParts.push('cold');
            configFilesVolume2VolumeContainsCold=true;
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume2)
        {
            configFilesVolume2VolumeNameParts.push('archived');
        }
        var configFilesVolume2VolumeName=configFilesVolume2VolumeNameParts.join('_');
        var maxVolumeDataSizeMBVolume2=volume2PerIndexer.effectiveSpace*GBtoMBFactor;
        maxVolumeDataSizeMBVolume2-=parseInt(maxVolumeDataSizeMBVolume2*diskSpaceContingencyVolume3);
        if(configFilesVolume2VolumeContainsHotWarm){
            configFilesHotWarmVolumeName=configFilesVolume2VolumeName;
        }
        if(configFilesVolume2VolumeContainsCold){
            configFilesColdVolumeName=configFilesVolume2VolumeName;
        }
        if(configFilesVolume2VolumeNameParts.length>0){
            conffileVolume2.show();
            conffileVolume2Name.text(configFilesVolume2VolumeName);
            if(configFilesVolume2VolumeContainsHotWarm){
                conffileVolume2Pathname.text('fast_disk');
            }else{
                conffileVolume2Pathname.text('big_disk');
            }
            conffileVolume2MaxVolumeDataSizeMB.text(maxVolumeDataSizeMBVolume2);
        }else{
            conffileVolume2.hide();
        }

        var configFilesVolume3VolumeNameParts=[];
        var configFilesVolume3VolumeContainsHotWarm=false;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume3)
        {
            configFilesVolume3VolumeNameParts.push('hotwarm');
            configFilesVolume3VolumeContainsHotWarm=true;
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume3)
        {
            configFilesVolume3VolumeNameParts.push('cold');
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume3)
        {
            configFilesVolume3VolumeNameParts.push('archived');
        }
        var configFilesVolume3VolumeName=configFilesVolume3VolumeNameParts.join('_');
        var maxVolumeDataSizeMBVolume3=volume3PerIndexer.effectiveSpace*GBtoMBFactor;
        maxVolumeDataSizeMBVolume3-=parseInt(maxVolumeDataSizeMBVolume3*diskSpaceContingencyVolume3);
        if(configFilesVolume3VolumeNameParts.length>0){
            conffileVolume3.show();
            conffileVolume3Name.text(configFilesVolume3VolumeName);
            if(configFilesVolume3VolumeContainsHotWarm){
                conffileVolume3Pathname.text('fast_disk');
            }else{
                conffileVolume3Pathname.text('big_disk');
            }
            conffileVolume3MaxVolumeDataSizeMB.text(maxVolumeDataSizeMBVolume3);
        }else{
            conffileVolume3.hide();
        }

        var configFilesSummaryVolumeVolumeNameParts=[];
        var configFilesSummaryVolumeVolumeContainsHotWarm=false;
        var configFilesSummaryVolumeVolumeContainsCold=false;
        if(storageConfigurationHotWarm.val()==storageTypeSummary)
        {
            configFilesSummaryVolumeVolumeNameParts.push('hotwarm');
            configFilesSummaryVolumeVolumeContainsHotWarm=true;
        }
        if(storageConfigurationCold.val()==storageTypeSummary)
        {
            configFilesSummaryVolumeVolumeNameParts.push('cold');
            configFilesSummaryVolumeVolumeContainsCold=true;
        }
        if(storageConfigurationArchived.val()==storageTypeSummary)
        {
            configFilesSummaryVolumeVolumeNameParts.push('archived');
        }
        var configFilesSummaryVolumeVolumeName=configFilesSummaryVolumeVolumeNameParts.join('_');

        if(configFilesSummaryVolumeVolumeContainsHotWarm){
            configFilesHotWarmVolumeName=configFilesSummaryVolumeVolumeName;
        }
        if(configFilesSummaryVolumeVolumeContainsCold){
            configFilesColdVolumeName=configFilesSummaryVolumeVolumeName;
        }
        if(configFilesSummaryVolumeVolumeNameParts.length>0){
            conffileSummaryVolume.show();
            conffileSummaryVolumeName.text(configFilesSummaryVolumeVolumeName);
            if(configFilesSummaryVolumeVolumeContainsHotWarm){
                conffileSummaryVolumePathname.text('fast_storage');
            }else{
                conffileSummaryVolumePathname.text('big_storage');
            }
        }else{
            conffileSummaryVolume.hide();
        }

        conffileIndexHotwarmVolumeName.text(configFilesHotWarmVolumeName);
        conffileIndexColdVolumeName.text(configFilesColdVolumeName);
        conffileIndexHotwarmMaxDataSizeMB.text(parseInt(storageHotWarmPerIndexer*GBtoMBFactor));
        conffileIndexColdMaxDataSizeMB.text(parseInt(storageColdPerIndexer*GBtoMBFactor));
        var hotWarmRetentionSeconds = hotWarmRetentionSlider('value')*24*60*60;
        var coldRetentionSeconds = coldRetentionSlider('value')*24*60*60;
        conffileIndexFrozenTimePeriodInSecs.text(hotWarmRetentionSeconds+coldRetentionSeconds);
        if((rawVolume/indexers)>10){
            conffileIndexMaxDataSize.text('auto_high_volume');
        }else{
            conffileIndexMaxDataSize.text('auto');
        }
    };

    var retensionSliderConvertFromDays = function(value){
        var result;
        if(value<30) { // 0.00 - 0.58
            result = (value)/50;
        } else if(value<90) { // 0.60 - 0.66
            result = 0.60+(value-30)/500;
        } else if(value<18*30) { // 0.68 - 0.86
            result = 0.68+(value-90)/1500;
        } else if(value<36*30) { // 0.88 - 0.90
            result = 0.88+(value-18*30)/30/6*0.02;
        } else if(value<7*12*30) { // 0.92 - 0.98
            result = 0.92+(value-36*30)/30/12*0.02;
        } else { // 1.00
            result = 1.0;
        }
        result = Math.round(result*100)/100;
        //console.log('toSlider('+value+') -> '+result);
        return result;
    };
    var retensionSliderConvertToDays = function(percent){
        var result;
        if(percent<0.60)
            result = 0+percent*50;
        else if(percent<0.68)
            result = 30+(percent-0.60)*500;
        else if(percent<0.88)
            result = 90+(percent-0.68)*1500;
        else if(percent<0.92)
            result = 18*30+(percent-0.88)*(30*6/0.02);
        else if(percent<1.00)
            result = 36*30+(percent-0.92)*(30*12/0.02);
        else
            result = 30*12*7;
        result = Math.round(result);
        //console.log('fromSlider('+percent+') -> '+result);
        return result;
    };
    var retensionSliderDisplayDays = function(value){
        if(value==1)
            return '1 day';
        if(value<90)
            return value+' days';
        if(value>36*30)
            return (value/30/12)+' years';
        return (value/30)+' months'
    };

    rawVolumeSlider = rawVolumeSlider.slideWithLabel({
        'value': dailyVolumeDefaultValue,
        'step': 0.02,
        'changed': function(){
            if(indexersCalculatedAutomatically){
                calculateNumberOfNodes();
            }
            calculate();
        },
        'change': function(){
            var state = {};
            state[dailyVolumeKey] = rawVolumeSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        },
        'toSlider': function(value){
            var result;
          if(value<10) { // 0.00 - 0.16
            result = (value-1)/50;
          } else if(value<100) { // 0.18 - 0.34
            result = 0.18+(value-10)/500;
          } else if(value<1000) { // 0.36 - 0.52
            result = 0.36+(value-100)/5000;
          } else if(value<20000) { // 0.54 - 0.90
            result = 0.54+(value-1000)/50000;
          } else if(value<100000) { // 0.92 - 0.98
            result = 0.92+(value-20000)/500000;
          } else { // 1.00
            result = 1.0;
          }
          result = Math.round(result*100)/100;
          //console.log('toSlider('+value+') -> '+result);
          return result;
        },
        'fromSlider': function(percent){
            var result;
          if(percent<0.18)
            result = 1+percent*50;
          else if(percent<0.36)
            result = 10+(percent-0.18)*500;
          else if(percent<0.54)
            result = 100+(percent-0.36)*5000;
          else if(percent<0.92)
            result = 1000+(percent-0.54)*50000;
          else if(percent<1.00)
            result = 20000+(percent-0.92)*500000;
          else
            result = 100000;
          result = Math.round(result);
          //console.log('fromSlider('+percent+') -> '+result);
          return result;
        },
        'display': function(value){
          var cnt=0;
          while(value>1000) {
            cnt++;
            value=value/1000;
          }
          while(cnt>0){
            cnt--;
            value=value*1024;
          }
          /*var result =*/ return numeral(value*1024*1024*1024).format('0 b');
          //console.log('display('+value+') -> '+result);
          //return result;
        }
    });
    compressionFactorSlider = compressionFactorSlider.slideWithLabel({
        'value': compressionFactorDefaultValue,
        'min': 0.01, 'max': 0.4, 'step': 0.01,
        'changed': function(){
            calculate();
        },
        'change': function(){
            var state = {};
            state[compressionFactorKey] = compressionFactorSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        }
    });
    indexFactorSlider = indexFactorSlider.slideWithLabel({
        'value': indexFactorDefaultValue,
        'min': 0.1, 'max': 0.7, 'step': 0.01,
        'changed': function(){
            calculate();
        },
        'change': function(){
            var state = {};
            state[indexFactorKey] = indexFactorSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        }
    });
    hotWarmRetentionSlider = hotWarmRetentionSlider.slideWithLabel({
        'value': hotWarmRetensionDefaultValue,
        'step': 0.02,
        'changed': function(){
            calculate();
        },
        'change': function(){
            var state = {};
            state[hotWarmRetensionKey] = hotWarmRetentionSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        },
        'toSlider': retensionSliderConvertFromDays,
        'fromSlider': retensionSliderConvertToDays,
        'display': retensionSliderDisplayDays
    });
    coldRetentionSlider = coldRetentionSlider.slideWithLabel({
        'value': coldRetensionDefaultValue,
        'step': 0.02,
        'changed': function(){
            calculate();
        },
        'change': function(){
            var state = {};
            state[coldRetensionKey] = coldRetentionSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        },
        'toSlider': retensionSliderConvertFromDays,
        'fromSlider': retensionSliderConvertToDays,
        'display': retensionSliderDisplayDays
    });
    frozenRetentionSlider = frozenRetentionSlider.slideWithLabel({
        'value': frozenRetensionDefaultValue,
        'step': 0.02,
        'changed': function(){
            calculate();
        },
        'change': function(){
            var state = {};
            state[frozenRetensionKey] = frozenRetentionSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        },
        'toSlider': retensionSliderConvertFromDays,
        'fromSlider': retensionSliderConvertToDays,
        'display': retensionSliderDisplayDays
    });
    indexersSlider = indexersSlider.slideWithLabel({
        'value': indexersDefaultValue,
        'min': 1, 'max': 50, 'step': 1,
        'changed': function(){
            var value = indexersSlider('value');
            var searchFactor = searchFactorSlider('value');
            searchFactorSlider('option', 'max', value);
            replicationFactorSlider('option', 'max', value);
            if(searchFactor>value){
                searchFactorSlider('value', value);
            }
            var replicationFactor = replicationFactorSlider('value');
            if(replicationFactor>value){
                replicationFactorSlider('value', value);
            }
            searchFactorSlider('trigger','change');
            replicationFactorSlider('trigger','change');
            calculate();
        },
        'change': function(){
            if(!calculatingNumberOfNodes){
                if(!indexersCalculatedAutomatically){
                    var state = {};
                    state[indexersKey] = indexersSlider('value');
                    var hash = $.param.fragment(window.location.hash,state);
                    history.replaceState(undefined, null, hash);
                    calculate();
                }else{
                    calculateNumberCheckbox.prop('checked', false);
                    calculateNumberCheckbox.change();
                }
            }
        }
    });
    var calculatingNumberOfNodes = false;
    var calculateNumberOfNodes=function(){
        calculatingNumberOfNodes=true;
        if(calculatingNumberOfNodes){
            var rawVolume = rawVolumeSlider('value');
            var numberOfNodes = Math.ceil(rawVolume/220);
            indexersSlider('value',parseInt(numberOfNodes));
            indexersSlider('trigger','change');
            calculatingNumberOfNodes=false;
        }
    };
    var updateIndexerCountOpacity=function(){
        indexersCalculatedAutomatically = calculateNumberCheckbox.is(':checked');
        if(indexersCalculatedAutomatically){
            indexersSlider('object').css('opacity',0.5);
        }else{
            indexersSlider('object').css('opacity',1);
        }
    };
    calculateNumberCheckbox.prop('checked', indexersCalculatedAutomatically);
    updateIndexerCountOpacity();
    calculateNumberCheckbox.change(function(){
        updateIndexerCountOpacity();
        indexersCalculatedAutomatically = calculateNumberCheckbox.is(':checked');
        var state = $.deparam.fragment(window.location.hash);
        if(indexersCalculatedAutomatically){
            delete state[indexersKey];
        }else{
            state[indexersKey] = indexersSlider('value');
        }
        var hash = $.param.fragment(window.location.hash,state,2);
        history.replaceState(undefined, null, hash);
        if(indexersCalculatedAutomatically){
            calculateNumberOfNodes();
        }
        calculate();
    });
    if(clusterReplicationDefaultValue){
        if(searchFactorDefaultValue>indexersDefaultValue){
            searchFactorDefaultValue=indexersDefaultValue;
        }
        if(replicationFactorDefaultValue>indexersDefaultValue){
            replicationFactorDefaultValue=indexersDefaultValue;
        }
    }
    searchFactorSlider = searchFactorSlider.slideWithLabel({
        'value': searchFactorDefaultValue,
        'min': 1, 'step': 1,
        'max': Math.max(2,indexersDefaultValue),
        'changed': function(){
            calculate();
            updateSearchFactorMaxMessage();
        },
        'change': function(){
            var state = {};
            state[searchFactorKey] = searchFactorSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        }
    });
    var updateSearchFactorMaxMessage=function(){
        var max = searchFactorSlider('option','max');
        var value = searchFactorSlider('value');
        if(value==max){
            searchFactorMaxMessage.show();
        }else{
            searchFactorMaxMessage.hide();
        }
    };
    updateSearchFactorMaxMessage();
    var updateReplicationFactorMaxMessage=function(){
        var max = replicationFactorSlider('option','max');
        var value = replicationFactorSlider('value');
        if(value==max){
            replicationFactorMaxMessage.show();
        }else{
            replicationFactorMaxMessage.hide();
        }
    };
    replicationFactorSlider = replicationFactorSlider.slideWithLabel({
        'value': replicationFactorDefaultValue,
        'min': 1, 'step': 1,
        'max': Math.max(2,indexersDefaultValue),
        'changed': function(){
            calculate();
            updateReplicationFactorMaxMessage();
        },
        'change': function(){
            var state = {};
            state[replicationFactorKey] = replicationFactorSlider('value');
            var hash = $.param.fragment(window.location.hash,state);
            history.replaceState(undefined, null, hash);
        }
    });
    updateReplicationFactorMaxMessage();
    enableClusterReplicationCheckBox.prop('checked', clusterReplicationDefaultValue);
    if(clusterReplicationDefaultValue){
        replicationFactorRetentionDiv.show();
        searchFactorRetentionDiv.show();
        searchFactorSlider('trigger','change');
        replicationFactorSlider('trigger','change');
    }
    enableClusterReplicationCheckBox.change(function(){
        var checked = $(this).is(':checked');
        if(checked){
            replicationFactorRetentionDiv.show();
            searchFactorRetentionDiv.show();
            searchFactorSlider('trigger','change');
            replicationFactorSlider('trigger','change');
        }else{
            replicationFactorRetentionDiv.hide();
            searchFactorRetentionDiv.hide();
        }
        var state = {};
        state[clusterReplicationKey] = checked?1:0;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        calculate();
    });
    hotWarmPriceGBInput.val(hotWarmPriceDefaultValue).change(function(){
      var state = {};
      state[hotWarmPriceKey] = hotWarmPriceGBInput.val();
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });
    coldPriceGBInput.val(coldPriceDefaultValue).change(function(){
      var state = {};
      state[coldPriceKey] = coldPriceGBInput.val();
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });
    frozenPriceGBInput.val(frozenPriceDefaultValue).change(function(){
      var state = {};
      state[frozenPriceKey] = frozenPriceGBInput.val();
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });

    diskSpaceContingencyVolume1Slider = diskSpaceContingencyVolume1Slider.slideWithLabel({
        'value': diskSpaceContingencyVolume1DefaultValue,
        'min': 0, 'step': 0.01,
        'max': 0.3,
        'changed': function(){
          diskSpaceContingencyVolume1Div.text(parseInt(diskSpaceContingencyVolume1Slider('value')*100)+' %');
          calculate();
        },
        'change': function(){
          var state = {};
          state[diskSpaceContingencyVolume1Key] = diskSpaceContingencyVolume1Slider('value');
          var hash = $.param.fragment(window.location.hash,state);
          history.replaceState(undefined, null, hash);
        }
    });
    diskSpaceContingencyVolume1Div.text(parseInt(diskSpaceContingencyVolume1DefaultValue*100)+' %');
    var updatePhysicalStorageVolume1RaidParityWarningVisibility = function(){
        if(raidLevelVolume1Select.val()=='5'){
            physicalStorageVolume1RaidParityWarning.show();
        }else{
            physicalStorageVolume1RaidParityWarning.hide();
        }
    };
    raidLevelVolume1Select.val(raidLevelVolume1DefaultValue);
    updatePhysicalStorageVolume1RaidParityWarningVisibility();
    raidLevelVolume1Select.change(function(){
        updatePhysicalStorageVolume1RaidParityWarningVisibility();
      var raidLevel = raidLevelVolume1Select.val();
      var state = {}; state[raidLevelVolume1Key] = raidLevel;
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });
    diskSizeVolume1Select.val(diskSizeVolume1DefaultValue);
    diskSizeVolume1Select.change(function(){
      var diskSize = diskSizeVolume1Select.val();
      var state = {}; state[diskSizeVolume1Key] = diskSize;
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });

    diskSpaceContingencyVolume2Slider = diskSpaceContingencyVolume2Slider.slideWithLabel({
        'value': diskSpaceContingencyVolume2DefaultValue,
        'min': 0, 'step': 0.01,
        'max': 0.3,
        'changed': function(){
          diskSpaceContingencyVolume2Div.text(parseInt(diskSpaceContingencyVolume2Slider('value')*100)+' %');
          calculate();
        },
        'change': function(){
          var state = {};
          state[diskSpaceContingencyVolume2Key] = diskSpaceContingencyVolume2Slider('value');
          var hash = $.param.fragment(window.location.hash,state);
          history.replaceState(undefined, null, hash);
        }
    });
    diskSpaceContingencyVolume2Div.text(parseInt(diskSpaceContingencyVolume2DefaultValue*100)+' %');
    var updatePhysicalStorageVolume2RaidParityWarningVisibility = function(){
        if(raidLevelVolume2Select.val()=='5'){
            physicalStorageVolume2RaidParityWarning.show();
        }else{
            physicalStorageVolume2RaidParityWarning.hide();
        }
    };
    raidLevelVolume2Select.val(raidLevelVolume2DefaultValue);
    updatePhysicalStorageVolume2RaidParityWarningVisibility();
    raidLevelVolume2Select.change(function(){
        updatePhysicalStorageVolume2RaidParityWarningVisibility();
      var raidLevel = raidLevelVolume2Select.val();
      var state = {}; state[raidLevelVolume2Key] = raidLevel;
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });
    diskSizeVolume2Select.val(diskSizeVolume2DefaultValue);
    diskSizeVolume2Select.change(function(){
      var diskSize = diskSizeVolume2Select.val();
      var state = {}; state[diskSizeVolume2Key] = diskSize;
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      calculate();
    });

    diskSpaceContingencyVolume3Slider = diskSpaceContingencyVolume3Slider.slideWithLabel({
        'value': diskSpaceContingencyVolume3DefaultValue,
        'min': 0, 'step': 0.01,
        'max': 0.3,
        'changed': function(){
          diskSpaceContingencyVolume3Div.text(parseInt(diskSpaceContingencyVolume3Slider('value')*100)+' %');
          calculate();
        },
        'change': function(){
          var state = {};
          state[diskSpaceContingencyVolume3Key] = diskSpaceContingencyVolume3Slider('value');
          var hash = $.param.fragment(window.location.hash,state);
          history.replaceState(undefined, null, hash);
        }
    });
    diskSpaceContingencyVolume3Div.text(parseInt(diskSpaceContingencyVolume3DefaultValue*100)+' %');
    var updatePhysicalStorageVolume3RaidParityWarningVisibility = function(){
        if(raidLevelVolume3Select.val()=='5'){
            physicalStorageVolume3RaidParityWarning.show();
        }else{
            physicalStorageVolume3RaidParityWarning.hide();
        }
    };
    raidLevelVolume3Select.val(raidLevelVolume3DefaultValue);
    updatePhysicalStorageVolume3RaidParityWarningVisibility();
    raidLevelVolume3Select.change(function(){
        updatePhysicalStorageVolume3RaidParityWarningVisibility();
        var raidLevel = raidLevelVolume3Select.val();
        var state = {}; state[raidLevelVolume3Key] = raidLevel;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        calculate();
    });
    diskSizeVolume3Select.val(diskSizeVolume3DefaultValue);
    diskSizeVolume3Select.change(function(){
        var diskSize = diskSizeVolume3Select.val();
        var state = {}; state[diskSizeVolume3Key] = diskSize;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        calculate();
    });
    
    storageConfigurationHotWarm.val(hotWarmStorageTypeDefaultValue);
    storageConfigurationHotWarm.change(function(){
      var hotWarmStorageType = storageConfigurationHotWarm.val();
      var state = {}; state[hotWarmStorageTypeKey] = hotWarmStorageType;
      var hash = $.param.fragment(window.location.hash,state);
      history.replaceState(undefined, null, hash);
      onHotWarmStorageTypeChanged();
      calculate();
    });
    storageConfigurationCold.val(coldStorageTypeDefaultValue);
    storageConfigurationCold.change(function(){
        var coldStorageType = storageConfigurationCold.val();
        var state = {}; state[coldStorageTypeKey] = coldStorageType;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        onColdStorageTypeChanged();
        calculate();
    });
    storageConfigurationArchived.val(archivedStorageTypeDefaultValue);
    storageConfigurationArchived.change(function(){
        var archivedStorageType = storageConfigurationArchived.val();
        var state = {}; state[archivedStorageTypeKey] = archivedStorageType;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        calculate();
        onArchivedStorageTypeChanged();
    });

    storageConfigurationHotWarmVolume.val(hotWarmDetailedVolumeDefaultValue);
    storageConfigurationHotWarmVolume.change(function(){
        var hotWarmDetailedVolume = storageConfigurationHotWarmVolume.val();
        var state = {}; state[hotWarmDetailedVolumeKey] = hotWarmDetailedVolume;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        updateStorageTypeConfigurationDivs();
        calculate();
    });
    storageConfigurationColdVolume.val(coldDetailedVolumeDefaultValue);
    storageConfigurationColdVolume.change(function(){
        var coldDetailedVolume = storageConfigurationColdVolume.val();
        var state = {}; state[coldDetailedVolumeKey] = coldDetailedVolume;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        updateStorageTypeConfigurationDivs();
        calculate();
    });
    storageConfigurationArchivedVolume.val(archivedDetailedVolumeDefaultValue);
    storageConfigurationArchivedVolume.change(function(){
        var archivedDetailedVolume = storageConfigurationArchivedVolume.val();
        var state = {}; state[archivedDetailedVolumeKey] = archivedDetailedVolume;
        var hash = $.param.fragment(window.location.hash,state);
        history.replaceState(undefined, null, hash);
        updateStorageTypeConfigurationDivs();
        calculate();
    });

    var onHotWarmStorageTypeChanged=function(){
        var hotWarmStorageType = storageConfigurationHotWarm.val();
        if(hotWarmStorageType==storageTypeDetailed){
            storageConfigurationHotWarmVolume.show();
        }else{
            storageConfigurationHotWarmVolume.hide();
        }
        updateStorageTypeConfigurationDivs();
    };
    var onColdStorageTypeChanged=function(){
        var coldStorageType = storageConfigurationCold.val();
        if(coldStorageType==storageTypeDetailed){
            storageConfigurationColdVolume.show();
        }else{
            storageConfigurationColdVolume.hide();
        }
        updateStorageTypeConfigurationDivs();
    };
    var onArchivedStorageTypeChanged=function(){
        var archivedStorageType = storageConfigurationArchived.val();
        if(archivedStorageType==storageTypeDetailed){
            storageConfigurationArchivedVolume.show();
        }else{
            storageConfigurationArchivedVolume.hide();
        }
        updateStorageTypeConfigurationDivs();
    };
    var updateStorageTypeConfigurationDivs=function(){
        var volume1BucketNames=[];
        var volume1Count=0;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume1)
        {
            volume1Count++;
            volume1BucketNames.push('Hot','Warm');
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume1)
        {
            volume1Count++;
            volume1BucketNames.push('Cold');
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume1)
        {
            volume1Count++;
            volume1BucketNames.push('Archived');
        }
        if(volume1Count>0){
            detailedStorageVolume1Buckets.text(volume1BucketNames.join(', '));
            detailedStorageVolume1.show();
        }else{
            detailedStorageVolume1.hide();
        }
        var volume2BucketNames=[];
        var volume2Count=0;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume2)
        {
            volume2Count++;
            volume2BucketNames.push('Hot','Warm');
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume2)
        {
            volume2Count++;
            volume2BucketNames.push('Cold');
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume2)
        {
            volume2Count++;
            volume2BucketNames.push('Archived');
        }
        if(volume2Count>0){
            detailedStorageVolume2Buckets.text(volume2BucketNames.join(', '));
            detailedStorageVolume2.show();
        }else{
            detailedStorageVolume2.hide();
        }
        var volume3BucketNames=[];
        var volume3Count=0;
        if(storageConfigurationHotWarm.val()==storageTypeDetailed &&
            storageConfigurationHotWarmVolume.val()==detailedVolume3)
        {
            volume3Count++;
            volume3BucketNames.push('Hot','Warm');
        }
        if(storageConfigurationCold.val()==storageTypeDetailed &&
            storageConfigurationColdVolume.val()==detailedVolume3)
        {
            volume3Count++;
            volume3BucketNames.push('Cold');
        }
        if(storageConfigurationArchived.val()==storageTypeDetailed &&
            storageConfigurationArchivedVolume.val()==detailedVolume3)
        {
            volume3Count++;
            volume3BucketNames.push('Archived');
        }
        if(volume3Count>0){
            detailedStorageVolume3Buckets.text(volume3BucketNames.join(', '));
            detailedStorageVolume3.show();
        }else{
            detailedStorageVolume3.hide();
        }
        var summaryBucketNames=[];
        var summaryCount=0;
        if(storageConfigurationHotWarm.val()==storageTypeSummary)
        {
            summaryCount++;
            summaryBucketNames.push('Hot','Warm');
            summaryStorageHotWarmRow.show();
        }else{
            summaryStorageHotWarmRow.hide();
        }
        if(storageConfigurationCold.val()==storageTypeSummary)
        {
            summaryCount++;
            summaryBucketNames.push('Cold');
            summaryStorageColdRow.show();
        }else{
            summaryStorageColdRow.hide();
        }
        if(storageConfigurationArchived.val()==storageTypeSummary)
        {
            summaryCount++;
            summaryBucketNames.push('Archived');
            summaryStorageArchivedRow.show();
        }else{
            summaryStorageArchivedRow.hide();
        }
        if(summaryCount>0){
            summaryStorageBuckets.text(summaryBucketNames.join(', '));
            summaryStorage.show();
        }else{
            summaryStorage.hide();
        }
    };
    onHotWarmStorageTypeChanged();
    onColdStorageTypeChanged();
    onArchivedStorageTypeChanged();
    if(indexersCalculatedAutomatically){
        calculateNumberOfNodes();
    }

    $(window).bind('hashchange', function() {
        window.location.reload();
    });
    calculate();

    $('#whatsnew').click(function(e){
      e.preventDefault();
      $('.dialog',$(this))['dialog']({
        draggable: false,
        resizable: false,
        close: function(){
          $(this)['dialog']("destroy");
        },
        width: $(document).width()/1.2
      });
    });

    var subscribeDiv=$('#subscribe_subscribe');
    var subscribeButton=$('#subscribe_button');
    var successfulDiv=$('#subscribe_successful');
    var failedDiv=$('#subscribe_failed');
    var address=$('#subscribe_address');
    var failedBack=$('#subscribe_failed_back');
    subscribeButton.removeAttr('disabled');
    address.removeAttr('disabled');
    subscribeDiv.show();
    successfulDiv.hide();
    failedDiv.hide();
    subscribeButton.click(function(){
        subscribeButton.attr('disabled',"disabled");
        address.attr('disabled',"disabled");
        $.ajax({
            url: "/news/subscribe",
            data: {
                'email_address': address.val()
            }
        }).done(function() {
            subscribeDiv.hide();
            successfulDiv.show();
        }).fail(function(xhr){
            $('#subscribe_failed_message').text(xhr.responseText);
            subscribeDiv.hide();
            failedDiv.show();
        });
        address.val('');
    });
    failedBack.click(function(){
        failedDiv.hide();
        subscribeDiv.show();
    });
    $('#subscribe').click(function(e){
        e.preventDefault();
        $('.dialog',$(this))['dialog']({
            draggable: false,
            resizable: false,
            close: function(){
                $(this)['dialog']("destroy");
            },
            width: $(document).width()/2
        });
    });
    var shareLink=$('#share_link');
    var shareForm=$('#share_form');
    shareLink.focus(function() {
        shareLink.select();
    });
    $('#share').click(function(e){
        e.preventDefault();
        $('.dialog',$(this))['dialog']({
            draggable: false,
            resizable: false,
            modal: true,
            open: function() {
                shareLink.val(window.location);
                shareLink.focus();
                shareForm.attr('action','mailto:?subject=Splunk Storage Configuration&body='+encodeURIComponent(window.location));
            },
            close: function(){
                $(this)['dialog']("destroy");
            },
            width: $(document).width()/2
        });
    });
});
