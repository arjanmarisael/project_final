var tower = 0;
var victims = [];
var northClickable = false;
var southClickable = false;

$(document).ready(function() {

	$('#wrapper-icon-northtower').click(function (e) {
		if(northClickable == true){
			tower = "North tower";
			dashboardIsUp();
			loadTower();
			setVictimInfo();
			$('#infobutton').css('display','none');
			$('#tlyPageGuideWrapper .tlypageguide_toggle').css('display','none');
		}
		else{
			showPopupTower();
		}
	});

	$('#wrapper-icon-southtower').click(function (e) {
		console.log(southClickable);
		if(southClickable == true){
			tower = "South tower";
			dashboardIsUp();
			loadTower();
			setVictimInfo();
			$('#infobutton').css('display','none');
			$('#tlyPageGuideWrapper .tlypageguide_toggle').css('display','none');
		}
		else{
			showPopupTower();
		}
		
	});

	$('#infobutton').click(function (e) {
		$('#legenda').animate({'left':0},1000);
	});
});	

function addBgsound(){
	$("#pt-main").append('<audio autoplay loop src="sounds/bg.mp3" autobuffer></audio>');
}

$('#cloud').click(function(e) {
	$('#cloud').remove();
});

function closeLegenda(){
	$('#legenda').animate({'left':-230},1000);
}

function loadTower(){
	for(i=0;i<respondersData[0].responders.length; i++){
		if(respondersData[0].responders[i].teams[0].site == tower){
			getFirstVictims(i,0);
		}
		if(respondersData[0].responders[i].teams.length == 2){
			if(respondersData[0].responders[i].teams[1].site == tower){
				getFirstVictims(i,1);
			}
		}
		if(respondersData[0].responders[i].teams.length == 3){
			if(respondersData[0].responders[i].teams[1].site == tower){
				getFirstVictims(i,2);
			}
		}
	}
	for(i=0;i<respondersData[1].responders.length; i++){
		if(respondersData[1].responders[i].teams[0].site == tower){
			getLastVictims(i,0);
		}
		if(respondersData[1].responders[i].teams.length == 2){
			if(respondersData[1].responders[i].teams[1].site == tower){
				getLastVictims(i,1);
			}
		}
		if(respondersData[1].responders[i].teams.length == 3){
			if(respondersData[1].responders[i].teams[1].site == tower){
				getLastVictims(i,2);
			}
		}
	}
  filterVictims();
}

function closeVictiminfo(e){ 
	$('.victiminfo').animate({'bottom': '-250px'}, 1000);
}

function closeDashboard(e){ 
	$('#dashboard').animate({'bottom': '-477px'}, 1000);
}

function dashboardIsUp(){
	if($('#dashboard').css('bottom') == '77px'){
		$('#dashboard').animate({'bottom': '-477px'}, 1000);
		$("#streetview").html("");
	}
}

function clearVictimlist(){
	$("#grid").html("");
	victims = [];
	$('#infobutton').css('display','block');
	$('#tlyPageGuideWrapper .tlypageguide_toggle').css('display','block');
	//if victiminfo is open, than close
	if($('.victiminfo').css('bottom') == '0px'){
		$('.victiminfo').animate({'bottom': '-250px'}, 1000);
	}
}

function animateDashboard(geodata){
	$('#dashboard').animate({'bottom': '77px'}, 1000);
	setDashboard(geodata);
}

function animateVictiminfo(e){
	$('.victiminfo').animate({'bottom': '0px'}, 1000);
}

