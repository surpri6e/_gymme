export let isTouch = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },

    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },

    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },

    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },

    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },

    any: function() {
        return (
            isTouch.Android() || 
            isTouch.BlackBerry() || 
            isTouch.iOS() || 
            isTouch.Opera() || 
            isTouch.Windows()
        );
    }
}