const express = require("express");
const app = express();
//controller functions
const { addPlace, getPlaces, addToFavorites } = require("./controller");

app.use(express.json());

app.post("/api/places", addPlace);
app.get("/api/places", getPlaces);
app.post("/api/favs", addToFavorites);

app.listen(5050, () => console.log(`Listening on Port 5050`));
