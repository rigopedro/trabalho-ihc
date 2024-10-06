'use strict';

const movieData = {
  featured: [
      {
        title: "Senhor dos Anéis: Retorno do Rei",
        imgSrc: "./assets/images/movies/LOTR.jpg",
        rating: "8.9",
        genre: "Fantasia/Aventura",
        year: "2003"
      },
      {
        title: "Resgate do Soldado Ryan",
        imgSrc: "./assets/images/movies/saving-private-ryan.jpg",
        rating: "8.6",
        genre: "Guerra/Ação",
        year: "1998"
      },
      {
          title: "Cassino Royale",
          imgSrc: "./assets/images/movies/casino-royale.jpg",
          rating: "8.0",
          genre: "Ação/Aventura",
          year: "2006"
      },
      {
        title: "Matrix",
        imgSrc: "./assets/images/movies/matrix.jpg",
        rating: "6.8",
        genre: "Sci-Fi/Ação",
        year: "2021"
      },
      {
        title: "O cavaleiro das trevas",
        imgSrc: "./assets/images/movies/dark-knight.jpg",
        rating: "9.0",
        genre: "Ação/Herói",
        year: "2008"
      },
  ],
  
  popular: [
    {
      title: "Spider-Man: Homecoming",
      imgSrc: "./assets/images/movies/spider-men.jpg",
      rating: "7.4",
      genre: "Herói",
      year: "2017"
    },
    {
      title: "Duna",
      imgSrc: "./assets/images/movies/dune.jpg",
      rating: "8.2",
      genre: "Sci-Fi",
      year: "2021"
    },
    {
      title: "Interstellar",
      imgSrc: "./assets/images/movies/interstaller.jpg",
      rating: "8.6",
      genre: "Sci-Fi",
      year: "2014"
    },
    {
      title: "1917",
      imgSrc: "./assets/images/movies/1917.jpg",
      rating: "8.3",
      genre: "Guerra",
      year: "2019"
    },
    {
      title: "Eternos",
      imgSrc: "./assets/images/movies/eternals.jpg",
      rating: "8.2",
      genre: "Herói",
      year: "2021"
    },
  ],

  newest: [
    {
      title: "John Wick 3: Parabellum",
      imgSrc: "./assets/images/John-Wick-3.jpg",
      rating: "8.2",
      genre: "Ação",
      year: "2021"
    },
    {
      title: "Shang-Chi",
      imgSrc: "./assets/images/movies/shang-chi.jpg",
      rating: "7.6",
      genre: "Herói/Fantasia",
      year: "2021"
    },
    {
      title: "Mulher Maravilha 1984",
      imgSrc: "./assets/images/movies/ww84.jpg",
      rating: "5.4",
      genre: "Herói",
      year: "2020"
    },
    {
      title: "Avengers: Endgame",
      imgSrc: "./assets/images/movies/endgame.jpg",
      rating: "8.4",
      genre: "Herói",
      year: "2019"
    },
    {
      title: "Capitã Marvel",
      imgSrc: "./assets/images/movies/captain-marvel.jpg",
      rating: "6.8",
      genre: "Herói",
      year: "2019"
    },
  ]
}

const filterRadios = document.querySelectorAll('.filter-radios input[type="radio"]');

filterRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    const selectedCategory = e.target.id;
    renderMovies(selectedCategory);
  });
});

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

function renderMovies(category) {
  const movieContainer = document.querySelector('.movies-grid'); // Seletor do contêiner de filmes
  movieContainer.innerHTML = ''; // Limpa o conteúdo anterior

  movieData[category].forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <div class="card-head">
        <img src="${movie.imgSrc}" alt="${movie.title}" class="card-img">
        <div class="card-overlay">
          <div class="bookmark">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
          <div class="rating">
            <ion-icon name="star-outline"></ion-icon>
            <span>${movie.rating}</span>
          </div>
          <div class="play">
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-info">
          <span class="genre">${movie.genre}</span>
          <span class="year">${movie.year}</span>
        </div>
      </div>
    `;

    movieContainer.appendChild(movieCard);
  });
}