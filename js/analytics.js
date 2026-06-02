// PB Zero Wiki — GA4 (no AdSense until organic traffic)
(function() {
  'use strict';
  var GA4_ID = 'G-YXEGDH7C2F';

  var gs = document.createElement('script');
  gs.async = true;
  gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(gs);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA4_ID);
})();
