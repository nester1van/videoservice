const films = document.getElementsByClassName("film");

for (let film of films) {
  film.addEventListener("mouseover", () => showDescription(film));
  
  film.addEventListener("mouseleave", () => hideDescription(film));
}

function showDescription(film) {
  let filmImage = film.firstChild.nextElementSibling;
  let filmDescription = film.lastChild.previousElementSibling;
  console.log(filmDescription);
  filmImage.style.opacity = "0.8";
  filmImage.style.filter = "brightness(0.3)";
  filmDescription.style.visibility = "visible";
}

function hideDescription(film) {
  let filmImage = film.firstChild.nextElementSibling;
  let filmDescription = film.lastChild.previousElementSibling;
  filmImage.style.opacity = "1";
  filmImage.style.filter = "brightness(1)";
  filmDescription.style.visibility = "hidden";
}

// function showDescription(film) {
//   let filmImage = film.firstChild.nextElementSibling;
//   console.log(filmImage);
//   filmImage.style.opacity = "0.8";
//   filmImage.style.filter = "brightness(0.3)";
//   film.addEventListener("mouseout", hideDescription(film, filmImage));
// }

