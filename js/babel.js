
// eslint-disable-next-line no-unused-vars
const projectName = 'portfolio';

var $button = $('#myButton'),
  $text = $('#myText'),
  visible = true;

$button.click(function () {
  if (visible) {
    $text.slideUp('fast', function () {
      $text.addClass('hide')
        .slideDown(0);
    });
  } else {
    $text.slideUp(0, function () {
      $text.removeClass('hide')
        .slideDown('fast');
    });
  }
  visible = !visible;
});