var positionSlider = 0;

$(document).ready(function(){

	// Posities events, flashbacks and slider
	var positionBigEvent1 = 0;
	var positionBigEvent2 = 0;
	var positionBigEvent3 = 0;
	var positionBigEvent4 = 0;
	var positionEvent1 = 0;
	var positionEvent2 = 0;
	var positionEvent3 = 0;
	var positionEvent4 = 0;
	var positionEvent5 = 0;
	var positionEvent6 = 0;
	var positionEvent7 = 0;
	var positionEvent8 = 0;
	var positionEvent9 = 0;
	var positionFlashback1 = 0;
	var positionFlashback2 = 0;
	var positionFlashback3 = 0;
	var positionFlashback4 = 0;
	var positionFlashback5 = 0;
	var positionFlashback6 = 0;
	var positionSlider = 0;
	
	// Snelheid slider
	var speed1 = 0;
	var speed2 = 0;
	var speed3 = 0;
	var speed4 = 0;
	var speed5 = 0;
	var speed6 = 0;
	var speed7 = 0;
	var speed8 = 0;
	var speed9 = 0;
	var speed10 = 0;
	var speed11 = 0;
	var speed12 = 0;
	var speed13 = 0;
	var speed14 = 0;
	var speed15 = 0;
	var speed16 = 0;
	var speed17 = 0;
	var speed18 = 0;
		
	// Tekst meldingen big events
	var titleBigEvent1 = "8:46 - Flight 11 crashes into North Tower</div>";
	var textBigEvent1 = "<video width='300' height='225' autoplay><source src='av/03_flight11_crash.mp4' type='video/mp4'></video>";
	var titleBigEvent2 = "9:03 - Flight 175 crashes into South Tower";
	var textBigEvent2 = "<video width='300' height='225' autoplay><source src='av/05_flight175_crash.mp4' type='video/mp4'></video>";
	var titleBigEvent3 = "9:58 - South Tower collapses";
	var textBigEvent3 = "<video width='300' height='225' autoplay><source src='av/07_collapse_southtower.mp4' type='video/mp4'></video>";
	var titleBigEvent4 = "10:28 - North Tower collapses";
	var textBigEvent4 = "<video width='300' height='225' autoplay><source src='av/08_collapse_northtower.mp4' type='video/mp4'></video>";
	
	// Tekst meldingen
	var titleEvent1 = "7:59 - Flight 11 departs</div>";
	var textEvent1 = "American Airlines Flight 11 departs from Logan International Airport Boston with destination LAX Los Angeles.";
	var titleEvent2 = "8:14 - Flight 11 hijacked<br>Flight 175 departs.";
	var textEvent2 = "- Flight 11 is hijacked.<br><br>- United Airlines Flight 175 departs from Logan International Airport Boston with destination LAX Los Angeles.<audio autoplay><source src='av/01_flight11_hijacker.mp3' type='audio/mpeg'></audio>";
	var titleEvent3 = "8:19 - Betty calls about hijacking";
	var textEvent3 = "<video width='300' height='225' autoplay><source src='av/02_flight11_betty.mp4' type='video/mp4'></video>";
	var titleEvent4 = "9:02 - Evacuation North Tower";
	var textEvent4 = "Evacuation is ordered by FDNY Battalion Chief Joseph Pfeifer (North Tower). An announcement is made over the PA system to evacuate the buildings.";
	var titleEvent5 = "9:21 - Manhatten is closed";
	var textEvent5 = "All bridges and tunnels into Manhattan closed.";
	var titleEvent6 = "9:29 - Press conference President Bush";
	var textEvent6 = "<video width='192' height='144' autoplay><source src='av/06_pressconference_bush.mp4' type='video/mp4'></video>";
	var titleEvent7 = "9:45 - Shutdown U.S. airspace";
	var textEvent7 = "United States airspace is shut down. No civilian aircrafts are allowed to take off, and all aircrafts in flight are ordered to land at the nearest airport as soon as possible.";
	var titleEvent8 = "10:00 - Evacuation North Tower";
	var textEvent8 = "Moments after the South Tower fell, FDNY Battalion Chief Joseph Pfeifer (inside of North Tower) said on the radio the order to all firemen, at least twice, 'Evacuate the building'. Due to many communication limitations, numerous firefighters within the tower did not receive this transmission.<audio autoplay><source src='av/commfailed.mp3' type='audio/mpeg'></audio>";
	var titleEvent9 = "10:30 - Regroup firefighters";
	var textEvent9 = "<video width='300' height='225' autoplay><source src='av/09_regroup_firefighters.mp4' type='video/mp4'></video>";
	
	// Flashbacks
	var titleFlashback1 = "Story - Everyone helped";
	var textFlashback1 = "<video width='300' height='225' autoplay><source src='av/notworking.mp4' type='video/mp4'></video>";
	var titleFlashback2 = "Story - Only memories";
	var textFlashback2 = "<video width='300' height='225' autoplay><source src='av/memories.mp4' type='video/mp4'></video>";
	var titleFlashback3 = "Story - Digg for hope";
	var textFlashback3 = "<video width='300' height='225' autoplay><source src='av/digg4days.mp4' type='video/mp4'></video>";
	var titleFlashback4 = "Story - Something is everything";
	var textFlashback4 = "<video width='300' height='225' autoplay><source src='av/findingBodies.mp4' type='video/mp4'></video>";
	var titleFlashback5 = "Story - Desperate phonecalls";
	var textFlashback5 = "<video width='300' height='225' autoplay><source src='av/phonecalls.mp4' type='video/mp4'></video>";
	var titleFlashback6 = "Story - A fireman will never let anyone behind";
	var textFlashback6 = "<video width='300' height='225' autoplay><source src='av/ending.mp4' type='video/mp4'></video>";
	
	// Slider
	var maxSpeed = 10000;
	var speedSlider = 0;
	var directionSlider = true;
	var timer = 0;
	
	// Backward button
	$("#backwardbtn").click(function(){
		animateSlider(false);
	});
	
	// Forward button
	$("#forwardbtn").click(function(){
		if(positionSlider == 0){
			setVars();
			positionSlider = positionFlashback1;
		}		
		animateSlider(true);
	});
	
	// Click on bullet
	$(".eventClick").click(function(e){
	
		clearTimeout(timer);
		
		var goToEvent = $("#" + e.target.id).position().left;
		
		if(positionSlider == 0){
			setVars();
			positionSlider = positionFlashback1;
		}			
		if($(e.target).hasClass('eventsK')){
			$("#timelineSlider").css("left", goToEvent);
			positionSlider = goToEvent;
		}
		else if($(e.target).hasClass('events')){
			$("#timelineSlider").css("left", goToEvent+5);
			positionSlider = goToEvent+5;
		}
		else if($(e.target).hasClass('flashback')){
			$("#timelineSlider").css("left", goToEvent);
			positionSlider = goToEvent;
		}
		
		setEvents("click");
	});
	
	// Close popup
	$("#icon-close-small").click(function(){
		clearTimeout(timer);
	});
	
	// Set variables
	function setVars(){	
		// Position events
		positionBigEvent1 = $("#bigEvent1").position().left+5;
		positionBigEvent2 = $("#bigEvent2").position().left+5;
		positionBigEvent3 = $("#bigEvent3").position().left+5;
		positionBigEvent4 = $("#bigEvent4").position().left+5;
		positionEvent1 = $("#event1").position().left;
		positionEvent2 = $("#event2").position().left;
		positionEvent3 = $("#event3").position().left;
		positionEvent4 = $("#event4").position().left;
		positionEvent5 = $("#event5").position().left;
		positionEvent6 = $("#event6").position().left;
		positionEvent7 = $("#event7").position().left;
		positionEvent8 = $("#event8").position().left;
		positionEvent9 = $("#event9").position().left;
		
		// Position flashbacks
		positionFlashback1 = $("#flashback1").position().left;
		positionFlashback2 = $("#flashback2").position().left;
		positionFlashback3 = $("#flashback3").position().left;
		positionFlashback4 = $("#flashback4").position().left;
		positionFlashback5 = $("#flashback5").position().left;
		positionFlashback6 = $("#flashback6").position().left;
		
		// Speed timeline
		speed1 = ((positionEvent1-positionFlashback1)/positionFlashback6)*maxSpeed;
		speed2 = ((positionEvent2-positionEvent1)/positionFlashback6)*maxSpeed;
		speed3 = ((positionEvent3-positionEvent2)/positionFlashback6)*maxSpeed;
		speed4 = ((positionFlashback2-positionEvent3)/positionFlashback6)*maxSpeed;
		speed5 = ((positionBigEvent1-positionFlashback2)/positionFlashback6)*maxSpeed;
		speed6 = ((positionFlashback3-positionBigEvent1)/positionFlashback6)*maxSpeed;
		speed7 = ((positionEvent4-positionFlashback3)/positionFlashback6)*maxSpeed;
		speed8 = ((positionBigEvent2-positionEvent4)/positionFlashback6)*maxSpeed;
		speed9 = ((positionEvent5-positionBigEvent2)/positionFlashback6)*maxSpeed;
		speed10 = ((positionEvent6-positionEvent5)/positionFlashback6)*maxSpeed;
		speed11 = ((positionFlashback4-positionEvent6)/positionFlashback6)*maxSpeed;
		speed12 = ((positionEvent7-positionFlashback4)/positionFlashback6)*maxSpeed;
		speed13 = ((positionBigEvent3-positionEvent7)/positionFlashback6)*maxSpeed;
		speed14 = ((positionEvent8-positionBigEvent3)/positionFlashback6)*maxSpeed;
		speed15 = ((positionFlashback5-positionEvent8)/positionFlashback6)*maxSpeed;
		speed16 = ((positionBigEvent4-positionFlashback5)/positionFlashback6)*maxSpeed;
		speed17 = ((positionEvent9-positionBigEvent4)/positionFlashback6)*maxSpeed;
		speed18 = ((positionFlashback6-positionEvent9)/positionFlashback6)*maxSpeed;
	}
	
	function animateSlider(direction){
		if($("#timelinepopup").is(":visible")){
			$("#timelinepopup").css("display", "none");
			clearTimeout(timer);
			$("#eventTitle").html("");
			$("#eventContent").html("");
		}
		setEvents(direction);
	}
	
	function setEvents(direction){
	
		$(".events").removeAttr('style');
		$(".eventsK").removeAttr('style');
		$(".flashback").removeAttr('style');
		$("#eventArrow").removeAttr('style');
		
		switch(positionSlider){
			case positionFlashback1:
				if(direction == true){
					$("#timelineSlider").animate({left:positionEvent1},speed1, "linear");
					positionSlider = positionEvent1;
					setTimeout(function(){
						$("#event1").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent1);
						$("#eventContent").html(textEvent1);
						$("#timelinepopup").css({"left": positionEvent1-43}).fadeIn(500);
					}, speed1);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#flashback1").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleFlashback1);
						$("#eventContent").html(textFlashback1);
						$("#timelinepopup").css({"left": positionFlashback1-43}).fadeIn(500);
					},500);
				}
				break;
			case positionEvent1:
				if(direction == true){
					$("#timelineSlider").animate({left:positionEvent2},speed2, "linear");
					positionSlider = positionEvent2;
					setTimeout(function(){
						$("#event2").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent2);
						$("#eventContent").html(textEvent2);
						$("#timelinepopup").css({"left": positionEvent2-43}).fadeIn(500);
					}, speed2);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionFlashback1},speed1, "linear");
					positionSlider = positionFlashback1;
					$("#flashback1").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleFlashback1);
						$("#eventContent").html(textFlashback1);
						$("#timelinepopup").css({"left": positionFlashback1-43}).fadeIn(500);
					},500);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event1").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleEvent1);
						$("#eventContent").html(textEvent1);
						$("#timelinepopup").css({"left": positionEvent1-43}).fadeIn(500);
					},500);
				}
				break;	
			case positionEvent2:
				if(direction == true){
					$("#timelineSlider").animate({left:positionEvent3},speed3, "linear");
					positionSlider = positionEvent3;
					setTimeout(function(){
						$("#event3").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent3);
						$("#eventContent").html(textEvent3);
						$("#timelinepopup").css({"left": positionEvent3-43}).fadeIn(500);
					}, speed3);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent1},speed2, "linear");
					positionSlider = positionEvent1;
					setTimeout(function(){
						$("#event1").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent1);
						$("#eventContent").html(textEvent1);
						$("#timelinepopup").css({"left": positionEvent1-43}).fadeIn(500);
					}, speed2);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event2").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleEvent2);
						$("#eventContent").html(textEvent2);
						$("#timelinepopup").css({"left": positionEvent2-43}).fadeIn(500);
					},500);
				}
				break;	
			case positionEvent3:
				if(direction == true){
					$("#timelineSlider").animate({left:positionFlashback2},speed4, "linear");
					positionSlider = positionFlashback2;
					$("#flashback2").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleFlashback2);
						$("#eventContent").html(textFlashback2);
						$("#timelinepopup").css({"left": positionFlashback2-43}).fadeIn(500);
					},speed4);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent2},speed3, "linear");
					positionSlider = positionEvent2;
					setTimeout(function(){
						$("#event2").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent2);
						$("#eventContent").html(textEvent2);
						$("#timelinepopup").css({"left": positionEvent2-43}).fadeIn(500);
					}, speed3);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event3").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleEvent3);
						$("#eventContent").html(textEvent3);
						$("#timelinepopup").css({"left": positionEvent3-43}).fadeIn(500);
					},500);
				}
				break;	
			case positionFlashback2:
				if(direction == true){
					$("#timelineSlider").animate({left:positionBigEvent1},speed5, "linear");
					positionSlider = positionBigEvent1;
					setTimeout(function(){
						$("#bigEvent1").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent1);
						$("#eventContent").html(textBigEvent1);
						$("#timelinepopup").css({"left": positionBigEvent1-43}).fadeIn(500);
						timer = setTimeout(function(){
							addShock();
							addTowerIcons("north");
							setTimeout(function(){ addTeams("first"); },25500);
						}, 14500);
					}, speed5);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent3},speed4, "linear");
					positionSlider = positionEvent3;
					setTimeout(function(){
						$("#event3").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent3);
						$("#eventContent").html(textEvent3);
						$("#timelinepopup").css({"left": positionEvent3-43}).fadeIn(500);
					}, speed4);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#flashback2").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleFlashback2);
						$("#eventContent").html(textFlashback2);
						$("#timelinepopup").css({"left": positionFlashback2-43}).fadeIn(500);
					},500);
				}
				break;	
			case positionBigEvent1:
				if(direction == true){
					addTeams("first");
					addTowerIcons("north");
					$("#timelineSlider").animate({left:positionFlashback3},speed6, "linear");
					positionSlider = positionFlashback3;
					setTimeout(function(){
						$("#flashback3").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback3);
						$("#eventContent").html(textFlashback3);
						$("#timelinepopup").css({"left": positionFlashback3-43}).fadeIn(500);
					}, speed6);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionFlashback2},speed5, "linear");
					positionSlider = positionFlashback2;
					setTimeout(function(){
						$("#flashback2").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback2);
						$("#eventContent").html(textFlashback2);
						$("#timelinepopup").css({"left": positionFlashback2-43}).fadeIn(500);
					}, speed5);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#bigEvent1").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleBigEvent1);
						$("#eventContent").html(textBigEvent1);
						$("#timelinepopup").css({"left": positionBigEvent1-43}).fadeIn(500);
						timer = setTimeout(function(){
							addShock();
							addTowerIcons("north");
							setTimeout(function(){ addTeams("first"); },25500);
						}, 14500);
					},500);
				}
				break;	
			case positionFlashback3:
				if(direction == true){
					addTeams("first");
					$("#timelineSlider").animate({left:positionEvent4},speed7, "linear");
					positionSlider = positionEvent4;
					setTimeout(function(){
						$("#event4").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent4);
						$("#eventContent").html(textEvent4);
						$("#timelinepopup").css({"left": positionEvent4-43}).fadeIn(500);
					}, speed7);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionBigEvent1},speed6, "linear");
					positionSlider = positionBigEvent1;
					setTimeout(function(){
						$("#bigEvent1").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent1);
						$("#eventContent").html(textBigEvent1);
						$("#timelinepopup").css({"left": positionBigEvent1-43}).fadeIn(500);
						timer = setTimeout(function(){
							addShock();
						}, 14500);
					}, speed6);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#flashback3").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleFlashback3);
						$("#eventContent").html(textFlashback3);
						$("#timelinepopup").css({"left": positionFlashback3-43}).fadeIn(500);
					},500);
				}
				break;	
			case positionEvent4:
				if(direction == true){
					$("#timelineSlider").animate({left:positionBigEvent2},speed8, "linear");
					positionSlider = positionBigEvent2;
					setTimeout(function(){
						$("#bigEvent2").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent2);
						$("#eventContent").html(textBigEvent2);
						$("#timelinepopup").css({"left": positionBigEvent2-43}).fadeIn(500);
						timer = setTimeout(function(){
							addShock();
							addTowerIcons("south");
							setTimeout(function(){ addTeams("last") },33000);
						}, 7000);
					}, speed8);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionFlashback3},speed7, "linear");
					positionSlider = positionFlashback3;
					setTimeout(function(){
						$("#flashback3").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback3);
						$("#eventContent").html(textFlashback3);
						$("#timelinepopup").css({"left": positionFlashback3-43}).fadeIn(500);
					}, speed7);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event4").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						addTeams("first");
						addTowerIcons("north");
						$("#eventTitle").html(titleEvent4);
						$("#eventContent").html(textEvent4);
						$("#timelinepopup").css({"left": positionEvent4-43}).fadeIn(500);
					},500);
				}
				break;
			case positionBigEvent2:
				if(direction == true){
					addTeams("last");
					$("#timelineSlider").animate({left:positionEvent5},speed9, "linear");
					positionSlider = positionEvent5;
					setTimeout(function(){
						addbridges();
						$("#event5").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent5);
						$("#eventContent").html(textEvent5);
						$("#timelinepopup").css({"left": positionEvent5-43}).fadeIn(500);
					}, speed9);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent4},speed8, "linear");
					positionSlider = positionEvent4;
					setTimeout(function(){
						$("#event4").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent4);
						$("#eventContent").html(textEvent4);
						$("#timelinepopup").css({"left": positionEvent4-43}).fadeIn(500);
					}, speed8);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#bigEvent2").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleBigEvent2);
						$("#eventContent").html(textBigEvent2);
						$("#timelinepopup").css({"left": positionBigEvent2-43}).fadeIn(500);
						timer = setTimeout(function(){
							addShock();
							addTowerIcons("south");
							setTimeout(function(){ addTeams("last") },33000);
						}, 7000);
						addTeams("first");
						addTowerIcons("north");
					},500);
				}
				break;
			case positionEvent5:
				if(direction == true){
					addTowerIcons("south");
					$("#timelineSlider").animate({left:positionEvent6},speed10, "linear");
					positionSlider = positionEvent6;
					setTimeout(function(){
						$("#event6").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent6);
						$("#eventContent").html(textEvent6);
						$("#timelinepopup").css({"left": positionEvent6-43}).fadeIn(500);
					}, speed10);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionBigEvent2},speed9, "linear");
					positionSlider = positionBigEvent2;
					setTimeout(function(){
						$("#bigEvent2").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent2);
						$("#eventContent").html(textBigEvent2);
						$("#timelinepopup").css({"left": positionBigEvent2-43}).fadeIn(500);
						timer = setTimeout(function(){
							addShock();
							addTowerIcons("north");
							setTimeout(function(){
							}, 3000);
						}, 7000);
					}, speed9);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event5").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleEvent5);
						$("#eventContent").html(textEvent5);
						$("#timelinepopup").css({"left": positionEvent5-43}).fadeIn(500);
						addbridges();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
					},500);
				}
				break;
			case positionEvent6:
				if(direction == true){
					$("#timelineSlider").animate({left:positionFlashback4},speed11, "linear");
					positionSlider = positionFlashback4;
					setTimeout(function(){
						$("#flashback4").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback4);
						$("#eventContent").html(textFlashback4);
						$("#timelinepopup").css({"left": positionFlashback4-43}).fadeIn(500);
					}, speed11);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent5},speed10, "linear");
					positionSlider = positionEvent5;
					setTimeout(function(){
						$("#event5").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent5);
						$("#eventContent").html(textEvent5);
						$("#timelinepopup").css({"left": positionEvent5-43}).fadeIn(500);
					}, speed10);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event6").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleEvent6);
						$("#eventContent").html(textEvent6);
						$("#timelinepopup").css({"left": positionEvent6-43}).fadeIn(500);
						addbridges();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
					},500);
				}
				break;
			case positionFlashback4:
				if(direction == true){
					$("#timelineSlider").animate({left:positionEvent7},speed12, "linear");
					positionSlider = positionEvent7;
					setTimeout(function(){
						$("#event7").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent7);
						$("#eventContent").html(textEvent7);
						$("#timelinepopup").css({"left": positionEvent7-43}).fadeIn(500);
						addShutdownAirspace();
					}, speed12);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent6},speed11, "linear");
					positionSlider = positionEvent6;
					setTimeout(function(){
						$("#event6").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent6);
						$("#eventContent").html(textEvent6);
						$("#timelinepopup").css({"left": positionEvent6-43}).fadeIn(500);
					}, speed11);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#flashback4").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleFlashback4);
						$("#eventContent").html(textFlashback4);
						$("#timelinepopup").css({"left": positionFlashback4-43}).fadeIn(500);
						addbridges();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
					},500);
				}
				break;
			case positionEvent7:
				if(direction == true){
					addShutdownAirspace();
					$("#timelineSlider").animate({left:positionBigEvent3},speed13, "linear");
					positionSlider = positionBigEvent3;
					setTimeout(function(){
						$("#bigEvent3").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent3);
						$("#eventContent").html(textBigEvent3);
						$("#timelinepopup").css({"left": positionBigEvent3-43}).fadeIn(500);
						timer = setTimeout(function(){
							countSouth();
							addCloud("collapseSouth");
						}, 24000);
					}, speed13);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionFlashback4},speed12, "linear");
					positionSlider = positionFlashback4;
					setTimeout(function(){
						$("#flashback4").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback4);
						$("#eventContent").html(textFlashback4);
						$("#timelinepopup").css({"left": positionFlashback4-43}).fadeIn(500);
					}, speed12);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event7").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleEvent7);
						$("#eventContent").html(textEvent7);
						$("#timelinepopup").css({"left": positionEvent7-43}).fadeIn(500);
						addbridges();
						addShutdownAirspace();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
					},500);
				}
				break;
			case positionBigEvent3:
				if(direction == true){
					countSouth();
					addCloud("collapseSouth");
					$("#timelineSlider").animate({left:positionEvent8},speed14, "linear");
					positionSlider = positionEvent8;
					setTimeout(function(){
						$("#event8").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent8);
						$("#eventContent").html(textEvent8);
						$("#timelinepopup").css({"left": positionEvent8-43}).fadeIn(500);
					}, speed14);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent7},speed13, "linear");
					positionSlider = positionEvent7;
					setTimeout(function(){
						$("#event7").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent7);
						$("#eventContent").html(textEvent7);
						$("#timelinepopup").css({"left": positionEvent7-43}).fadeIn(500);
						addShutdownAirspace();
					}, speed13);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#bigEvent3").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#eventTitle").html(titleBigEvent3);
						$("#eventContent").html(textBigEvent3);
						$("#timelinepopup").css({"left": positionBigEvent3-43}).fadeIn(500);
						timer = setTimeout(function(){
							countSouth();
							addCloud("collapseSouth");
						}, 24000);
						addbridges();
						addShutdownAirspace();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
					},500);
				}
				break;
			case positionEvent8:
				if(direction == true){
					$("#timelineSlider").animate({left:positionFlashback5},speed15, "linear");
					positionSlider = positionFlashback5;
					setTimeout(function(){
						$("#flashback5").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback5);
						$("#eventContent").html(textFlashback5);
						$("#timelinepopup").css({"left": positionFlashback5-280}).fadeIn(500);
						$("#eventArrow").css("left", positionFlashback5-545).fadeIn(500);
						timer = setTimeout(function(){
							countNorth();
							addCloud("collapseNorth");
						}, 53000);
					}, speed15);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionBigEvent3},speed14, "linear");
					positionSlider = positionBigEvent3;
					setTimeout(function(){
						$("#bigEvent3").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent3);
						$("#eventContent").html(textBigEvent3);
						$("#timelinepopup").css({"left": positionBigEvent3-43}).fadeIn(500);
						timer = setTimeout(function(){
							countSouth();
							addCloud("collapseSouth");
						}, 24000);
					}, speed14);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event8").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){	
						countSouth();
						addCloud("collapseSouth");
						addbridges();
						addShutdownAirspace();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
						$("#eventTitle").html(titleEvent8);
						$("#eventContent").html(textEvent8);
						$("#timelinepopup").css({"left": positionEvent8-43}).fadeIn(500);
					},500);
				}
				break;
			case positionFlashback5:
				if(direction == true){
					$("#timelineSlider").animate({left:positionBigEvent4},speed16, "linear");
					positionSlider = positionBigEvent4;
					setTimeout(function(){
						$("#bigEvent4").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent4);
						$("#eventContent").html(textBigEvent4);
						$("#timelinepopup").css({"left": positionBigEvent4-280}).fadeIn(500);
						$("#eventArrow").css("left", positionBigEvent4-622).fadeIn(500);
						timer = setTimeout(function(){
							countNorth();
							addCloud("collapseNorth");
						}, 53000);
					}, speed16);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionEvent8},speed15, "linear");
					positionSlider = positionEvent8;
					setTimeout(function(){
						$("#event8").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent8);
						$("#eventContent").html(textEvent8);
						$("#timelinepopup").css({"left": positionEvent8-43}).fadeIn(500);
					}, speed15);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#flashback5").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){	
						countSouth();
						addCloud("collapseSouth");
						addbridges();
						addShutdownAirspace();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
						$("#eventTitle").html(titleFlashback5);
						$("#eventContent").html(textFlashback5);
						$("#timelinepopup").css({"left": positionFlashback5-280}).fadeIn(500);
						$("#eventArrow").css("left", positionFlashback5-545).fadeIn(500);
					},500);
				}
				break;
			case positionBigEvent4:
				if(direction == true){
					countNorth();
					addCloud("collapseNorth");
					$("#timelineSlider").animate({left:positionEvent9},speed17, "linear");
					positionSlider = positionEvent9;
					setTimeout(function(){
						$("#event9").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent9);
						$("#eventContent").html(textEvent9);
						$("#timelinepopup").css({"left": positionEvent9-280}).fadeIn(500);
						$("#eventArrow").css("left", positionEvent9-626).fadeIn(500);
					}, speed17);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionFlashback5},speed16, "linear");
					positionSlider = positionFlashback5;
					setTimeout(function(){
						$("#flashback5").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback5);
						$("#eventContent").html(textFlashback5);
						$("#timelinepopup").css({"left": positionFlashback5-280}).fadeIn(500);
						$("#eventArrow").css("left", positionFlashback5-545).fadeIn(500);
						timer = setTimeout(function(){
							countNorth();
							addCloud("collapseNorth");
						}, 53000);
					}, speed16);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#bigEvent4").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
					setTimeout(function(){
						$("#bigEvent4").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent4);
						$("#eventContent").html(textBigEvent4);
						$("#timelinepopup").css({"left": positionBigEvent4-280}).fadeIn(500);
						$("#eventArrow").css("left", positionBigEvent4-622).fadeIn(500);
						timer = setTimeout(function(){
							countNorth();
							addCloud("collapseNorth");
						}, 53000);
						countSouth()
						addbridges();
						addShutdownAirspace();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
					},500);
				}
				break;
			case positionEvent9:
				if(direction == true){
					$("#timelineSlider").animate({left:positionFlashback6},speed18, "linear");
					positionSlider = positionFlashback6;
					setTimeout(function(){
						$("#flashback5").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleFlashback6);
						$("#eventContent").html(textFlashback6);
						$("#timelinepopup").css({"left": positionFlashback6-280}).fadeIn(500);
						$("#eventArrow").css("left", positionFlashback6-649).fadeIn(500);
						addCloud("end")
					}, speed18);
				}
				else if(direction == false){
					$("#timelineSlider").animate({left:positionBigEvent4},speed17, "linear");
					positionSlider = positionBigEvent4;
					setTimeout(function(){
						$("#bigEvent4").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleBigEvent4);
						$("#eventContent").html(textBigEvent4);
						$("#timelinepopup").css({"left": positionBigEvent4-280}).fadeIn(500);
						$("#eventArrow").css("left", positionBigEvent4-622).fadeIn(500);
						timer = setTimeout(function(){
							countNorth();
							addCloud("collapseNorth");
						}, 53000);
					}, speed17);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#event9").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
					setTimeout(function(){	
						countSouth();
						addCloud("collapseSouth");
						addbridges();
						addShutdownAirspace();
						countNorth();
						addCloud("collapseNorth");
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
						$("#eventTitle").html(titleEvent9);
						$("#eventContent").html(textEvent9);
						$("#timelinepopup").css({"left": positionEvent9-280}).fadeIn(500);
						$("#eventArrow").css("left", positionEvent9-626).fadeIn(500);
					},500);
				}
				break;
			case positionFlashback6:
				if(direction == false){
					$("#timelineSlider").animate({left:positionEvent9},speed18, "linear");
					positionSlider = positionEvent9;
					setTimeout(function(){
						$("#event9").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
						$("#eventTitle").html(titleEvent9);
						$("#eventContent").html(textEvent9);
						$("#timelinepopup").css({"left": positionEvent9-280}).fadeIn(500);
						$("#eventArrow").css("left", positionEvent9-626).fadeIn(500);
					}, speed18);
				}
				else if(direction == "click"){
					$("#timelinepopup").fadeOut(500);
					$("#flashback5").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
					setTimeout(function(){	
						countSouth();
						addbridges();
						addShutdownAirspace();
						countNorth();
						addTeams("first");
						addTeams("last");
						addTowerIcons("north");
						addTowerIcons("south");
						addCloud("end");
						$("#eventTitle").html(titleFlashback6);
						$("#eventContent").html(textFlashback6);
						$("#timelinepopup").css({"left": positionFlashback6-280}).fadeIn(500);
						$("#eventArrow").css("left", positionFlashback6-649).fadeIn(500);
					},500);
				}
				break;
		}
	}
});

function closePopup(){
	$('#timelinepopup').fadeOut(500);
	setTimeout(function(){
		$("#eventContent").html("");
		$("#eventTitle").html("");
	},500);
}

// First popup
function firstPopup(){
	if(positionSlider == 0){
		timer = setTimeout(function(){
			$("#flashback1").css({"background": "url(img/flashback-hover.png)", "color": "#dd3737"});
			setTimeout(function(){
				$("#eventTitle").html("Story - Everyone helped");
				$("#eventContent").html("<video width='300' height='225' autoplay><source src='av/notworking.mp4' type='video/mp4'></video>");
				$("#timelinepopup").css({"left": ($("#flashback1").position().left)-44}).fadeIn(500);
			},500);
		},3000);
	}
}