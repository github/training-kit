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

    console.log("ActiveId: " + activeId);

    var scopeWrapper = document.getElementById("scope");

    switch(activeId){
      case "outline":
        showSet(scopeWrapper, "outline");
        break;
      case "summary":
        showSet(scopeWrapper, "summary");
        break;
      case "details":
        showSet(scopeWrapper, "details");
        break;
    }
  }

  function showSet(wrapper, scope){
    console.log("Changing scope");
    wrapper.className = scope;
  }
  function selection(identifier){
    var allEl = document.getElementsByClassName(identifier);
    return allEl;
  }
})();