function getFirstVictims(i,t){
	var tempteam = "leeg";
	var team = respondersData[0].responders[i].teams[t].name;
	var idteam = team.replace(/\s+/g, ''); //remove spaces for html id
	var filterid = team.replace(/(\w+).*/,"$1");
	//filterid = "'element " + filterid + "'";
	console.log(team);

	for(m=0;m<respondersData[0].responders[i].teams.length; m++){
		//ul aanmaken
		if(m>=1){
			var tempteam = team;
		}
		if(tempteam != team){
			$("#grid").append("<ul id=" + idteam + " class="+ filterid +">");
			$("#grid").append("</ul>");
			$("#"+idteam).append("<h1>" + team + "</h1>");

			for(n=0;n<respondersData[0].responders[i].teams[t].victims.length; n++){
				//victims toevoegen
				var name = respondersData[0].responders[i].teams[t].victims[n].name;
				var nameid = name.replace(/\s+/g, ''); //remove spaces for html id
				var age = respondersData[0].responders[i].teams[t].victims[n].age;
				var rank = respondersData[0].responders[i].teams[t].victims[n].rank;
				var imgpath = respondersData[0].responders[i].teams[t].victims[n].picture;
				var victim = [nameid, name, age, rank, imgpath, team];				

				$("#"+ idteam).append("<li id="+ nameid + " class='victim'><div id="+ nameid + " onclick=animateVictiminfo(); class=image-wrap><img src=" + imgpath + " id="+ nameid + "><img class=flaghover src='img/victims/mask-hover.png' id="+ nameid + "></div><p id="+ nameid + ">"+ name +"</p></li>");
				victims.push(victim);
			}

		}
	}
}

