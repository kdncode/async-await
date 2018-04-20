var movies = [
    {
        title: 'Prison Break',
        hasWatched: true,
        rating: 5
    },

    {
        title: 'Transporter',
        hasWatched: false,
        rating: 4.5
    }
]

// movies.forEach(function(movie) {

//     var result = "You have ";

//     if( movie.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not seen ";
//     }

//     result += "\"" + movie.title + "\" ";
//     result += movie.rating + " stars";
//     console.log(result);
// })


// Or 
function buildString(movie) {

    var result = "You have ";

    if( movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }

    result += "\"" + movie.title + "\" ";
    result += movie.rating + " stars";

    return result;
}

movies.forEach(function(movie) {
   console.log(buildString(movie));
})