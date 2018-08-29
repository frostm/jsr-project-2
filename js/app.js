/*
  Please add all Javascript code to this file.
*/
var firstDropDown = document.querySelectorAll('li a')[1],
	secondDropDown = document.querySelectorAll('li a')[2],
	thirdDropDown = document.querySelectorAll('li a')[3];

	console.log(firstDropDown);


// connect to NYT

var xhttpNYT = new XMLHttpRequest();
xhttpNYT.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6a54f099ac5a4e3783ffa599adcf005e');
xhttpNYT.send();

function errorHandler() {
  console.log('something went wrong');
}

function successHandler () {
  var nytData = JSON.parse(xhttpNYT.responseText);
  firstDropDown.innerText = nytData.response.docs[0].source;
  console.log(nytData);
}

xhttpNYT.onerror = errorHandler;
xhttpNYT.onload = successHandler;

successhandler();