function getLastVictims(i,t){
	var tempteam = "leeg";
	var team = respondersData[1].responders[i].teams[t].name;
	var idteam = team.replace(/\s+/g, ''); //remove spaces for html id
	var filterid = team.replace(/(\w+).*/,"$1");
	//filterid = "'element " + filterid + "'";
	console.log(team);

	for(m=0;m<respondersData[1].responders[i].teams.length; m++){
		//ul aanmaken
		if(m>=1){
			var tempteam = team;
		}
		if(tempteam != team){
			$("#grid").append("<ul id=" + idteam + " class="+ filterid +">");
			$("#grid").append("</ul>");
			$("#"+idteam).append("<h1>" + team + "</h1>");

			for(n=0;n<respondersData[1].responders[i].teams[t].victims.length; n++){
				//victims toevoegen
				var name = respondersData[1].responders[i].teams[t].victims[n].name;
				var nameid = name.replace(/\s+/g, ''); //remove spaces for html id
				var age = respondersData[1].responders[i].teams[t].victims[n].age;
				var rank = respondersData[1].responders[i].teams[t].victims[n].rank;
				var imgpath = respondersData[1].responders[i].teams[t].victims[n].picture;
				var victim = [nameid, name, age, rank, imgpath, team];				

				$("#"+ idteam).append("<li id="+ nameid + " class='victim'><div id="+ nameid + " onclick=animateVictiminfo(); class=image-wrap><img src=" + imgpath + " id="+ nameid + "><img class=flaghover src='img/victims/mask-hover.png' id="+ nameid + "></div><p id="+ nameid + ">"+ name +"</p></li>");
				victims.push(victim);
			}

		}
	}
}
function filterVictims(){
	$(".filter").click(function(e){
		var filterID = e.target.id;
		
		switch(filterID){
			case "filterAll":
				$(".Battalion").show('drop', { direction: 'down'},800);
				$(".Engine").show('drop', { direction: 'down'},800);
				$(".Division").show('drop', { direction: 'down'},800);
				$(".Ladder").show('drop', { direction: 'down'},800);
				$(".Rescue").show('drop', { direction: 'down'},800);
				$(".Special").show('drop', { direction: 'down'},800);
				$(".Squad").show('drop', { direction: 'down'},800);
				$(".Haz").show('drop', { direction: 'down'},800);
				break;
			case "filterBattalion":
				$(".Battalion").show('drop', { direction: 'down'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterEngine":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").show('drop', { direction: 'down'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterDivision":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").show('drop', { direction: 'down'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterLadder":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").show('drop', { direction: 'down'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterRescue":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").show('drop', { direction: 'down'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterSpecialOperations":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").show('drop', { direction: 'down'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterSquad":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").show('drop', { direction: 'down'},800);
				$(".Haz").hide('drop', { direction: 'up'},800);
				break;
			case "filterHazmat":
				$(".Battalion").hide('drop', { direction: 'up'},800);
				$(".Engine").hide('drop', { direction: 'up'},800);
				$(".Division").hide('drop', { direction: 'up'},800);
				$(".Ladder").hide('drop', { direction: 'up'},800);
				$(".Rescue").hide('drop', { direction: 'up'},800);
				$(".Special").hide('drop', { direction: 'up'},800);
				$(".Squad").hide('drop', { direction: 'up'},800);
				$(".Haz").show('drop', { direction: 'down'},800);
				break;
		}
	});
}

function setVictimInfo(){
	$('.victim').click(function(e) {
		$("#victimdata").html("");
		$("#victimphoto").html("");
		
		for(i=0; i<victims.length; i++){
			if(e.target.id == victims[i][0]){

				$("#victimphoto").append("<div class=image-wrap><img src=" + victims[i][4]  + "></div>");
				$("#victimdata").append("<b>" + victims[i][1] + "</b><br> Age: " + victims[i][2] + "<br><br> Rank: " + victims[i][3] + "<br> Team: " + victims[i][5]);
			}
		}
	});
}

function setDashboard(address){
	
	// Clear dashboard before append new data
	$("#streetview").html("");
	$("#towers").html("");
	$("#casualties").html("");
	
	var groundZero = [40.71167, -74.01361];
	var targetGeo = [];
	var targetTeams = [];
	var targetCasualties = [];
	var ranks = [];
	
	var lieutenant = 0;
	var firefighter = 0;
	var captain = 0;
	var chief = 0;
	var paramedic = 0;
	
	for(i=0; i<respondersData[0].responders.length; i++){
		if(respondersData[0].responders[i].address == address){
			targetGeo = [respondersData[0].responders[i].geolocation[0], respondersData[0].responders[i].geolocation[1]];
			
			for(t=0; t<respondersData[0].responders[i].teams.length; t++){
				targetTeams.push([respondersData[0].responders[i].teams[t].site, respondersData[0].responders[i].teams[t].name]);
				
				for(u=0; u<respondersData[0].responders[i].teams[t].victims.length; u++){
					if(respondersData[0].responders[i].teams[t].victims[u].rank == "Lieutenant"){
						lieutenant += 1;
					}
					if(respondersData[0].responders[i].teams[t].victims[u].rank == "Firefighter"){
						firefighter += 1;
					}
					if(respondersData[0].responders[i].teams[t].victims[u].rank == "Captain"){
						captain += 1;
					}
					if(respondersData[0].responders[i].teams[t].victims[u].rank == "Chief"){
						chief += 1;
					}
					if(respondersData[0].responders[i].teams[t].victims[u].rank == "Paramedic"){
						paramedic += 1;
					}
				}
			}
			if(lieutenant != 0){
				targetCasualties.push(lieutenant);
				ranks.push("Lieutenant(s)");
			}
			if(firefighter != 0){
				targetCasualties.push(firefighter);
				ranks.push("Firefighter(s)");
			}
			if(captain != 0){
				targetCasualties.push(captain);
				ranks.push("Captain(s)");
			}
			if(chief != 0){
				targetCasualties.push(chief);
				ranks.push("Chief(s)");
			}
			if(paramedic !=0){
				targetCasualties.push(paramedic);
				ranks.push("Paramedic(s)");
			}
		}
	}

	for(i=0; i<respondersData[1].responders.length; i++){
		if(respondersData[1].responders[i].address == address){
			targetGeo = [respondersData[1].responders[i].geolocation[0], respondersData[1].responders[i].geolocation[1]];
			
			for(t=0; t<respondersData[1].responders[i].teams.length; t++){
				targetTeams.push([respondersData[1].responders[i].teams[t].site, respondersData[1].responders[i].teams[t].name]);
				
				for(u=0; u<respondersData[1].responders[i].teams[t].victims.length; u++){
					if(respondersData[1].responders[i].teams[t].victims[u].rank == "Lieutenant"){
						lieutenant += 1;
					}
					if(respondersData[1].responders[i].teams[t].victims[u].rank == "Firefighter"){
						firefighter += 1;
					}
					if(respondersData[1].responders[i].teams[t].victims[u].rank == "Captain"){
						captain += 1;
					}
					if(respondersData[1].responders[i].teams[t].victims[u].rank == "Chief"){
						chief += 1;
					}
					if(respondersData[1].responders[i].teams[t].victims[u].rank == "Paramedic"){
						paramedic += 1;
					}
				}
			}
			if(lieutenant != 0){
				targetCasualties.push(lieutenant);
				ranks.push("Lieutenant(s)");
			}
			if(firefighter != 0){
				targetCasualties.push(firefighter);
				ranks.push("Firefighter(s)");
			}
			if(captain != 0){
				targetCasualties.push(captain);
				ranks.push("Captain(s)");
			}
			if(chief != 0){
				targetCasualties.push(chief);
				ranks.push("Chief(s)");
			}
			if(paramedic !=0){
				targetCasualties.push(paramedic);
				ranks.push("Paramedic(s)");
			}
		}
	}
	
	var p1 = new google.maps.LatLng(targetGeo[0], targetGeo[1]);
	var p2 = new google.maps.LatLng(groundZero[0], groundZero[1]);
	var distance = ((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000)/1.6).toFixed(2);

	// Append to #streetview
	$("#streetview").append("<h2>" + address + "</h2>");
	$("#streetview").append("<img src='http://maps.googleapis.com/maps/api/streetview?size=240x120&location="+ address +"&heading=151.78&pitch=-0.76&sensor=false' class='center'>");
	$("#streetview").append("<br>Distance to Ground Zero: <b>" + distance + " miles</b>");
		
	// Append to #towers
	$("#towers").append("<h2>Towers</h2>");
	for(i=0; i<targetTeams.length; i++){
		if(targetTeams[i][0] == "North tower"){
			$("#towers").append("<img title=Northtower alt=Northtower src='img/dashboard/northtower" + (i+1) + ".png'>");
		}
		if(targetTeams[i][0] == "South tower"){
			$("#towers").append("<img title=Southtower alt=Southtower src='img/dashboard/southtower" + (i+1) + ".png'>");
		}
	}
	$("#towers").append("<br><br><h2>Teams:</h2>");
	$("#towers").append("<ul id=teamslegenda>");
	for(i=0; i<targetTeams.length; i++){
		$("#towers ul").append("<li><img src='img/dashboard/bullet" + (i+1) + ".png'> " + targetTeams[i][1] + "</li>");
	}
	$("#towers").append("</ul>");
	
	// Append to #casualties
	$("#casualties").append("<h2>Casualties</h2>");
	$("#casualties").append("<div id='dashboardCasualties'></div>");
	setDashboarCasualties(targetCasualties);
	createLegenda(ranks);
}

function setDashboarCasualties(targetCasualties){
	console.log(targetCasualties);
	var w = 200,
		h = 200,
		r = 50,
		ir = 100,
		color = d3.scale.category20c().range(["#dd3737", "#db703a", "#d88d3a", "#d6b93c", "#eaea34"]),
		donut = d3.layout.pie().sort(null),
		arc = d3.svg.arc().innerRadius(ir).outerRadius(r);
	
	var svg = d3.select('#dashboardCasualties').append("svg:svg")
		.data(donut(targetCasualties))
		.attr("width", w)
		.attr("height", h)
		.append("svg:g")
		.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
		
	var arcs = svg.selectAll(".arc")
		.data(donut(targetCasualties))
			.enter().append("g")
			.attr("class", "arc");
	
	arcs.append("path")
		.attr("d", arc)
		.attr("fill", function(d,i){ if(targetCasualties.length == 1){ return "#dd3737"; } else { return color(i); } })

	arcs.append("text")
		.text(function(d){ console.log (d); return d.value; })
		.attr("transform", function(d){ return "translate(" + arc.centroid(d) + ")"; })
		.style("text-anchor", "middle");

}

function createLegenda(ranks){
	$("#dashboardCasualties").append("<ul id=rankslegenda>");
	for(i=0;i<ranks.length;i++ ) {
		$("#dashboardCasualties ul").append("<li><img src=img/rankColor"+ [i+1] + ".png>"+ ranks[i] +"</li>");
	}
	$("#dashboardCasualties").append("</ul>");
}

function countNorth(){
	if(northClickable == false){
		var count = 0;
		var casualties = 137;
		var interval = setInterval(function() {
	      if(count != casualties){
	      	$("#northCount").html(count);
	      	count++;
	      }
	      else{
	      	northClickable = true;
	      	clearInterval(interval);
	      	$("#wrapper-icon-northtower").addClass("et-rotate");
	      	$("#wrapper-icon-northtower").css({'cursor':'pointer','fill':'#af0000','color':'#af0000','-webkit-transition':'fill .3s linear, color .3s linear',
	      		'-moz-transition':'fill .3s linear, color .3s linear','-o-transition':'fill .3s linear, color .3s linear','-ms-transition':'fill .3s linear, color .3s linear',
	      		'transition': 'fill .3s linear, color .3s linear'});
	      	$( "#wrapper-icon-northtower" ).effect( "shake", {times:3, distance:10}, 1000 );	
	      }
		}, 50);
	}
}

function countSouth(){
	if(southClickable == false){	
		var count = 0;
		var casualties = 197;
		var interval = setInterval(function() {
		     if(count != casualties){
		    	$("#southCount").html(count);
		      	count++;
		      }
		      else{
		      	southClickable = true;
		      	clearInterval(interval);
		      	$("#wrapper-icon-southtower").addClass("et-rotate");
		      	$("#wrapper-icon-southtower")
		      	.css({'cursor':'pointer','fill':'#af0000','color':'#af0000','-webkit-transition':'fill .3s linear, color .3s linear',
		      		'-moz-transition':'fill .3s linear, color .3s linear','-o-transition':'fill .3s linear, color .3s linear','-ms-transition':'fill .3s linear, color .3s linear',
		      		'transition': 'fill .3s linear, color .3s linear'});
		      	$( "#wrapper-icon-southtower" ).effect( "shake", {times:3, distance:10}, 1000 );
		      }
			}, 50);
	}
}

function removeScript(){
	var script = document.getElementById("vegasscript");
   	script.parentElement.removeChild(script);
}

function showPopupTower(){
	$("#aboutWrapper").css("display", "block");
	$("#aboutWrapper").animate({"background-color": "rgba(0,0,0,0.8)"},1000);
	$("#towerpopup").css("display", "block");
	$("#towerpopup").animate({"opacity": "1"},1000);
	
	$('#aboutWrapper').click(function(e) {
		$('#aboutWrapper').css({"display": "none", "background-color": "rgba(0,0,0,0.0)"});
		$("#towerpopup").css("opacity", "0");
		$("#towerpopup").css("display", "none");
	});
}

function showAbout(){
	$("#aboutWrapper").css("display", "block");
	$("#aboutWrapper").animate({"background-color": "rgba(0,0,0,0.8)"},1000);
	$("#aboutText").css("display", "block");
	$("#aboutText").animate({"opacity": "1"},1000);
	
	$('#aboutWrapper').click(function(e) {
		$('#aboutWrapper').css({"display": "none", "background-color": "rgba(0,0,0,0.0)"});
		$("#aboutText").css("opacity", "0");
		$("#aboutText").css("display", "none");
	});
}

