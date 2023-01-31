$(document).ready(function() {
  $('textarea').on('input', function() {
    let text = $(this).val();
    let remaining = 140 - text.length;
    console.log('Text length: ' + remaining);
    let counter = $(this).parent().find(".counter");
    counter.text(remaining);
    if (remaining < 0) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "inherit");
    }
  });
});
