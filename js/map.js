function addMap(){

var markerIcon = L.Icon.extend({
    	options: {
		    iconSize:     [37, 59], // size of the icon
		    iconAnchor:   [23, 58], // point of the icon which will correspond to marker's location
		    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		}
	});
	
var markerIconMedium = L.Icon.extend({
		options: {
			iconSize:	  [74, 74],
			iconAnchor:	  [40, 40],
			popupAncor:	  [-3, -76]
		}
	});
	
var roundIcon = L.Icon.extend({
    	options: {
		    iconSize:     [37, 37], // size of the icon
		    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
		    popupAnchor:  [0, -80] // point from which the popup should open relative to the iconAnchor
		}
	});
	
var roundIconImpact = L.Icon.extend({
		options: {
			iconSize:	  [55, 55],
			iconAnchor:	  [26, 26],
			popupAncor:	  [0, -80]
		}
	});

	southtowericon = new roundIcon({iconUrl: 'img/southtower-icon-m.png'}),
    northtowericon = new roundIcon({iconUrl: 'img/northtower-icon-m.png'}),
	northtowerimpacticon = new roundIconImpact({iconUrl: 'img/icon-northtower-impact.png'}),
	southtowerimpacticon = new roundIconImpact({iconUrl: 'img/icon-southtower-impact.png'}),
	towercollapsed = new markerIconMedium({iconUrl: 'img/icon-collapsed.png'}),
	redicon = new markerIcon({iconUrl: 'img/red-icon-m.png'}),
    orangeicon = new markerIcon({iconUrl: 'img/orange-icon-m.png'}),
    bridgeicon = new roundIcon({iconUrl: 'img/bridgeClose.png'});
	
	

    if ($('#map').is(':empty')) {
    	window.map = new L.Map('map',{zoom:15});
		var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/12fa93de2280446daf38f8c312293b43/116798/256/{z}/{x}/{y}.png',
		    cloudmadeAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
		    cloudmade = new L.TileLayer(cloudmadeUrl, {

		        attribution: cloudmadeAttribution
		    });
		    var groundzero = new L.LatLng(40.71167, -74.01361);
				map.setView(groundzero, 12).addLayer(cloudmade);
				addTowerIcons();
				addCloud();
	}
	else {
	}

	
}

var northTower = 0;
var southTower = 0;

function addTowerIcons(tower){
	var tempTower = tower;

	if(!tempTower){
		northTower = L.marker([40.71204, -74.01321], {icon: northtowericon, zIndexOffset: 900, id: 'north'}).addTo(map);
		southTower = L.marker([40.71096, -74.01321], {icon: southtowericon, zIndexOffset: 901, id: 'south'}).addTo(map);
	}
	if(tempTower == "north"){
		northTower = L.marker([40.71204, -74.01321], {icon: northtowerimpacticon, zIndexOffset: 902, id: 'north'}).addTo(map).bindPopup("<span id=popuptitle>North Tower</span><br><span id=red>Flight 11 crashes</span> at roughly 466 mph (790 km/h or 219m/s or 425 knots) into the north face of the North Tower (1 WTC) of the World Trade Center, between <span id=red>floors 93 and 99</span>.<br> <span id=red>92 People died</span> on impact at Flight 11 and <span id=red>1369 employees died</span> between floors 93 and 110");
	}
	if(tempTower == "south"){
		southTower = L.marker([40.71096, -74.01321], {icon: southtowerimpacticon, zIndexOffset: 903, id: 'south'}).addTo(map).bindPopup("<span id=popuptitle>South Tower</span><br><span id=red>Flight 175 crashes</span> at about 590 mph (950 km/h, 264 m/s or 513 knots) into the south face of the South Tower (2 WTC) of the World Trade Center, between <span id=red>floors 77 and 85</span>.<br><span id=red>64 People died</span> on impact at Flight 175  and <span id=red>595 employees died</span> between floors 77 and 110");
	}
	if(tempTower == "end"){
	//	northTowerCollapse = L.marker([40.71204, -74.01321], {icon: towercollapsed, zIndexOffset: 900}).addTo(map);
	//	southTowerCollapse = L.marker([40.71096, -74.01321], {icon: towercollapsed, zIndexOffset: 901}).addTo(map);
	}
}

function addTeams(teams){
	if(teams == "first"){
		addFirstTeams();
	}
	if(teams == "last"){
		addLastTeams();
	}
}

function addFirstTeams(){
	for(i=0; i<respondersData[0].responders.length; i++){
		var xco = respondersData[0].responders[i].geolocation[0];
		var yco = respondersData[0].responders[i].geolocation[1];
		var address = respondersData[0].responders[i].address;
		var companyname = [];

		for(n=0; n<respondersData[0].responders[i].teams.length; n++){
			var temp = respondersData[0].responders[i].teams[n].name;
			companyname.push(temp);
		}
		var casualties = respondersData[0].responders[i].totalvictims;

		if(respondersData[0].responders[i].totalvictims <= 2){
			L.marker([xco, yco], {icon: orangeicon,opacity:0}).addTo(map).bindPopup(address + "<br>Team(s): <b>" + companyname + "</b><br>Casualties: <b>" + casualties + "</b><br><br><a href='#' onclick=\"animateDashboard('" + address + "');\"><div id='statsicon'></div></a>");
		}
		else{	
			L.marker([xco, yco], {icon: redicon,opacity:0}).addTo(map).bindPopup(address + "<br>Team(s): <b>" + companyname + "</b><br>Casualties: <b>" + casualties + "</b><br><br><a href='#' onclick=\"animateDashboard('" + address + "');\"><div id='statsicon'></div></a>");
		}
	}
		var delay = 0;
		$('.leaflet-marker-icon').each(function(){ 
		    $(this).delay(delay).animate({
		        opacity:1
		    },100).addClass('firstTeams');
		    delay += 100;
		});
}

