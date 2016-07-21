weba.io tracker
==============
[![Build Status](https://travis-ci.org/webaio/tracker.svg?branch=master)](https://travis-ci.org/webaio/tracker)
[![Coverage Status](https://coveralls.io/repos/github/webaio/tracker/badge.svg?branch=integration-with-travis)](https://coveralls.io/github/webaio/tracker?branch=integration-with-travis)

Part of weba.io application responsible for tracking visitors.

# The JavaScript tracking snippet

```javascript
(function (w, d, t, g, u) {
    w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments);};
    var tag=d.createElement('script');
    tag.async=true;tag.src=u+'?g='+g+'&t='+t;
    var s=d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(tag, s);
}(window, document, 'WEBA-0001', 'weba', '//example.com/weba.min.js'));

weba('send', {
    event: 'pageView'
});
```

