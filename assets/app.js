var topics = [`piano`, `subaru-wrx`, `los angeles`, `pink floyd`, `shell fish`];

var totalGifs = "&limit=" + 11;
var api = 'https://api.giphy.com/v1/gifs/search?&q='
var apiKey = '&api_key=xFgIECuKdXjNZ8CSmnrEFOtdyDpjj6tx'
var urlMain = api + apiKey + totalGifs;

function createButtons() {
    $("#button-container").empty();
    for (i = 0; i < topics.length; i++){
    var button = $("<button>");
    button.addClass("btn");
    button.addClass("coolstuff-button")
    button.text(topics[i]);
    $("#button-container").append(button);
    }
    $(".coolstuff-button").on("click", function(){
        $("#gif-container").empty();
        populateGIFContainer($(this).text());

})}

function populateGIFContainer(input){
    console.log(input);
    input = input.replace(' ', '+');
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?q=" + input + apiKey + totalGifs + "&offset=5",
		method: "GET"
    }).then(function(response){
        console.log(response);
        var data = response.data;
        for(var i = 0; i < data.length; i++) {
            var images = $("<img>");
            images.attr("src", data[i].images.fixed_height_still.url);
            images.attr("class", "gifs-class");
            images.attr("data-still", data[i].images.fixed_height_still.url);
            images.attr("data-animate", data[i].images.fixed_height.url);
            images.attr("data-state", "still");
            $("#gif-container").append(images);
           
        }
    })};


// $("#submit").click(populateGIFContainer);


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
    var searchBar = $("#cool-stuff-search").val();
    console.log(searchBar);
    if (topics.includes(searchBar) === false) {
        topics.push(searchBar);
        createButtons();     
    }
});

$("#gif-container").on("click", ".gifs-class", function(){
    var state = $(this).attr("data-state");
    // console.log(state);
    // console.log("test");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

})