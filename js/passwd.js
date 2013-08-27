$(document).ready(function() {
  $('#root').focus();
});

$('#generate input').on('input', function() {
  hash = generatePassword($('#root').val(), $('#master').val());

  $('#password').val(specialCase($('#root').val(), hash));
});

function generatePassword(root, master) {
  return $.md5(root + master).replace(/[a-f]/, function(alpha) {
    return alpha.toUpperCase();
  });
}

function specialCase(root, hash) {
  return (special[root] != undefined) ? special[root](hash) : hash;
}

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
