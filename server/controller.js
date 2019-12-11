let places = [
  {
    place: "Tokyo",
    country: "Japan",
    rating: 7,
    imgUrl:
      "https://www.gotokyo.org/shared/site_gotokyo/images/header/xplan6.jpg.pagespeed.ic.SUq_4Aw_1o.jpg"
  }
];
let favorites = [];

function addPlace(req, res) {
  places.push(req.body);
  res.status(200).json(places);
}
function getPlaces(req, res) {
  res.status(200).json(places);
}
function addToFavorites(req, res) {
  favorites.push(req.body);
  res.status(200).json(favorites);
}

module.exports = {
  addPlace,
  getPlaces,
  addToFavorites
};
