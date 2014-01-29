(function($) {
  $.fn.delayLink = function(fn, options) {
      var settings = $.extend(options, {
          timeout: 100
      });
      $(this).on('click', function(e) {
          e.preventDefault();
          var went = false;
          var link = this;
          var go = function() {
              went = true;
              console.log('go');
              if (e.crtlKey || e.metaKey) {
                  window.open(link.href);
              } else {
                  window.location.href = link.href;
              }
          };
          var timer = setTimeout(go, settings.timeout);
          fn(function(dont) {
              if (dont !== false) {
                  clearTimeout(timer);
                  if (went === false) {
                      go();
                  }
              }
          });
      });
  };
})(this.jQuery);