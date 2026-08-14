// PB Zero Wiki — GA4 (no AdSense until organic traffic)
// Enhanced with scroll tracking + engagement timer 2026-08-08
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
  gtag('config', GA4_ID, {send_page_view: true});

  // 15s engagement signal
  setTimeout(function(){gtag('event','time_on_page',{non_interaction:false})},15000);

  // Scroll depth tracking
  (function(){
    var marks={25:0,50:0,75:0,100:0},timer;
    document.addEventListener('scroll',function(){
      if(timer)return;timer=setTimeout(function(){
        var pct=Math.round((window.scrollY+window.innerHeight)/document.body.scrollHeight*100);
        for(var k in marks){if(pct>=+k&&!marks[k]){marks[k]=1;gtag('event','scroll_'+k+'%',{non_interaction:true})}}
        timer=null},300)
    },{passive:true})
  })();
})();
