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
			teacherQuery = urlSearch.match(/teacher=[a-z,A-Z,0-9]*/),
			username;

	if(teacherQuery && teacherQuery.length == 1){
		username = teacherQuery[0].substring(8, teacherQuery[0].length);

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

	// Bind checkbox toggle for TOC
	var shortcuts = {};
	shortcuts.toggle = function(event){
		console.log(event.keyCode);

		// Help "?" toggle
		if(event.shiftKey && event.keyCode === 191){
			$('#help').modal('toggle');
		}
		// TOC "T" toggle
		else if(event.shiftKey && event.keyCode === 84){
			$(".col-content").toggleClass("shift-left");
			$(".col-toc").toggleClass("shift-left");
		}
	}
	document.addEventListener("keydown", shortcuts.toggle, false);

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
		proximity: 100
	});

	function updateSlideSize(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		$(".slide").css("height", h);
	}

	//Time toggle keybinding
	$(".timer-label").click(function(){
		$(".timer-wrapper").toggleClass("fade-out");
		$(".timer-amount").show();
		resetTimer();
	});
	$(".timer-exit").click(function(){
		$(".timer-wrapper").toggleClass("fade-out");
		$("#timer-check").removeAttr("checked");
		// $(".timer-amount").();
		resetTimer();
	});
	$("#start-stop").click(function(){
		var timeLeftDisplay = $("#time-left")
		var min = $("#minutes").attr("value");
		var duration = min*60;

		resetTimer();

		$(".timer-amount").hide();

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
		var headings = $(".deck h2"),
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

			$('.deck').scrollspy({ target: '#toc' });
		}
	}
});
