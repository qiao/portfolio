/*global History: true*/

;(function () {

  var $content = $('#content');

  function loadFragment(selector, callback) {
    $content.fadeOut(function () {
      var fragment = $(selector).html();
      $content.html(fragment).fadeIn();
      if (callback) {
        callback();
      }
    });
  }

  var routes = {
    'projects' : function () {
      loadFragment('#projects-content');
    },
    'about': function () {
      loadFragment('#about-content');
    },
    'contact': function () {
      loadFragment('#contact-content', function () {
        $('#mail').attr('href', 'mailto:xueqiaoxu@gmail.com');
        $('#mail-address').text('xueqiaoxu@gmail.com');
      });
    }
  };

  function updateLocation(hash) {
    hash = hash || window.location.hash;
    if (hash.charAt(0) === '#') {
      hash = hash.slice(1);
    }
    if (hash === '') {
      window.location.hash = '#projects';
      hash = 'projects';
    }
    routes[hash]();
  }

  $('#internal a').each(function () {
    var $a = $(this);
    $a.click(function () {
      var hash = $a.attr('href');
      if (hash === window.location.hash) {
        $('html, body').animate({
          scrollTop: '0px'
        });
        return false;
      } else {
        updateLocation(hash);
      }
    });
  });

  updateLocation();

})();
