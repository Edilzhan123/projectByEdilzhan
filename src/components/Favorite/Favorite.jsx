export const addToFavorites = (product) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.some((fav) => fav.id === product.id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Товар добавлен в избранное");
  } else {
    alert("Товар уже в избранном");
  }
};
