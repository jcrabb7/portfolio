var currentBubble;
var progressVisible;

$(function() {
  $('#bubble #home-content').show();
  currentBubble = '#home-content';
  progressVisible = false;

  $('#bubble').hide();
  $('a.bubble-button').on('click', function(e) {
    e.preventDefault();
    var a = $(this);
    $(currentBubble).fadeOut('fast', function() {
      currentBubble = '#' + a.attr('target');
      $(currentBubble).fadeIn('fast');
    });
  });

  $('a#portfolio-nav').on('click', function(e) {
    e.preventDefault();
    if(progressVisible) {
      hideProgress();
    } else {
      showProgress();
    }
  });
});

showProgress = function() {
  progressVisible = true;
  $('#minibar').slideDown('fast', function() {
    $('#progress').fadeIn('fast', function() {
      $(this).animate({height: 20}, function() {
        var num = $(this).children().length;
        var wd = (num-1) * parseInt($('#progress a').css('margin-right')) + (num * parseInt($('#progress a').css('width')));
        $(this).animate({width: wd}, function() {
          $('#progress a').fadeIn('fast');
        });
      });
    }).css("display", "inline-block");
  });
}

hideProgress = function() {
  progressVisible = false;
  $('#progress a').fadeOut('fast', function() {
    $('#progress').animate({width: 0}, function() {
      $(this).animate({height: 0}, function() {
        $(this).fadeOut('fast', function() {
          $('#minibar').slideUp('fast');
        });
      });
    });
  });
}
