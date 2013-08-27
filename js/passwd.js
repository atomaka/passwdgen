$(document).ready(function() {
  $('#root').focus();
});

$('#generate input').on('input', function() {
  var hash = $.md5($('#root').val() + ('#master').val());

  hash = hash.replace(/[a-f]/, function(alpha) {
    return alpha.toUpperCase();
  });

  if($('#root').val() in special) {
    $('#password').val(special[$('#root').val()](hash));
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
