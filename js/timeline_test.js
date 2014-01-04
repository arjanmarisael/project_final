$(document).ready(function(){

	// Posities momenten en slider
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
	var positionEnd = 935;
	var positionSlider = 0;
	
	// Temp variabelen
	var tempBigEvent1 = 0;
	var tempBigEvent2 = 0;
	var tempBigEvent3 = 0;
	var tempBigEvent4 = 0;
	var tempEvent1 = 0;
	var tempEvent2 = 0;
	var tempEvent3 = 0;
	var tempEvent4 = 0;
	var tempEvent5 = 0;
	var tempEvent6 = 0;
	var tempEvent7 = 0;
	var tempEvent8 = 0;
	var tempEvent9 = 0;

	// Duur van de filmpjes
	var betty = 10900;
	var crash1 = 24900;
	var crash2 = 57900;
	var bush = 97900;
	var collapse1 = 66900;
	var collapse2 = 96900;
	var regroup = 33900;
	
	// Duur van de audio
	var hijacker11 = 19900;
	var crashaudio = 72900;
	
	// Duur popup melding zonder video/audio
	var eventPopup = 5000;
	
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
	var textEvent2 = "- Flight 11 is hijacked.<br><br>- United Airlines Flight 175 departs from Logan International Airport Boston with destination LAX Los Angeles.<br><audio autoplay><source src='av/01_flight11_hijacker.mp3' type='audio/mpeg'></audio>";
	var titleEvent3 = "8:19 - Betty calls about hijacking";
	var textEvent3 = "<video width='300' height='225' autoplay><source src='av/02_flight11_betty.mp4' type='video/mp4'></video>";
	var titleEvent4 = "9:02 - Evacuation North Tower";
	var textEvent4 = "Evacuation is ordered by FDNY Battalion Chief Joseph Pfeifer (North Tower). An announcement is made over the PA system to evacuate the buildings.";
	var titleEvent5 = "9:21 - Manhatten is closed";
	var textEvent5 = "All bridges and tunnels into Manhattan closed.";
	var titleEvent6 = "9:29 - Press conference President Bush";
	var textEvent6 = "<video width='192' height='144' autoplay><source src='av/06_pressconference_bush.mp4' type='video/mp4'></video>";
	var titleEvent7 = "9:45 - Shutdown U.S. airspace";
	var textEvent7 = "United States airspace is shut down. No civilian aircraft are allowed to take off, and all aircraft in flight are ordered to land at the nearest airport as soon as possible.";
	var titleEvent8 = "10:00 - Evacuation North Tower";
	var textEvent8 = "Moments after the South Tower fell, FDNY Battalion Chief Joseph Pfeifer (inside of North Tower) said on the radio the order to all firemen, at least twice, 'Evacuate the building'. Due to many communication limitations, numerous firefighters within the tower did not receive this transmission.";
	var titleEvent9 = "10:30 - Regroup firefighters";
	var textEvent9 = "<video width='300' height='225' autoplay><source src='av/09_regroup_firefighters.mp4' type='video/mp4'></video>";
	
	// Snelheid van de slider
	var timeSpeed = 93500;
	var tempSpeed = 0;
	
	// Interval
	var interval = 0;
	var tempInterval = 0;
	
	// Events
	var eventClick = false;
		
	// Pauze button
	$("#pausebtn").click(function(){
		stopSlider();
	});
	
	// Play button
	$("#playbtn").click(function(){
		if(positionSlider == 0){
			setVars();
			$("#timelineSlider").animate({left:positionEnd},timeSpeed, "linear");
			interval = setInterval(setEvents, 50);
			$("#pausebtn").css("display", "block");
			$("#playbtn").css("display", "none");
		}
		else {
			playSlider();
		}
	});
	
	// Klik op momenten
	$(".eventClick").click(function(e){
		if(positionSlider == 0){
			setVars();
		}
		
		eventClick = true;
		clearInterval(interval);
		interval = 0;
		
		$(".events").removeAttr('style');
		$(".eventsK").removeAttr('style');
		$("#pausebtn").css("display", "none");
		$("#playbtn").css("display", "block");
		
		var goToEvent = $("#" + e.target.id).position().left;
		$("#timelineSlider").css("left", goToEvent);
		$("#timelineSlider").stop();
		positionSlider = goToEvent + 5;
		
		if(positionSlider == positionBigEvent1 || positionSlider == positionBigEvent2 || positionSlider == positionBigEvent3 || positionSlider == positionBigEvent4){
			$("#" + e.target.id).css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
		} else {
			$("#" + e.target.id).css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
		}
		
		if(e.target.id == positionEvent9 || e.target.id == positionBigEvent4){
			$("#eventArrow").css("left", goToEvent-638);
			$("#timelinepopup").css({"display": "block", "left": goToEvent-280});
		} else {
			$("#timelinepopup").css({"display": "block", "left": goToEvent-43});
			$("#eventArrow").removeAttr('style');
		}
			
		setEvents();
	});
	
	// Naar einde tijdlijn
	$("#endbtn").click(function(){
		positionSlider = positionEnd;
		$("#timelineSlider").css("left", positionEnd);
		stopSlider();
		addTeams("first");
		addTeams("last");
		addbridges();
		addShutdownAirspace();
		countSouth();
		countNorth();
		addTowerIcons("end");
		addCloud("end");
	});
	
	function setVars(){
		positionBigEvent1 = $("#bigEvent1").position().left +5;
		positionBigEvent2 = $("#bigEvent2").position().left +5;
		positionBigEvent3 = $("#bigEvent3").position().left +5;
		positionBigEvent4 = $("#bigEvent4").position().left +5;
		positionEvent1 = $("#event1").position().left;
		positionEvent2 = $("#event2").position().left;
		positionEvent3 = $("#event3").position().left;
		positionEvent4 = $("#event4").position().left;
		positionEvent5 = $("#event5").position().left;
		positionEvent6 = $("#event6").position().left;
		positionEvent7 = $("#event7").position().left;
		positionEvent8 = $("#event8").position().left;
		positionEvent9 = $("#event9").position().left;
	}
	
	// Stop slider
	function stopSlider(){
		$("#timelineSlider").stop();
		$("#pausebtn").css("display", "none");
		$("#playbtn").css("display", "block");
		
		$("video").each(function () { this.pause() });
		$("audio").each(function () { this.pause() });
	}
	
	// Play slider
	function playSlider(){
	
		if(interval == 0 && eventClick == false) {
			interval = setInterval(setEvents, 50);
		}

		if(interval == 0 && eventClick == true){
			setTimeout(function(){
				interval = setInterval(setEvents, 50);
			}, 500);
		}
		
		if(positionSlider < positionEnd) {
			tempSpeed = (positionEnd - positionSlider)*100;
			$("#timelineSlider").animate({left:positionEnd},tempSpeed, "linear");
		}
		closePopup();
		$(".events").removeAttr('style');
		$(".eventsK").removeAttr('style');	
		$("#pausebtn").css("display", "block");
		$("#playbtn").css("display", "none");
	}
	
	// Interval berekenen
	function setEvents(){
		positionSliderBig = Math.round($("#timelineSlider").position().left)+5;
		positionSlider = Math.round($("#timelineSlider").position().left);
		
		// Big events
		if(positionSliderBig == positionBigEvent1 && tempBigEvent1 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#bigEvent1").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionBigEvent1-43});
				$("#eventTitle").html(titleBigEvent1);
				$("#eventContent").html(textBigEvent1);
				setTimeout(function(){
					addShock();
					setTimeout(function(){
						addTowerIcons("north");
					}, 3000);
				}, 14500);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempBigEvent1 = 1;
						tempInterval = 0;
						addTeams("first");
					}, crash1);
				}
				else {
					tempInterval = 0;
					var timer = setTimeout(function(){
						addTeams("first");
					}, crash1);
				}
			}
		}
		if(positionSliderBig == positionBigEvent2 && tempBigEvent2 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#bigEvent2").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionBigEvent2-43});
				$("#eventTitle").html(titleBigEvent2);
				$("#eventContent").html(textBigEvent2);
				setTimeout(function(){
					addShock();
					setTimeout(function(){
						addTowerIcons("south");
					}, 3000);
				}, 7000);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempBigEvent2 = 1;
						tempInterval = 0;	
						addTeams("last");
					}, crash2);
				}
				else {
					tempInterval = 0;
					addTeams("first");
					addTowerIcons("north");
					var timer = setTimeout(function(){
						addTeams("last");
					}, crash2);
				}
			}
		}
		if(positionSliderBig == positionBigEvent3 && tempBigEvent3 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#bigEvent3").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionBigEvent3-43});
				$("#eventTitle").html(titleBigEvent3);
				$("#eventContent").html(textBigEvent3);
				setTimeout(function(){
					countSouth();
					addTowerIcons("collapseSouth");
					addCloud("collapseSouth");
				}, 24000);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempBigEvent3 = 1;
						tempInterval = 0;
					}, collapse1);
				}
				else {
					tempInterval = 0;
					addTowerIcons("north");
					addTowerIcons("south");
					addTeams("first");
					addTeams("last");
					addShutdownAirspace();
				}
			}
		}
		if(positionSliderBig == positionBigEvent4 && tempBigEvent4 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#bigEvent4").css({"background": "url(img/eventHover.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionBigEvent4-280});
				$("#eventArrow").css("left", positionBigEvent4-643);
				$("#eventTitle").html(titleBigEvent4);
				$("#eventContent").html(textBigEvent4);
				setTimeout(function(){
					countNorth();
					addTowerIcons("collapseNorth");
					addCloud("collapseNorth");
				}, 53000);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempBigEvent4 = 1;
						tempInterval = 0;
					}, collapse2);
				}
				else {
					tempInterval = 0;
					addTowerIcons("south");
					addTowerIcons("collapseSouth");
					addCloud("collapseSouth");
					addTeams("first");
					addTeams("last");
					addShutdownAirspace();
					countSouth();
				}
			}	
		}
		
		// Events
		if(positionSlider == positionEvent1 && tempEvent1 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event1").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent1-43});
				$("#eventTitle").html(titleEvent1);
				$("#eventContent").html(textEvent1);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						console.log("event1");
						playSlider();
						tempEvent1 = 1;
						tempInterval = 0;						
					}, eventPopup);
				}
				else {
					tempInterval = 0;
				}
			}
		}
		if(positionSlider == positionEvent2 && tempEvent2 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event2").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent2-43});
				$("#eventTitle").html(titleEvent2);
				$("#eventContent").html(textEvent2);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent2 = 1;
						tempInterval = 0;
					}, hijacker11);
				}
				else {
					tempInterval = 0;
				}
			}
		}
		if(positionSlider == positionEvent3 && tempEvent3 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event3").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent3-43});
				$("#eventTitle").html(titleEvent3);
				$("#eventContent").html(textEvent3);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent3 = 1;
						tempInterval = 0;	
					}, betty);
				}
				else {
					tempInterval = 0;
				}
			}
		}
		if(positionSlider == positionEvent4 && tempEvent4 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event4").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent4-43});
				$("#eventTitle").html(titleEvent4);
				$("#eventContent").html(textEvent4);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent4 = 1;
						tempInterval = 0;	
					}, eventPopup);
				}
				else {
					tempInterval = 0;
					addTowerIcons("north");
					addTeams("first");
				}
			}
		}
		if(positionSlider == positionEvent5 && tempEvent5 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event5").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent5-43});
				$("#eventTitle").html(titleEvent5);
				$("#eventContent").html(textEvent5);
				addbridges();
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent5 = 1;
						tempInterval = 0;	
					}, eventPopup);
				}
				else {
					tempInterval = 0;
					addTowerIcons("north");
					addTowerIcons("south");
					addTeams("first");
					addTeams("last");
				}
			}
		}
		if(positionSlider == positionEvent6 && tempEvent6 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event6").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent6-43});
				$("#eventTitle").html(titleEvent6);
				$("#eventContent").html(textEvent6);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent6 = 1;
						tempInterval = 0;
					}, bush);
				}
				else {
					tempInterval = 0;
					addTowerIcons("north");
					addTowerIcons("south");
					addTeams("first");
					addTeams("last");
					addbridges();
				}
			}
		}
		if(positionSlider == positionEvent7 && tempEvent7 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event7").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent7-43});
				$("#eventTitle").html(titleEvent7);
				$("#eventContent").html(textEvent7);
				addShutdownAirspace();
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent7 = 1;
						tempInterval = 0;	
					}, eventPopup);
				}
				else {
					tempInterval = 0;
					addTowerIcons("north");
					addTowerIcons("south");
					addTeams("first");
					addTeams("last");
					addbridges();
				}
			}
		}
		if(positionSlider == positionEvent8 && tempEvent8 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event8").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent8-43});
				$("#eventTitle").html(titleEvent8);
				$("#eventContent").html(textEvent8);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent8 = 1;
						tempInterval = 0;	
					}, eventPopup);
				}
				else {
					tempInterval = 0;
					addTowerIcons("north");
					addTeams("first");
					addTeams("last");
					addbridges();
					addShutdownAirspace();
					countSouth();
					addTowerIcons("collapseSouth");
					addCloud("collapseSouth");
				}
			}
		}
		if(positionSlider == positionEvent9 && tempEvent9 == 0) {
			if(tempInterval == 0){
				stopSlider();
				tempInterval = 1;
				$("#event9").css({"background": "url(img/eventHoverK.png)", "color": "#dd3737"});
				$("#timelinepopup").css({"display": "block", "left": positionEvent9-280});
				$("#eventArrow").css("left", positionEvent9-643);
				$("#eventTitle").html(titleEvent9);
				$("#eventContent").html(textEvent9);
				if(interval != 0){
					var timer = setTimeout(function(){ 
						$("#timelinepopup").css("display", "none");
						playSlider();
						tempEvent9 = 1;
						tempInterval = 0;		
					}, regroup);
				}
				else {
					tempInterval = 0;
					addTeams("first");
					addTeams("last");
					addbridges();
					addShutdownAirspace();
					countSouth();
					countNorth();
					addTowerIcons("collapseSouth");
					addTowerIcons("collapseNorth");
					addCloud("collapseSouth");
					addCloud("collapseNorth");
				}
			}
		}
		
		// End
		if(positionSlider == positionEnd){
			clearInterval(interval);
			stopSlider();
			addCloud("end");
		}
	}
});