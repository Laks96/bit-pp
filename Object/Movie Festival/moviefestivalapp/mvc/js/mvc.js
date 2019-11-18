"use strict"

var dataModule = (function () {


    const dataMovies = [];
    const programMovies = [];



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
            return this.title + ', ' + this.length + ', ' + this.genre.getDataOfGenre();
        }
    }

    function createMovie(title, length, genreStr) {
        const genre = new Genre(genreStr)
        return new Movie(title, length, genre)
    }

    function addMovie(movie) {
        dataMovies.push(movie)

    }


    function calculateLength() {
        let totalLength = 0;
        console.log(dataMovies);
        for (let i = 0; i < dataMovies.length; i++) {

            totalLength += parseInt(dataMovies[i].length);

        }
        return totalLength;
    }


    return {
        createMovie,
        addMovie,
        calculateLength

    }



})();



const uiModule = (function () {

    const movieName = $('.movie-name');
    const movieLength = $('.movie-length');
    const genre = $('.choose-genre');
    const list = $('.list');


    function collectData() {
        return {
            movieName: movieName.val(),
            movieLength: movieLength.val(),
            genre: genre.val()
        }
    }

    function displayMovie(movie) {


        const ele = $(`<li>${movie.getData()}</li>`)
        list.append(ele);

    }

    function clearForm() {

        $('.movie-name').val('');
        $('.movie-length').val('');
        $('.choose-genre').prop('selectedIndex', 0);
    };





    function error() {

        const error = $('.error').text('Please input all fields!')
        return error

    }

    return {
        collectData,
        displayMovie,
        error,
        clearForm
    }






})();

const controller = (function (ui, data) {

    const addMovieBtn = $('.addMovie')

    addMovieBtn.on('click', function () {

        const movieObj = uiModule.collectData();


        //console.log('movieObj :', movieObj);

        if (movieObj.movieName !== '' && movieObj.movieLength !== '') {

            const movieInstance = dataModule.createMovie(movieObj.movieName, movieObj.movieLength, movieObj.genre);
            dataModule.addMovie(movieInstance);

            uiModule.displayMovie(movieInstance);

            uiModule.clearForm();

            const b = dataModule.calculateLength();


            console.log(b);







        }
        else {
            const error = uiModule.error();


        }



    })


})(dataModule, uiModule)
