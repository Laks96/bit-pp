"use strict"


var addMovie = $('.addMovie').on('click', function () {

    var movieListing = [];

    // collect forma data

    var movieName = $('.movie-name').val();
    var movieLength = $('.movie-length').val()
    var genre = $('.choose-genre').val();
    var list = $('.list');



    if (movieName !== '' && movieLength !== '') {
        var genreOfMovie = new Genre(genre);
        var someMovie = new Movie(movieName, movieLength, genreOfMovie);



        var ele = $(`<li>${someMovie.getData()}</li>`)
        list.append(ele);

        $('.movie-name').val('');
        $('.movie-length').val('');
        $('.choose-genre').prop('selectedIndex', 0);



    }
    else {
        error();

    }

});




var program = $('.create-program').on('click', function () {

    var list2 = $('.list2');
    var dateOfProgram = $('addDate').val();


    var nyYearProgram = new Program(dateOfProgram);





    var ele1 = $(`<li>${nyYearProgram.getData()}</li>`);
    list2.append(ele1);



});





// validate 

// if not valid 
// display error

// valid
// create genre 
// create movie 
// addd movie to list

// update movie ul

// 



class Genre {
    constructor(name) {
        this.name = name;

    }
    getDataOfGenre = function () {
        return ' Genre' + ':' + this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();

    }

}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;

    }
    getData() {
        return this.title + ' ' + ', length: ' + this.length + this.genre.getDataOfGenre();
    }
}


function error() {

    var error = $('.error').text('Please input all fields!')
    return error

}


class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numOfMovies = 0
        this.lengthOfAllMovies = 0

    }


    addMovie = function (movie) {
        this.listOfMovies.push(movie)
        this.numOfMovies += 1
    }

    getProgramLength = function () {
        var totalLength = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            totalLength += movie.length;
        }
        return totalLength;
    }



    getData = function () {
        var output = this.date + ', ' + ' Program duration:' + this.getProgramLength() + 'min\n'
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i]
            output += movie.getData() + '\n';
        }
        return output;
    }



};


