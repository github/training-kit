$(function(){
	// Global-ish vars
	var timeLeftInterval = 0;


	// WARNING This only anticipates one querystring value
	var urlSearch = window.location.search,
			queryString = urlSearch.substring(1,urlSearch.length),
			username = queryString.substring((queryString.indexOf("="))+1, queryString.length);

	$.ajax(
	{
		url: "https://api.github.com/users/"+username,
		success: function(data, textStatus, jqXHR){
			$("<div/>",
			{
				class: "teacher",
				text: data.name
			}).appendTo("#teacher");

			$("<div/>",
			{
				class: "email",
				text: data.email
			}).appendTo("#teacher");

			$("<img/>",
			{
				src: data.avatar_url,
				class: "avatar",
				height: "300",
				width: "300"
			}).appendTo("#teacher");
		}
	});


	$(window).resize(function () {
		updateSlideSize();
	});

	updateSlideSize();

	function updateSlideSize(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		$(".slide").css("height", h);
	}

	$(".timer-toggle").click(function(){
		$(".timer-wrapper").toggleClass("fade-out");
		resetTimer();

		if($(".timer-wrapper").hasClass("fade-out")){
			$(".timer-amount").toggle();
		}
	});

	$("#start-stop").click(function(){
		var timeLeftDisplay = $("#time-left")
		var min = $("#minutes").attr("value");
		var duration = min*60;

		$(".timer-amount").toggle();

		resetTimer();

		timeLeftInterval = setInterval(function(){
			timeLeftDisplay.html( Math.floor((duration)/60) + ":" + (duration%60 < 10 ? "0"+duration%60:duration%60) );
			duration = --duration;

			if(duration == -1){
				clearInterval(timeLeftInterval);
			}
		}, 1000);
	});

	function resetTimer(){
		clearInterval(timeLeftInterval);
		$("#time-left").html("");
	}

	buildToc();

	$(document).scrollsnap({
	  snaps: '.slide',
	  proximity: 100
	});

	function buildToc(){
		var headings = $(".curriculum h2"),
				toc = $("#toc-list");

		for(var h=0; h<headings.length; h++){
			var item,
			 		headingOrig;

			headingOrig = headings[h].textContent.toLowerCase().replace(/&\s/, "").split(" ");

			var headingSep = "";
			for(var o=0;o<headingOrig.length;o++){
				if(o > 0 && 0 < headingOrig.length){
					headingSep += "-";
				}
				headingSep = headingSep + headingOrig[o]
			}

			item = $('<li><a href="#' + headingSep + '">' + headings[h].innerHTML + '</a></li>');
			toc.append(item);

			if(headings[h].parentElement.getAttribute("class").indexOf("alignment")>-1){
				headings[h].parentElement.setAttribute("id", headingSep);
			}
			else{
				headings[h].setAttribute("id", headingSep);
			}

			$('.curriculum').scrollspy({ target: '#toc' });
		}
	}
});
