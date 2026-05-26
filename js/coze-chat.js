(function() {
  if (window.__medoCozeChatLoaded) return;
  window.__medoCozeChatLoaded = true;

  var currentScript = document.currentScript;
  var scriptBase = currentScript ? currentScript.src : window.location.href;
  var sdkSrc = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.20/libs/cn/index.js';
  var botToken = 'cztei_l6MDbTyVbCKiJtGkGBFzYXCT0HiAdzZWFvQ42SFoiGkFcZGvhPcfD90jEtuo9jMAs';

  function getAssetUrl(path) {
    return new URL(path, scriptBase).toString();
  }

  function initCozeChat() {
    if (!window.CozeWebSDK || !window.CozeWebSDK.WebChatClient) return;

    new window.CozeWebSDK.WebChatClient({
      config: {
        type: 'bot',
        bot_id: '7644113734910230543',
        isIframe: false
      },
      auth: {
        type: 'token',
        token: botToken,
        onRefreshToken: async function() {
          return botToken;
        }
      },
      ui: {
        base: {
          icon: getAssetUrl('../images/chat-support.svg'),
          layout: 'pc',
          lang: 'zh-CN',
          zIndex: 9999
        },
        header: {
          isShow: true,
          isNeedClose: true
        },
        asstBtn: {
          isNeed: true
        },
        footer: {
          isShow: false
        },
        chatBot: {
          title: 'AI 在线客服',
          uploadable: false,
          width: 390
        }
      }
    });
  }

  if (window.CozeWebSDK && window.CozeWebSDK.WebChatClient) {
    initCozeChat();
    return;
  }

  var sdkScript = document.createElement('script');
  sdkScript.src = sdkSrc;
  sdkScript.onload = initCozeChat;
  document.head.appendChild(sdkScript);
})();
