# GameFinder

## summary
This app will allow you to find video games by searching by, rating, genre, console, producer or release date, including giving you a list of games that are soon to be announced

## User Story
As a guest :

* You can view upcoming video games
* you can see reviews for said games
* you can find a game by genre, producer, release date etc.

As a user:

* Sign in
* write reviews for video games
* favorite games that are soon to be realeased to get news updates about them

## Use Case
Users will start by logging in, they will see a list of popular gamesout right now, they can click on links on the side of the page to redirect them to a page to search for games by certain paramaters ex(release date, genre, rating...) when they find a game it will show a description, information about the game ex.(image, price, producer, console, release date, genre, rating, dlc packs)
<br><br>
From here they can favorite a game which will save it to their account, once the game is on their account it will update information about the game when ever they log in

##Approach
Steps:

1. Set up MVC architecture
2. Make sure servers running
3. make routes that link to pages with dummy data
4. make models that verifies user passwords(mongo)
5. make models for saving game info(psql)
6. link routes to ejs and pass psql data
7. create jquery calls for the api(will need about 4)
8. implement user sign in
9. implememnt user saved games
10. style

## Wireframe
![Imgur](http://i.imgur.com/2gGYwxO.png)
![Imgur](http://i.imgur.com/xnFyGiq.png)
![Imgur](http://i.imgur.com/LZvDiNX.png)

##Technologies Used
API <br>
Giant Bomb
<br>
<br>
-PSQL<br>
-Node<br>
-mongo<br>
-EJS<br>
-React
##Sources
http://www.giantbomb.com/api/documentation



