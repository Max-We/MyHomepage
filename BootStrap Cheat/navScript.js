$("#navToggle").click( function(){
if ($("#navBarz").hasClass("closedNav")) {
  $("#navBarz").css("background-color", "#151515").addClass("openNav").removeClass("closedNav");
} else if ($("#navBarz").hasClass("openNav")) {
    $("#navBarz").css("background-color", "transparent").addClass("closedNav").removeClass("openNav");
  }
});
