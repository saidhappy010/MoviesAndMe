const API_TOKEN = "026d30ff0937e9614c8b2b05ff61e4d6";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}
