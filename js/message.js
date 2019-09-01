$(document).ready(function(){



  $("#misaki-tag").on("click", function() {

    $('#misaki').addClass("active");
    $('#mabuchi').removeClass("active");

  });

  $("#mabuchi-tag").on("click", function() {

    $('#mabuchi').addClass("active");
    $('#misaki').removeClass("active");

});


});
