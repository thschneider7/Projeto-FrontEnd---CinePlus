const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");

const filmesFixos = [
  {
    id: 1,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w200/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    overview: "A história de J. Robert Oppenheimer e a bomba atômica.",
    elenco: "Cillian Murphy, Emily Blunt",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  {
    id: 2,
    title: "Barbie",
    year: 2023,
    rating: 7.2,
    poster: "https://image.tmdb.org/t/p/w200/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    overview: "Barbie e Ken no mundo real.",
    elenco: "Margot Robbie, Ryan Gosling",
    trailer: "https://www.youtube.com/embed/pBk4NYhWNMM",
  },
  {
    id: 3,
    title: "Homem-Aranha: Aranhaverso",
    year: 2023,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w200/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    overview: "Miles Morales e o multiverso.",
    elenco: "Shameik Moore, Hailee Steinfeld",
    trailer: "https://www.youtube.com/embed/shW9i6k8cB0",
  },
  {
    id: 4,
    title: "John Wick 4",
    year: 2023,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w200/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
    overview: "John Wick contra o High Table.",
    elenco: "Keanu Reeves",
    trailer: "https://www.youtube.com/embed/qEVUtrk8_B4",
  },
  {
    id: 5,
    title: "Super Mario Bros",
    year: 2023,
    rating: 7.3,
    poster: "https://image.tmdb.org/t/p/w200/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    overview: "Mario salva o Reino Cogumelo.",
    elenco: "Chris Pratt",
    trailer: "https://www.youtube.com/embed/TnGl01FkMMo",
  },
  {
    id: 6,
    title: "Missão: Impossível 7",
    year: 2023,
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w200/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    overview: "Ethan Hunt enfrenta IA rebelde.",
    elenco: "Tom Cruise",
    trailer: "https://www.youtube.com/embed/avz06PDqDbM",
  },
  {
    id: 7,
    title: "Guardiões da Galáxia 3",
    year: 2023,
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w200/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    overview: "Última missão dos Guardiões.",
    elenco: "Chris Pratt",
    trailer: "https://www.youtube.com/embed/u3V5KDHRQvk",
  },
  {
    id: 8,
    title: "Avatar 2",
    year: 2022,
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w200/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    overview: "Jake Sully em Pandora.",
    elenco: "Sam Worthington",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
  },
  {
    id: 9,
    title: "Pantera Negra 2",
    year: 2022,
    rating: 7.2,
    poster: "https://image.tmdb.org/t/p/w200/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    overview: "Wakanda protege seu legado.",
    elenco: "Letitia Wright",
    trailer: "https://www.youtube.com/embed/_Z3QKkl1WyM",
  },
  {
    id: 10,
    title: "Tudo em Todo Lugar",
    year: 2022,
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w200/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    overview: "Multiverso e família.",
    elenco: "Michelle Yeoh",
    trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
  },
  {
    id: 11,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w200/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    overview: "Sonhos dentro de sonhos.",
    elenco: "Leonardo DiCaprio",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 12,
    title: "Matrix",
    year: 1999,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    overview: "Realidade simulada.",
    elenco: "Keanu Reeves",
    trailer: "https://www.youtube.com/embed/m8e-FF8MsqU",
  },
  {
    id: 13,
    title: "Interestelar",
    year: 2014,
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    overview: "Viagem no espaço-tempo.",
    elenco: "Matthew McConaughey",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 14,
    title: "O Senhor dos Anéis",
    year: 2001,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w200/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
    overview: "A jornada do Um Anel.",
    elenco: "Elijah Wood",
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4",
  },
  {
    id: 15,
    title: "Harry Potter 1",
    year: 2001,
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w200/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    overview: "Primeiro ano em Hogwarts.",
    elenco: "Daniel Radcliffe",
    trailer: "https://www.youtube.com/embed/VyHV0BRtdxo",
  },
  {
    id: 16,
    title: "Jurassic Park",
    year: 1993,
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w200/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    overview: "Dinossauros no parque.",
    elenco: "Sam Neill",
    trailer: "https://www.youtube.com/embed/QWBKEmWWL38",
  },
  {
    id: 17,
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    overview: "Romance no navio.",
    elenco: "Leonardo DiCaprio",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
  },
  {
    id: 18,
    title: "Clube da Luta",
    year: 1999,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w200/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    overview: "Um clube secreto.",
    elenco: "Brad Pitt",
    trailer: "https://www.youtube.com/embed/qtRKdVHc-cE",
  },
  {
    id: 19,
    title: "Gladiador",
    year: 2000,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    overview: "Roma antiga e vingança.",
    elenco: "Russell Crowe",
    trailer: "https://www.youtube.com/embed/owK1qxDselE",
  },
  {
    id: 20,
    title: "O Lobo de Wall Street",
    year: 2013,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w200/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
    overview: "Fraudes financeiras.",
    elenco: "Leonardo DiCaprio",
    trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
  },
];

function displayMovies(movies) {
  moviesContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-title">${movie.title} | Nota: ${movie.rating}</div>
      <div class="toggle-btn">⌄</div>
    `;

    const details = document.createElement("div");
    details.classList.add("movie-details");
    details.style.display = "none"; // GARANTE invisível ao criar
    movieItem.appendChild(details);

    movieItem.querySelector(".toggle-btn").addEventListener("click", () => {
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        if (!details.innerHTML) {
          details.innerHTML = `
            <p><strong>Sinopse:</strong> ${movie.overview}</p>
            <p><strong>Elenco:</strong> ${movie.elenco}</p>
            <iframe src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>
          `;
        }
        details.style.display = "block";
      }
    });

    moviesContainer.appendChild(movieItem);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtrados = filmesFixos.filter((f) =>
    f.title.toLowerCase().includes(query)
  );
  displayMovies(filtrados);
});

document
  .getElementById("ratingFilter")
  .addEventListener("change", applyFilters);
document.getElementById("yearFilter").addEventListener("change", applyFilters);

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function applyFilters() {
  let filtrados = [...filmesFixos];
  const rating = document.getElementById("ratingFilter").value;
  const year = document.getElementById("yearFilter").value;

  if (rating === "high")
    filtrados = filtrados.sort((a, b) => b.rating - a.rating);
  if (rating === "low")
    filtrados = filtrados.sort((a, b) => a.rating - b.rating);
  if (rating === "") filtrados = shuffle(filtrados);
  if (year) filtrados = filtrados.filter((f) => f.year == year);

  displayMovies(filtrados);
}

displayMovies(filmesFixos);
