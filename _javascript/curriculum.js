$(function(){
	// Global-ish vars
	var timeLeftInterval = 0;

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
		var timeLeftDisplay = $("#time-left"),
				timeLeft = 300;

		clearInterval(timeLeftInterval);

		if($(".timer-wrapper").hasClass("fade-out")){
			$(".timer-wrapper").removeClass("fade-out");
			timeLeftDisplay.html( Math.floor((timeLeft)/60) + ":" + (timeLeft%60 < 10 ? "0"+timeLeft%60:timeLeft%60) );
			timeLeftInterval = setInterval(function(){


				timeLeftDisplay.html( Math.floor((timeLeft)/60) + ":" + (timeLeft%60 < 10 ? "0"+timeLeft%60:timeLeft%60) );
				timeLeft = --timeLeft;

				console.log(timeLeft);

				if(timeLeft == -1){
					clearInterval(timeLeftInterval);
				}
			}, 1000);


		}
		else{
			timeLeftDisplay.html("");
			$(".timer-wrapper").addClass("fade-out");
		}
	});

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
