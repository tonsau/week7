const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const movieYear = document.querySelector(".userInputYear");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");

const movieYearToDisplay = document.querySelector(".movieyear");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");



let movieYearInStorage = localStorage.getItem("year");



if(titleInStorage && imageUrlInStorage && movieYearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(10, 10, 167, 0.598), rgba(106, 78, 78, 0.653)),
    url('${imageUrlInStorage}')`;
    movieTitleToDisplay.textContent = movieYearInStorage;
}



btn.addEventListener("click", () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;



    let movieYearInput = movieYear.value;


    localStorage.setItem("title", movieTitleInput);
    localStorage.setItem("imageUrl", posterUrlInput);


    localStorage.setItem("year", movieYearInput);



    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(10, 10, 167, 0.598), rgba(106, 78, 78, 0.653)),
    url('${posterUrlInput}')`;

    movieYearToDisplay.textContent = movieYearInput;

    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});