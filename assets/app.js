var topics = [`pianos`, `subaru-wrx`, `los angeles`, `pink floyd`, `shell fish`, `armenia`];  //first set of buttons come from here

var totalGifs = "&limit=" + 10;
var api = 'https://api.giphy.com/v1/gifs/search?&q='
var apiKey = '&api_key=xFgIECuKdXjNZ8CSmnrEFOtdyDpjj6tx'
var urlMain = api + apiKey + totalGifs;

function createButtons() {          //creates first array of buttons and adds all new ones
    $("#button-container").empty();
    for (i = 0; i < topics.length; i++){
    var button = $("<button>");
    button.addClass("btn");
    button.addClass("coolstuff-button")
    button.text(topics[i]);
    $("#button-container").append(button);
    }
    $(".coolstuff-button").on("click", function(){   //when said buttons clicked, run function populateGifContainer which will fill gif container with desired gifs
        $("#gif-container").empty();
        populateGIFContainer($(this).text());

})}

function populateGIFContainer(input){
    // console.log(input);
    input = input.replace(' ', '+');
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?q=" + input + apiKey + totalGifs + "&offset=5",
		method: "GET"
    }).then(function(response){
        // console.log(response);
        var data = response.data;
        
        for(var i = 0; i < data.length; i++) {      //for loop to generate images and attached ratings
            var rating = "<p>Rating: " + data[i].rating.toUpperCase() + "</p>";
            // console.log(rating);
            var images = $("<img>");
            var  imagesDiv = $("<div>");
            imagesDiv.attr("class", "imagesDiv");
            images.attr("src", data[i].images.fixed_height_still.url);
            images.attr("class", "gifs-class");
            images.attr("data-still", data[i].images.fixed_height_still.url);
            images.attr("data-animate", data[i].images.fixed_height.url);
            images.attr("data-state", "still");
            imagesDiv.append(rating, images);
            $("#gif-container").append(imagesDiv);
           
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
$(document).ready(function(){       //when the webpage loads, begin here:
createButtons();
// $("#formieform").submit(function(e) {
//     e.preventDefault();
// $("#cool-stuff-search").keypress(function(event) {
//     var searchBar = $("#cool-stuff-search").val();
//     if (event.which == 13 && topics.includes(searchBar) === false) {
//         event.preventDefault();
//         topics.push(searchBar);
//         createButtons();     
//     }
//  });
    
// });
// console.log(urlMain);
// console.log(totalGifs);
// console.log(input);
$("#submit").on("click", function (){
    event.preventDefault();
    var searchBar = $("#cool-stuff-search").val();
    // console.log(searchBar);
    if (topics.includes(searchBar) === false) {   //only make new buttons if desired button doesnt already exist, preventing duplicates 
        topics.push(searchBar);
        createButtons();     
    }
    
});

$("#gif-container").on("click", ".gifs-class", function(){      //for starting and stopping animatio on GIF's by clicking on them
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

})})