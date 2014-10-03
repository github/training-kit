$(function(){
	var timeLeftInterval = 0;

	// Bind checkbox/label click for slide toggle
	$("#slide-only-toggle").change(function(){
		var checkState = $("#slide-only-toggle").attr("checked");
		$(".materials > *").toggleClass("hidden");
		$(".slide").toggleClass("hidden");
	});


	// Parse username from querystring
	var urlSearch = window.location.search,
			teacherQuery = urlSearch.match(/teacher=[a-z,A-Z,0-9]*/)[0],
			username = teacherQuery.substring(8, teacherQuery.length);

	if(username){
		$.ajax(
		{
			url: "https://api.github.com/users/"+username,
			success: function(data, textStatus, jqXHR){

				$("<span/>",
				{
					class: "teacher-name",
					text: data.name
				}).appendTo("#teacher-name");

				$("<span/>",
				{
					text: data.login
				}).appendTo("#teacher-username");

				// Profile email
				if(data.email){
					$("<span/>",
					{
						text: data.email
					}).appendTo("#teacher-email");
				}
				else{
					$("#teacher-email").toggleClass("hidden");
				}

				// Profile company
				if(data.company){
					$("<span/>",
					{
						text: data.company
					}).appendTo("#teacher-organization");
				}
				else{
					$("#teacher-organization").toggleClass("hidden");
				}


				// Profile location
				if(data.location){
					$("<span/>",
					{
						text: data.location
					}).appendTo("#teacher-location");
				}
				else{
					$("#teacher-location").toggleClass("hidden");
				}

				$("<img/>",
				{
					src: data.avatar_url,
					class: "img-circle img-thumbnail"
				}).appendTo("#teacher-avatar");

				$("<span/>",
				{
					text: data.public_repos,
					class: "badge"
				}).appendTo("#teacher-repo");

				$("<span/>",
				{
					text: data.followers,
					class: "badge"
				}).appendTo("#teacher-followers");

				$("<span/>",
				{
					text: data.following,
					class: "badge"
				}).appendTo("#teacher-following");

				$("#teacher").toggleClass("hidden");
				$("#teacher").toggleClass("slide");

				updateSlideSize();
			}
		});
	}

	// Render the TOC
	buildToc();
	// Reframe slides on any window resize
	$(window).resize(function () {
		updateSlideSize();
	});
	// Ensure slide scale at start
	updateSlideSize();
	// Startup slide scrollsnap watching
	$(document).scrollsnap({
		snaps: '.slide',
		proximity: 160
	});

	function updateSlideSize(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		$(".slide").css("height", h);
	}

	//Time toggle keybinding
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

	// Table of Contents header parsing and builder
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
