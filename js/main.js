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

$(".gallery nav a").click(function() {
  $(".gallery nav a").removeClass("active");
  $(this).addClass("active");

  var galleryType = $(this).attr("rel");
  if (galleryType == "web") {
    $(".gallery article").fadeOut();
    $(".gallery article").each(function() {
      if ($(this).data("gallery") == "web") {
        $(this).fadeIn();
      }
    });
  } else if (galleryType == "print") {
    $(".gallery article").fadeOut();
    $(".gallery article").each(function() {
      if ($(this).data("gallery") == "print") {
        $(this).fadeIn();
      }
    });
  } else {
    $(".gallery article").fadeIn();
  }

  return false;
});
