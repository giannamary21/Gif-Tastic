var movCat = ['Scary Movies' , 'Madea Movies ' , 'Drama Movies' , 'Action Movies'];


function moviesGifs() {
    var mCategory = $(this).attr('data-name');
    var apiKey = 'api_key=dc6zaTOxFJmzC&limit=20';
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + mCategory + '&rating=pg-13&' + apiKey;
    
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        
        .done(function(response) {
            $('#images').empty();

            var results = response.data;

            for (j = 0; j < results.length; j++) {
                
                var gifContainer = $('div');
                var rating = results[j].rating;
                var still = results[j].images.original_still.url;
                var animated = results[j].images.original.url;
                var p = $('<p>').text('Rating: ' + rating);

                var movieGif = 
                $('<img>')
                .addClass('thisGif')
                .attr('src', still)
                .attr('data-state','still')
                .attr('data-still', still)
                .attr('data-animate', animated);
                
                
                $('#images').append(movieGif).append(p);
            }
           
                $('.thisGif').on('click', function() {

                var state = $(this).attr('data-state');
                var fastGif = $(this).data('animate');
                var slowGif = $(this).data('still');

                if (state == 'still') {
                    $(this).attr('src', fastGif);
                    $(this).attr('data-state', 'animate');


                } else if (state == 'animate') {
                    $(this).attr('src', slowGif);
                    $(this).attr('data-state', 'still');
                }
            });
        });

}

function renderButtons() {
    for (var i = 0; i < movCat.length; i++) {
        var a = $("<button>");
        
        a.addClass("movies");
        a.attr("data-name", movCat[i]);
        a.text(movCat[i]);
        
                 $("#buttons").append(a);
    }
}

$("#add-button").on("click", function(event) {
    
    event.preventDefault();
                 $("#buttons").empty();
    
    var movie = $("#user-input").val().trim();

    movCat.push(movie);
                 $('#user-input').val('');
       renderButtons();
});

$('.movies').on('click', function() {
       moviesGifs();
       renderButtons();
});

$(document).on("click", ".movies", moviesGifs);
       renderButtons();





