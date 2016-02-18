$(".menu").css("margin-right","-240px");
$("#menu-trigger").click(function() {
  if ($(this).hasClass("open")) {
    $(".menu").animate({
      "margin-right": "-240px"
    }, 1000, function() {
      $("#menu-trigger").removeClass("open");
      $("#menu-trigger .fa").removeClass("fa-close").addClass("fa-navicon");
    });  } else {
    $(".menu").animate({
      "margin-right": "0"
    }, 1000, function() {
      $("#menu-trigger").addClass("open");
      $("#menu-trigger .fa").removeClass("fa-navicon").addClass("fa-close");
    });
  }

});
