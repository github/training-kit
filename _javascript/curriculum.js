$(function(){

	buildToc();

	$(document).scrollsnap({
	  snaps: 'section',
	  proximity: 250
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
			// console.log(headings[h].parentElement);

			// var hiddenTitle = document.createElement("h3");
			// hiddenTitle.setAttribute("id", headingSep);
			// console.log(hiddenTitle);

			// $(headings[h].parentElement).prepend(hiddenTitle);

			headings[h].parentElement.setAttribute("id", headingSep);

			$('.curriculum').scrollspy({ target: '#toc' });
		}
	}
});
