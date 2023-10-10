/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';

const ChannelTalk = () => {
  return (
    <Script
      id="ThemomentHellogsmChannelTalk"
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
          "pluginKey": "42749bf3-df17-49ec-9c34-422e45ef0d07",
          "memberId": "ThemomentHellogsmChannelTalk",
          "memberHash": "17c5f8aa373cec7f8d01cb55d936139a7e4103566aa3a52f951a4546681b5ec5"
        });
        `,
      }}
    />
  );
};

export default ChannelTalk;
