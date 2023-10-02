/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';

const ChannelTalk = () => {
  return (
    <Script
      id="hellogsmChannelTalk"
      dangerouslySetInnerHTML={{
        __html: `(function() {
          var w = window;
          if (w.ChannelIO) {
          return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
          }
          var ch = function() {
          ch.c(arguments);
          };
          ch.q = [];
          ch.c = function(args) {
          ch.q.push(args);
          };
          w.ChannelIO = ch;
          function l() {
          if (w.ChannelIOInitialized) {
              return;
          }
          w.ChannelIOInitialized = true;
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
          s.charset = 'UTF-8';
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
          }
          if (document.readyState === 'complete') {
          l();
          } else if (window.attachEvent) {
          window.attachEvent('onload', l);
          } else {
          window.addEventListener('DOMContentLoaded', l, false);
          window.addEventListener('load', l, false);
          }
      })();
      ChannelIO('boot', {
      "pluginKey": "${process.env.NEXT_PUBLIC_CHANNEL_IO_KEY}"
      "memberId":"hellogsm@gsm.hs.kr"
      },
      "memberHash":"807533003f27a3c6014b7290a15a120b8813008868dafde7a6e0d8d099c6d10c"
      );
        `,
      }}
    />
  );
};

export default ChannelTalk;
