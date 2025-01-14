const config = {};
config.entity = 'd3@t4N0te!';
config.platformId = 1;
config.optType = 1;
config.isMobile = () => {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(navigator.userAgent);
};

config.BrowserDetect = {
  Android: function () {
    return !!navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  iPAD: function () {
    return !!navigator.userAgent.match(/iPad/i);
  },
  Windows: function () {
    return !!navigator.userAgent.match(/Windows/i);
  },
  Windows_surface: function () {
    return !(!navigator.userAgent.match(/Trident/i) || !navigator.userAgent.match(/Tablet/i));
  },
  any: function () {
    return (
      config.BrowserDetect.Android() ||
      config.BrowserDetect.BlackBerry() ||
      config.BrowserDetect.iOS() ||
      config.BrowserDetect.Windows()
    );
  },
  ie9: function () {
    return !!navigator.userAgent.match(/MSIE 9.0/i);
  },
  ie10: function () {
    return !!navigator.userAgent.match(/MSIE 10.0/i);
  },
  ie11: function () {
    return !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  },
  ie: function () {
    return config.BrowserDetect.ie9() || config.BrowserDetect.ie10() || config.BrowserDetect.ie11();
  },
  FF: function () {
    return typeof InstallTrigger !== 'undefined';
  },
  safari: function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') !== -1) {
      if (ua.indexOf('crios') > -1) {
        return false; // Chrome
      } else {
        return true; // Safari
      }
    }
  }
};
export default config;
