var bg = 0;

$( document ).ready(function() {
	startIntro();
});

function startIntro(){
	slider();
  	$("#intro").append('<audio autoplay src="sounds/intro2.mp3" autobuffer></audio>');
	  $("#intro1").fadeIn(2000);
	  setTimeout(function() {
	  $("#intro1").fadeOut(2000);
	},5000);
	setTimeout(function() {
      $("#intro2").fadeIn(2000);
      setTimeout(function() {
      $("#intro2").fadeOut(2000);
      },5000);
	},8000);
	setTimeout(function() {
      $("#intro3").fadeIn(2000);
      setTimeout(function() {
      	$("#intro3").fadeOut(2000);
      },8000);
	},16000);
	setTimeout(function() {
      $("#intro4").fadeIn(2000);
      setTimeout(function() {
      	$("#intro").fadeOut(2000);
      },15000);
	},26000);
	setTimeout(function() {
	  $("#pt-main").fadeIn(2000);
	  $("#intro audio").remove();
	  addMap();
	  if(bg == 0){
	  	firstPopup();
	  }
	},43000);
	setTimeout(function() {
	  $.vegas('destroy');
	  if(bg == 0){
	  	addBgsound();
	  	removeScript();
	  	var pageguide = tl.pg.init();
	  	$('#tlyPageGuide').css("display","block");
	  }
	},44000);
}


function slider() {
	$.vegas('slideshow', {
	delay:10000,
  backgrounds:[
	    { src:'img/1.png', fade:3000},
	    { src:'img/2.png', fade:3000},
	    { src:'img/3.png', fade:3000},
	    { src:'img/4.png', fade:3000}
   	]
	})('overlay', {
	  src:'img/overlay3.png'
	});
}