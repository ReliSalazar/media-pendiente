let games_column = document.getElementById("games");
let books_column = document.getElementById("books");
let manga_column = document.getElementById("manga");
let anime_column = document.getElementById("anime");
let movies_column = document.getElementById("movies");
let finished_21_column = document.getElementById("finished_21");
let finished_22_column = document.getElementById("finished_22");

appendElements(games, games_column);
appendElements(books, books_column);
appendElements(manga, manga_column);
appendElements(anime, anime_column);
appendElements(movies, movies_column);
appendElements(finished_21, finished_21_column);
appendElements(finished_22, finished_22_column);

function appendElements(list, node) {
  if (list.length > 10) {
    let quantity = list.length - 10;
    list = [].concat(list.slice(0, 10), `[...] ${quantity}+`);
  }

  list.map((element) => {
    let tag = document.createElement("p");
    let text = document.createTextNode(element);
    tag.appendChild(text);
    node.appendChild(tag);
  });
}
