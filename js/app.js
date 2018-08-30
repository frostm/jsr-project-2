/*
  Please add all Javascript code to this file.
*/
var firstDropDown = document.querySelectorAll('li a')[1],
	secondDropDown = document.querySelectorAll('li a')[2],
	thirdDropDown = document.querySelectorAll('li a')[3],
	headline = document.querySelectorAll('h3'),
	category = document.querySelectorAll('h6');
	img = document.querySelectorAll('.featuredImage img');


// click for NYT

firstDropDown.onclick = function() {


	// connect to NYT
	var xhttpNYT = new XMLHttpRequest();
	
	xhttpNYT.open('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6a54f099ac5a4e3783ffa599adcf005e');
	xhttpNYT.send();

	function errorHandler() {
	  console.log('something went wrong');
	}

	xhttpNYT.onerror = errorHandler;
	xhttpNYT.onload = nytContent;


	// populate with NYT data
	function nytContent () {

	  var nytData = JSON.parse(xhttpNYT.responseText);

	  for (i = 0; i < headline.length; i++) {
	  	headline[i].innerText = nytData.results[i].title;
	  	category[i].innerText = nytData.results[i].subsection;
	  	img[i].src = nytData.results[i].multimedia[i].url;
	  }

		$( 'h3' ).click(function() {
			alert( "this will be a popup" );
		});

	}


	//run function
	nytContent();

};
