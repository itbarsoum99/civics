$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".navbar").css("background" , "#202124");
      $("nav a").css("color", "#e8eaed");
	  }
	  else{
		  $(".navbar").css("background" , "transparent");  	
      $("nav a").css("color", "#202124");
	  }
  })
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
