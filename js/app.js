/*
  Please add all Javascript code to this file.
*/



var firstDropDown = document.querySelectorAll('li a')[1],
	secondDropDown = document.querySelectorAll('li a')[2],
	thirdDropDown = document.querySelectorAll('li a')[3],
	dropDownTitle = document.querySelector('.container span'),
	articles = document.querySelectorAll('.article')
	headline = document.querySelectorAll('.articleContent h3'),
	category = document.querySelectorAll('h6'),
	img = document.querySelectorAll('.featuredImage img'),
	popUpHeadline = document.querySelector('#popUp h1'),
	popUpBlurb = document.querySelector('#popUp p');


window.onload = function() {
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
	  dropDownTitle.innerText = 'New York Times';

	  console.log(nytData);

	  for (i = 0; i < headline.length; i++) {
	  	headline[i].innerText = nytData.results[i].title;
	  	category[i].innerText = nytData.results[i].subsection;
	  	img[i].src = nytData.results[i].multimedia[i].url;
	  }

	  	$('h3').click(function( event ){
			$('#popUp').removeClass("loader hidden");
			var elementIndex = $( 'h3' ).index( this ) ;
			popUpHeadline.innerText = nytData.results[elementIndex].title;
			popUpBlurb.innerText = nytData.results[elementIndex].abstract;
			var newURL = nytData.results[elementIndex].short_url;
			$(".popUpAction").prop("href", newURL);
		});

		$('.closePopUp').click(function(){
			$('#popUp').addClass("loader hidden");
		});


	}


	//run function
	nytContent();


};


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
	  dropDownTitle.innerText = 'New York Times';

	  console.log(nytData);

	  for (i = 0; i < headline.length; i++) {
	  	headline[i].innerText = nytData.results[i].title;
	  	category[i].innerText = nytData.results[i].subsection;
	  	img[i].src = nytData.results[i].multimedia[i].url;
	  }

	  	$('h3').click(function( event ){
			$('#popUp').removeClass("loader hidden");
			var elementIndex = $( 'h3' ).index( this ) ;
			popUpHeadline.innerText = nytData.results[elementIndex].title;
			popUpBlurb.innerText = nytData.results[elementIndex].abstract;
			var newURL = nytData.results[elementIndex].short_url;
			$(".popUpAction").prop("href", newURL);
		});

		$('.closePopUp').click(function(){
			$('#popUp').addClass("loader hidden");
		});


	}


	//run function
	nytContent();

};

// click for Daily Mail

secondDropDown.onclick = function() {


	// connect to DM

	var xhttpDaily = new XMLHttpRequest();
	
	xhttpDaily.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=db4c258e05684c09b6aff90d7e0a3b1b');
	xhttpDaily.send();

	function errorHandler() {
	  console.log('something went wrong');
	}

	xhttpDaily.onerror = errorHandler;
	xhttpDaily.onload = dailyContent;


	// populate with DM data

	function dailyContent () {

	  var dailyData = JSON.parse(xhttpDaily.responseText);
	  dropDownTitle.innerText = 'Daily Mail';

	  for (i = 0; i < headline.length; i++) {
	  	headline[i].innerText = dailyData.articles[i].title;
	  	category[i].innerText = dailyData.articles[i].author;
	  	img[i].src = dailyData.articles[i].urlToImage;
	  }

	  	 $('h3').click(function( event ){
			$('#popUp').removeClass("loader hidden");
			var elementIndex = $( 'h3' ).index( this ) ;
			popUpHeadline.innerText = dailyData.articles[elementIndex].title;
			popUpBlurb.innerText = dailyData.articles[elementIndex].description;
			var newURL = dailyData.articles[elementIndex].url;
			$(".popUpAction").prop("href", newURL);
		});

		$('.closePopUp').click(function(){
			$('#popUp').addClass("loader hidden");
		});

	}


	//run function
	dailyContent();

};

// click for BBC

thirdDropDown.onclick = function() {


	// connect to DM

	var xhttpBBC = new XMLHttpRequest();
	
	xhttpBBC.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=db4c258e05684c09b6aff90d7e0a3b1b');
	xhttpBBC.send();

	function errorHandler() {
	  console.log('something went wrong');
	}

	xhttpBBC.onerror = errorHandler;
	xhttpBBC.onload = bbcContent;


	// populate with DM data

	function bbcContent () {

	  var bbcData = JSON.parse(xhttpBBC.responseText);
	  dropDownTitle.innerText = 'BBC';

	  for (i = 0; i < articles.length; i++) {
	  	headline[i].innerText = bbcData.articles[i].title;
	  	category[i].innerText = bbcData.articles[i].author;
	  	img[i].src = bbcData.articles[i].urlToImage;
	  }

	  	$('h3').click(function( event ){
			$('#popUp').removeClass("loader hidden");
			var elementIndex = $( 'h3' ).index( this ) ;
			popUpHeadline.innerText = bbcData.articles[elementIndex].title;
			popUpBlurb.innerText = bbcData.articles[elementIndex].description;
			var newURL = bbcData.articles[elementIndex].url;
			$(".popUpAction").prop("href", newURL);
		});

		$('.closePopUp').click(function(){
			$('#popUp').addClass("loader hidden");
		});

	}


	//run function
	bbcContent();

};




