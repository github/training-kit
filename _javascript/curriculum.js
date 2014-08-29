$(function(){

	$(window).resize(function () {
		updateSlideSize();
	});

	updateSlideSize();

	function updateSlideSize(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		$(".slide").css("height", h);
	}

	buildToc();

	$(document).scrollsnap({
	  snaps: '.slide',
	  proximity: 150
	});

	function buildToc(){
		var headings = $("h3"),
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
