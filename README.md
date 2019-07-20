# liri-node-app

# This is Liri. 

Liri is a Command Line Node Application to **simplify** your life. Instead of jumping between applications, you can use LIRI to search Spotify for your favorite song, OMDB for your favorite movie, and Bands In Town for venue details. 

Liri is a Language Interpretation and Recognition Interface. Liri takes in parameters and gives you back data.


I am the sole contributor to this project. 

### The App
This App is organized first by required packages, then global variables, and finally functions. 

.gitignore stores the Spotify API keys locally, allowing users to provide their own keys if they wish. 



### To use it:
Open your Terminal and navigate to the project. 

* To search Spotify: Type node liri.js spotify-this-song "artist or band name here"
    * Example: node liri.js spotify-this-song 'lingerie'

![LIRI Spotify](/images/spotify-this-song-lingerie.png)


* To search OMDB: Type node liri.js movie-this <"movie name here">
    * Example: node liri.js movie-this 'moonlight'

![LIRI OMDB](/images/movie-this-moonlight.png)


* To search for a concert: Type node liri.js concert-this "artist or band name here"
    * Example: node liri.js concert-this 'lizzo' 

![LIRI Concert](/images/concert-this-lizzo.png)


* If you get bored, type: node liri.js do-what-it-says 
    * Example: node liri.js do-what-it-says

![LIRI Surprise](/images/do-what-it-says.png)


### The packages: 
Liri uses:
* axios 
* fs 
* keys 
* moment 
* Spotify 



