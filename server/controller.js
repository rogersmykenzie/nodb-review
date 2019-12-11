let places = [];
let favorites = [];

function addPlace(req, res) {
  places.push(req.body);
  res.status(200).json(places);
}
function getPlaces(req, res) {
  res.status(200).json(places);
}

module.exports = {
  addPlace,
  getPlaces
};
