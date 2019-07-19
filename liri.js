
require("dotenv").config();

// Required Packages
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Global Variables
var artistConcert = process.argv[3];
var concertURL =
    "https://rest.bandsintown.com/artists/" +
    artistConcert +
    "/events?app_id=codingbootcamp";
var movieName = process.argv[3];
var movieURL =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
var searchTerm = process.argv[2];


switch (searchTerm) {
    case "concert-this":
        concertBands();
        break;
    case "spotify-this-song":
        spotifySearch();
        break;
    case "movie-this":
        omdbInfo();
        break;
    case "do-what-it-says":
        doIt();
        break;
};


// Functions

// Bands In Town and Axios
function concertBands() {
    axios.get(concertURL).then(
        function (response) {
            console.log(`
            Venue Name: ${response.data[0].description}
            Venue Location: ${response.data[0].venue.city +
                ", " +
                response.data[0].venue.region}
            Date: ${moment(response.data[0].datetime).format("MM/DD/YYYY")}
            `);
        }
    )
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
};

// Do It Function, FS 
function doIt() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    })
};

// OMDB and Axios Section
function omdbInfo() {
    if (!process.argv[3]) {
        process.argv[3] = "Mr Nobody";
    }

    axios.get(movieURL).then(
        function (response) {
            console.log("Movie Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Production Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
};

// Spotify Section
function spotifySearch() {
    if (!process.argv[3]) {
        process.argv[3] = "The Sign Ace of Base"
    }

    spotify.search ({ 
        type: 'track', 
        query: process.argv[3],
        limit: 1
        }, function (err, data) {
            if (!err) {
                var songObj = data.tracks.items[0];
                var artistName = songObj.album.artists[0].name;
                console.log(`
                Artist: ${artistName}
                Song title: ${songObj.name}
                Album Name: ${songObj.album.name}
                Preview URL: ${songObj.preview_url}`);
            } 
            else {
                console.log(`Error: ${err}`);
            }
        })
};
    