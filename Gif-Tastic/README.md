# GifTastic

In this assignment, I use the GIPHY API to make a dynamic web page that populates with gifs of selected categories of movies, call the GIPHY API and use JavaScript and jQuery to change the HTML of our site.

# Description

* Created an array of strings, each one related to a category and Saved it to a variable called movCat(movie category).

* The app takes the categories in this array and create buttons in our HTML.

* When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

* When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

* Under every gif, displayed its rating (PG, G, so on).
This data is provided by the GIPHY API.

* Added a form to my page,takes the value from a user input box and adds it into the movCat array. Then a function call is made, that takes each category in the array remakes the buttons on the page.
