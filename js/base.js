$(document).ready(function() {

  // ------------------ Movie genre manipulations ------------------- //

  function showGenre(genre) {
    $("#movies-table tr").each( function(){
      if (genre == "all" || genre == "") { $(this).show(); }
      else if ($(this).attr('genre') == genre) { $(this).show(); }
      else { $(this).hide(); }
    });
  }

  function highlightGenre(genre) {
    $("#movie-sub-links a").css("color", "#616161");
    $("#movie-sub-links a").each(function(){
      if ($(this).attr('href').includes(genre)) {
        $(this).css("color", "#c5c8c6");
      }
    });
  }

  // ------------------ Coding content ------------------- //

  function showCategory(category) {
    $("#coding-pane ul li").each(function(){
      if (category == "all" || category == "" || $(this).attr('cat') == category) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  function highlightCatagory(category) {
    $("#coding-sub-links a").css("color", "#616161");
    $("#coding-sub-links a").each(function(){
      if ($(this).attr('href').includes(category)) {
        $(this).css("color", "#c5c8c6");
      }
    });
  }

  // ------------------ Tab manipulations ------------------- //

  function showTab(tab) {
    $(".content-pane").hide();
    $(".content-pane").each(function() {
      if ($(this).attr('id').includes(tab)) {
        $(this).show();
      }
    });
  }

  function highlightTab(tab) {
    $(".navigation-links a").css("font-weight", "500");
    $(".navigation-links a").css("color", "#616161");

    $(".navigation-links a").each(function() {
      if ($(this).attr('href').includes(tab)) {
        $(this).css("font-weight", "bold");
        $(this).css("color", "#c5c8c6");
      }
    });
  }

  function showSubTab(tab, subtab) {
    if (tab == "coding") {
      showCategory(subtab);
    } else if (tab == "movies") {
      showGenre(subtab);
    }
  }

  function highlightSubTab(tab, subtab) {
    if (tab == "coding") {
      highlightCatagory(subtab);
    } else if (tab == "movies") {
      highlightGenre(subtab);
    }
  }

  function reload() {
    var tab = location.hash.substr(1).split('-')[0]
    var subtab = location.hash.split('-')[1] || "all"

    showTab(tab);
    highlightTab(tab);
    showSubTab(tab, subtab);
    highlightSubTab(tab,subtab);
  }

  if (location.hash){ reload(); }
  window.addEventListener('hashchange', reload, false);

  // ------------------ Secret text when clicking on books ------------------- /

	$("#literature-table a").click(function() {
		var book_number = $("#literature-table tr a")[0].parentElement.parentElement.rowIndex + 1
		var fade_in_child = 3;
		var fade_out_child = 2;
		if ( $("#literature-table tr:nth-child("+book_number+") td:nth-child(2)").is(':visible') ){
			fade_in_child = 2;
			fade_out_child = 3;
		}

		$("#literature-table tr:nth-child("+book_number+") td:nth-child("+fade_in_child+")").fadeToggle(500, function() {
	    		// Animation complete
	 	});
		$("#literature-table tr:nth-child("+book_number+") td:nth-child("+fade_out_child+")").delay(510).fadeToggle("slow", function() {
	    		// Animation complete
	  	});
	});
});