function addLastTeams(){
	for(i=0; i<respondersData[1].responders.length; i++){
		var xco = respondersData[1].responders[i].geolocation[0];
		var yco = respondersData[1].responders[i].geolocation[1];
		var address = respondersData[1].responders[i].address;
		var companyname = [];

			for(n=0; n<respondersData[1].responders[i].teams.length; n++){
				var temp = respondersData[1].responders[i].teams[n].name;
				companyname.push(temp);
			}
		var casualties = respondersData[1].responders[i].totalvictims;

		if(respondersData[1].responders[i].totalvictims <= 2){
			L.marker([xco, yco], {icon: orangeicon,opacity:0}).addTo(map).bindPopup(address + "<br>Team(s): <b>" + companyname + "</b><br>Casualties: <b>" + casualties + "</b><br><br><a href='#' onclick=\"animateDashboard('" + address + "');\"><div id='statsicon'></div></a>");
		}
		else{
			L.marker([xco, yco], {icon: redicon,opacity:0}).addTo(map).bindPopup(address + "<br>Team(s): <b>" + companyname + "</b><br>Casualties: <b>" + casualties + "</b><br><br><a href='#' onclick=\"animateDashboard('" + address + "');\"><div id='statsicon'></div></a>");
		}
	}
	var delay = 0;
		$('.leaflet-marker-icon:not(.firstTeams)').each(function(){ 
		    $(this).delay(delay).animate({
		        opacity:1
		    },100).addClass('lastTeams');
		    delay += 100;
		});
}

function addbridges(){
	L.marker([40.7272425,-74.0202355], {icon: bridgeicon, zIndexOffset: 100, opacity:0}).addTo(map);
	L.marker([40.7632837,-74.0100861], {icon: bridgeicon, zIndexOffset: 101, opacity:0}).addTo(map);
	L.marker([40.6964205,-74.0138626], {icon: bridgeicon, zIndexOffset: 102, opacity:0}).addTo(map);
	L.marker([40.7055629,-73.9962673], {icon: bridgeicon, zIndexOffset: 103, opacity:0}).addTo(map);
	L.marker([40.7069780,-73.9904737], {icon: bridgeicon, zIndexOffset: 104, opacity:0}).addTo(map);
	L.marker([40.7134354,-73.9716554], {icon: bridgeicon, zIndexOffset: 105, opacity:0}).addTo(map);
	L.marker([40.7454037,-73.9641452], {icon: bridgeicon, zIndexOffset: 106, opacity:0}).addTo(map);
	L.marker([40.7421523,-73.9661515], {icon: bridgeicon, zIndexOffset: 107, opacity:0}).addTo(map);
	L.marker([40.7579365,-73.9569783], {icon: bridgeicon, zIndexOffset: 108, opacity:0}).addTo(map);

	var delay = 0;
		$('.leaflet-marker-icon:not(.firstTeams)').each(function(){ 
		    $(this).delay(delay).animate({
		        opacity:1
		    },200);
		    delay += 200;
		});
}

function addShock(){
	$("#map").append("<div id='shock'></div>");
	$("#shock").css("display", "block");
	$("#shock").fadeOut(3000);
	setTimeout(function(){
		$("#shock").remove();
	}, 3000);
}

function addCloud(collapse){
	var tempCollapse = collapse;
	
	if(!tempCollapse){
		$("#map").append("<div id='cloud'></div>");
	}
	
	if(tempCollapse == "collapseSouth"){
		$("#cloud").css("display", "block");
		$("#cloud").animate({"background-color": "rgba(81,81,81,0.4)"}, 5000);
	}
	
	if(tempCollapse == "collapseNorth"){
		$("#cloud").css("display", "block");
		$("#cloud").animate({"background-color": "rgba(81,81,81,0.8)"}, 5000);
	}
	
	if(tempCollapse == "end"){
		$("#cloud").fadeOut(1000);
	}

	$('#cloud').click(function (e) {
		$('#cloud').remove();
	});	
}

function addShutdownAirspace(){
	var positionTimelineSlider = Math.round($("#timelineSlider").position().left);
	var positionShutdownAirspace = $("#event7").position().left;

	$("#map").append("<div id='shutdownAirspace'><span class='imageCenter'></span><img id='iconShutdownAirspace' src='img/icon-shutdown-airspace.png'></div>");
	
	if(positionTimelineSlider > positionShutdownAirspace){
		$("#shutdownAirspace").css({"background-color": "rgba(221,55,55,0.0)", "width": "100px", "height": "100px", "top": "525px", "right": "15px"});
		$("#iconShutdownAirspace").css({"width": "100px", "height": "100px"});
		$("#shutdownAirspace").fadeIn();
	}
	
	if(positionTimelineSlider == positionShutdownAirspace){
		$("#shutdownAirspace").fadeIn(1000);
		setTimeout(function(){
			$("#shutdownAirspace").animate({"background-color": "rgba(221,55,55,0.0)"},1000);
			$("#shutdownAirspace").animate({"width": "100px", "height": "100px", "top": "525px", "right": "15px"},1000);
			$("#iconShutdownAirspace").animate({"width": "100px", "height": "100px"},1000);
		}, 6000);
	}
}

