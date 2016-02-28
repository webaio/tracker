```
<!-- weba.io Tracker Code -->
<script>
    (function (window, document, dataLayer, trackerId) {
        var script, tag;
        
        window[dataLayer] = window[dataLayer] || [];
        tag = document.createElement('script');
        tag.async = true;
        tag.id = 'weba-tracker';
        tag.src = '//localhost:3000/dist/weba.min.js?dataLayer=' + dataLayer + '&trackerId=' + trackerId;
        script = document.getElementsByTagName('script')[0];
        script.parentNode.insertBefore(tag, script);
        
    }(window, document, 'dataLayer', 'TRACKER_ID'));
</script>
<!-- weba.io Tracker Code -->
```