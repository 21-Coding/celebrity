$(document).ready(function() {
  $("form#Dating-Form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var eyeColor = $("select#EyeColor").val();

    var quote = "is "
    if (gender === 'male' && age < 26 && eyeColor === 'Brown') {
      quote += 'Sting';
    }
    if (gender === 'female' && age > 26 && eyeColor === 'Green') {
      quote += 'Brittany Spears';
    }

    $("#rate").text(quote);
    $("#quote").show()

    event.preventDefault();
  });
});
