var topics = [`pianos`, `wrx`, `los angeles`, `pink floyd`, `shell fish`];

var totalGifs = "&limit=" + 10;
var api = 'https://api.giphy.com/v1/gifs/search?&q='
var apiKey = '&api_key=xFgIECuKdXjNZ8CSmnrEFOtdyDpjj6tx'
var urlMain = api + apiKey + totalGifs;
var input = $("#cool-stuff-search").val();

function createButtons() {
    for (i = 0; i < topics.length; i++){
    var button = $("<button>");
    button.addClass("btn")
    button.text(topics[i]);
    $("#button-container").append(button);
    }
}

// function populateGIFContainer(coolthing){
// 	$.ajax({
// 		url: "https://api.giphy.com/v1/gifs/search?q=" + coolthing + apiKey + totalGifs,
// 		method: "GET"
// 	}).then(function(response){


// function setupAPI() {
//     var button = select("#submit");
//     button.mousePressed(beginSearch);
//     console.log(url);
//     input = select("#cool-stuff-search");

// }

// function beginSearch() {
    
//     var url = api + input.value() + apiKey + totalGifs;
//     console.log(url);
    
// }

createButtons();
// console.log(urlMain);
// console.log(totalGifs);
// console.log(input);
$("#submit").on("click", function(){
    console.log($("#cool-stuff-search").val());
});