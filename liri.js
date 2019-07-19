// require("dotenv").config();

// var keys = require("./keys.js");

// Spotify Section
// var spotify = new Spotify(keys.spotify);

// search: function ({ 
//     type: 'artist OR album OR track', 
//     query: 'My search query', 
//     limit: 20 
// }, callback);


// spotify.search ({ 
//     type: 'Song name', 
//     query: 'My search query',
//     limit: 20
//         }, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }
//     console.log(data);
// });










// OMDB and Axios Section
var axios = require("axios");

// OMDB movie-name 
var movieName = process.argv[3];

// OMDB URL
var movieURL =
  "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

//   Debug URL
console.log(movieURL);

axios.get(movieURL).then(
    function(response) {
        console.log("Movie Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
        console.log("Production Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);
    })
    .catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.resquest) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });


