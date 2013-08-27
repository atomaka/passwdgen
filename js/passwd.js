$(document).ready(function() {
  $('input').corner('round 4px');
  $('button').corner('round 4px');
  $('#box').corner('round bottom');

  $('#root').focus();
});

$('#generate input').on('input', function() {
  var root = $('#root').val();
  var master = $('#master').val()
  var hash = $.md5(root + master);

  hash = hash.replace(/[a-f]/, function(alpha) {
    return alpha.toUpperCase();
  });

  if(root in special) {
    $('#password').val(special[root](hash));
  } else {
    $('#password').val(hash);
  }
});

var currentFocus;
var lastFocus;
$(':input').focus(function() {
  currentFocus = this;
});

$(document).keydown(function(e) {
  var keycode = e.keycode || e.which;
  if(keycode == 17 || keycode == 91) {
    lastFocus = currentFocus;
    $('#password').focus().select();
  }
});

$(document).keyup(function(e) {
  var keycode = e.keycode || e.which;
  if(keycode == 17 || keycode == 91) {
    lastFocus.focus();
  }
});
