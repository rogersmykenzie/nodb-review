let places = [
  {
    place: "Tokyo",
    country: "Japan",
    rating: 7,
    imgUrl:
      "https://www.gotokyo.org/shared/site_gotokyo/images/header/xplan6.jpg.pagespeed.ic.SUq_4Aw_1o.jpg"
  }
];
let favorites = [
  {
    place: "Beijing",
    country: "China",
    rating: 8,
    imgUrl:
      "http://img2.chinadaily.com.cn/images/201902/23/5c70e0baa3106c65fffb5e31.jpeg"
  }
];

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

function getFavorites(req, res) {
  res.status(200).json(favorites);
}

module.exports = {
  addPlace,
  getPlaces,
  addToFavorites,
  getFavorites
};
