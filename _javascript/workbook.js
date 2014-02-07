(function(){
  var scopeRadios = [];

  scopeRadios.push(document.getElementById("outline"));
  scopeRadios.push(document.getElementById("summary"));
  scopeRadios.push(document.getElementById("details"));

  for(var i=0; i<scopeRadios.length; i++){
    scopeRadios[i].addEventListener("click", switchScope);

    if(scopeRadios[i].checked){
      switchScope(false, scopeRadios[i].id);
    }
  }

  function switchScope(event, id){
    var activeId;

    if(event){
      activeId = event.target.id;
    }
    else if (id){
      activeId = id;
    }


    switch(activeId){
      case "outline":
        showSet("outline");
        hideSet("summary");
        hideSet("details");
        break;
      case "summary":
        hideSet("outline");
        showSet("summary");
        hideSet("details");
        break;
      case "details":
        showSet("outline");
        showSet("summary");
        showSet("details");
        break;
    }
  }
  function hideSet(id){
    var allEl = selection(id);
        hideClassNames = id + " scope-hidden";
    for(var e=0; e<allEl.length; e++){
      allEl[e].className = hideClassNames;
    }
  }
  function showSet(id){
    var allEl = selection(id),
        showClassNames = id + " scope-visible";
    for(var e=0; e<allEl.length; e++){
      allEl[e].className = showClassNames;
    }
  }
  function selection(identifier){
    var allEl = document.getElementsByClassName(identifier);
    return allEl;
  }
})();
