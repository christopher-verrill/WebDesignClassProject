
// slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


$(document).ready(function(){

	// change navbar background/color on scroll
  var scroll_pos = 0;
  var height = window.innerHeight;
  $(document).scroll(function() { 
    	if(window.innerWidth < 1025) {
				return;
			}
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > height-200) {  // Changes after user scrolls past window's height
          $("nav").css('background-color', '#33363b');
          $(".nav-link").css('color', 'white');
          $("nav a").css('color', 'white');
          $(".dropdown-menu").css('background-color', '#33363b');
          $(".dropdown-menu a").css('background-color', '#33363b');   
          $(".dropdown-item a:hover").css('background-color', '#33363b');
      } else {
          $("nav").css('background', 'transparent');
          $("nav a").css('color', 'white');
          $(".dropdown-menu").css('background', 'transparent');
          $(".dropdown-menu a").css('background', 'transparent');
          $("nav").css('border-bottom', 'none');
      }
	});
});