;(function () {

  var $body = $('body');
  var $content = $('#content');
  var cache = {};

  function loadFragment(url, callback) {
    $content.fadeOut(function () {
      if (cache[url]) {
        $content.html(cache[url]).fadeIn();
        if (callback) {
          callback();
        }
      } else {
        $.get(url, function (fragment) {
          cache[url] = fragment;
          $content.html(fragment).fadeIn();
          if (callback) {
            callback();
          }
        });
      }
    });
  }

  var routes = {
    'projects' : function () {
      loadFragment('projects.html');
    },
    'about': function () {
      loadFragment('about.html');
    },
    'contact': function () {
      loadFragment('contact.html', function () {
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
        if ($body.scrollTop() !== 0) {
          $body.animate({
            scrollTop: '0px'
          });
        }
        return false;
      } else {
        updateLocation(hash);
      }
    });
  });

  updateLocation(window.location.hash);

})();
