jQuery(document).ready(function($) {
  $(".toggle").click(function() {
    $(".toggle").toggleClass("active");
    $("body").toggleClass("night");
    $.cookie("toggle", true);
  });

  if ($.cookie("toggle") == "true") {
    $(".toggle").click();
  }
});