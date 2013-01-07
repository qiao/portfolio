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
        $('#mail-address').html(
          '<a href="mailto:xueqiaoxu@gmail.com">xueqiaoxu@gmail.com</a>'
        );
      });
    }
  };

  function updateLocation(hash) {
    if (hash.charAt(0) === '#') {
      hash = hash.slice(1);
    }
    if (hash === '') {
      window.location.hash = '#projects';
      hash = 'projects';
    }

    $.each(routes, function (key, handler) {
      if (hash === key) {
        handler();
      }
    });
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

  updateLocation(window.location.hash);

})();
