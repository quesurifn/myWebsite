$(document).ready(function() {
  $(window).on('resize', function() {
    var win = $(this);
		console.log('aint workin');
    if (win.width() > 600) {
      $(".anc").addClass('social-lg').removeClass('social-sm');
      $(".ico").addClass("icon-lg").removeClass("icon-sm");
			console.log("foo");
    } else {
      $(".anc").addClass('social-sm').removeClass('social-lg');
      $(".ico").addClass("icon-sm").removeClass("icon-lg");
			console.log("else");
    }
  }).trigger("resize"); //this to force first event on load

//more events here

});
