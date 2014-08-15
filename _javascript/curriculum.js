$(function(){

	buildToc();

	// SnapSVG
	// Run once at startup to inject all SVGs
	loadAllSvg();

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
			headings[h].setAttribute("id", headingSep);
			$('.curriculum').scrollspy({ target: '#toc' });
		}
	}

	function loadAllSvg(){
		var els = document.getElementsByTagName("svg"),
				elCount = 0;

		for(elCount = 0; elCount < els.length; elCount++){
				injectSvg(els[elCount]);
		}
	}

	function injectSvg(canvasTarget){
		if(canvasTarget){
			Snap.load(
				canvasTarget.getAttribute("data-path"),
				function (frag) {
					sCanvas = Snap("#" + canvasTarget.getAttribute("id"));
					fCanvas = Snap();
					sCanvas.clear();

					//Determine if grouped build-steps present
					var buildStepBase = frag.select("#base");
							buildStepGroups = frag.selectAll("[id^=step-]"),
							buildStepCount = buildStepGroups.length,
							buildStep = 0;

					//Setup the container canvas boundary sizing
					setCanvasBBox(frag, canvasTarget);

					// Show the first build step when available
					// Otherwise just show entire graphic
					if(buildStepCount > 0){
						// Include the non-fragment base layout/visuals
						fCanvas.append(buildStepBase);
						// fCanvas.append(buildStepGroups[buildStep]);

						for(; buildStep < buildStepCount; buildStep++){

							// Supports fragment in-out transitions by
							// wrapping in a group and applying a second
							// fragment class
							if(buildStepGroups[buildStep].node.id.match(/in-out/)){
								var tG = fCanvas.g(buildStepGroups[buildStep]);
								buildStepGroups[buildStep].attr("class", "fragment fade-out");
								tG.attr("class", "fragment");
								fCanvas.append(tG);
							}
							else{
								buildStepGroups[buildStep].attr("class", "fragment");
								fCanvas.append(buildStepGroups[buildStep]);
							}
						}
					} else{
						//No "steps" to build out, ensure boundary guide
						//is not rendered
						frag.select("#boundary").remove();
						fCanvas.append(frag);
					}

					sCanvas.append(fCanvas);
				}
			);
		}
	}

	function setCanvasBBox(canvas, target){
		var boundary,
				maxWidth,
				maxHeight;

		boundary = canvas.select("#boundary").select(":first-child").getBBox();
		maxWidth = Math.ceil(boundary.width);
		maxHeight = Math.ceil(boundary.height);

		target.setAttribute("height", (((maxHeight/maxWidth)*100)+"%"));
		target.setAttribute("viewBox", "0 0 " + maxWidth + " " + maxHeight);
		return canvas;
	}
});
