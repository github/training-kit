$(function(){
  // Hide Quizzes and Polls
  $(".quiz").hide();
  $(".poll").hide();

  // Bind checkbox/label click for slide toggle
  $("#slide-only-toggle").change(function(){
    $(".materials > *").not(".slide").toggleClass("hidden");
    $(".lab").toggleClass("hidden");
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
        $("#teachername").text(data.name);

        $("<span/>",
        {
          text: data.login
        }).appendTo("#teacherusername");

        // Profile email
        if(data.email){
          $("<span/>",
          {
            text: data.email
          }).appendTo("#teacheremail");
        }
        else{
          $("#teacheremail").toggleClass("hidden");
        }

        // Profile company
        if(data.company){
          $("<span/>",
          {
            text: data.company
          }).appendTo("#teacherorganization");
        }
        else{
          $("#teacherorganization").toggleClass("hidden");
        }


        // Profile location
        if(data.location){
          $("<span/>",
          {
            text: data.location
          }).appendTo("#teacherlocation");
        }
        else{
          $("#teacherlocation").toggleClass("hidden");
        }

        $("<img/>",
        {
          src: data.avatar_url,
          class: "img-circle img-thumbnail"
        }).appendTo("#teacheravatar");

        $("<span/>",
        {
          text: data.public_repos,
          class: "badge"
        }).appendTo("#teacherrepo");

        $("<span/>",
        {
          text: data.followers,
          class: "badge"
        }).appendTo("#teacherfollowers");

        $("<span/>",
        {
          text: data.following,
          class: "badge"
        }).appendTo("#teacherfollowing");

        $("#teacher").toggleClass("hidden");

        // Toggle material when self-taught

        $("div.video").toggleClass("hidden");

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

  // Conditionally Render the TOC

    // List of Legacy Classes
    var legacyClasses = ["GitHub Foundations", "GitHub Intermediate", "GitHub Advanced"];

    // Get the current class title
    var classTitle = $("header.colorful > div.container > h2").html();

    // If the current class is not in the list of legacy classes, hide the TOC
    // Otherwise render it out.
    if ($.inArray(classTitle, legacyClasses) == -1) {
      $(".module-toc").hide();
    }
    else {
      buildToc();
    }

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
    var h = window.innerHeight,
        even = $("hr:even");

    even.each(function(index){
      $(this).nextUntil("hr").wrapAll("<div class='slide'><div class='alignment'></div></div>");
    });

    $(".slide").css("height", h + "px");
  }

  //Time toggle keybinding
  var Timer = (function() {
    // this stores target time on window.countDownTo

    function now() { return new Date().getTime() }

    function bareCallback(aTimer) {
      var delta      = window.countDownTo.getTime() - now()
      var timeLeft   = delta > 0
      var noTimeLeft = !(timeLeft)

      if (noTimeLeft) {
        aTimer.clearTimer()
        return
      }

      var min_float = delta / 1000 / 60
      var minutes = Math.floor(min_float)
      var seconds = Math.floor((min_float - minutes) * 60)
      if (minutes < 10) { minutes = "0" + minutes }
      if (seconds < 10) { seconds = "0" + seconds}
      aTimer.shouldDisplay(minutes + ":" + seconds)
    }

    var Timer = function(display) {
      var aTimer       = this
      this.display     = display
      this.callback    = function() { bareCallback(aTimer) }
    }

    Timer.prototype.blankSlate = function() {
      this.clearTimer("")
    }

    Timer.prototype.clearTimer = function(textToShow) {
      textToShow = typeof textToShow !== 'undefined' ?  textToShow : "00:00"
      this.shouldDisplay(textToShow)
      window.countDownTo = 0
      if (window.counter) { window.clearInterval(window.counter) }
    }

    Timer.prototype.shouldDisplay = function(text) {
      this.display.text(text)
    }

    Timer.prototype.startCountdown = function(durationInMinutes) {
      // timer so that every second, update displayed time
      var countDownTo = new Date(now() + (1000 * 60 * durationInMinutes))
      window.countDownTo = countDownTo

      this.callback()
      window.counter = setInterval(this.callback, 1000 * 1)
    }

    return Timer;
  })()
  //receive parameter for counttime
  var timer = new Timer($("#time-left"));
  $('.timer-label').click(function(e) {
    e.preventDefault()
    timer.blankSlate()
    $("#start-stop").show();
    $(".time-amount").show();
  })

  $('#timerForm').submit(function(e) {
    e.preventDefault()
    $(".time-amount").hide();
    var duration = $('#minutes').val()
    timer.startCountdown(duration)
  })


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
