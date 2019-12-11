import React from "react";
import PlacesView from "./components/PlacesView";
import axios from "axios";
import "./reset.css";
import "./styles/App.css";
//components
import AddPlace from "./components/AddPlace";

//TOTAL POINTS - 62;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      places: [],
      favorites: [],
      currentView: "places"
    };
    this.updatePlaces = this.updatePlaces.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
  }

  componentDidMount() {
    axios.get("/api/places").then(response => {
      this.setState({ places: response.data });
    });
    axios
      .get("/api/favs")
      .then(response => {
        this.setState({ favorites: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updatePlaces(newPlaces) {
    this.setState({ places: newPlaces });
  }

  updateFavorites(newFavorites) {
    this.setState({ favorites: newFavorites });
  }

  render() {
    return (
      <div>
        <header>
          <button onClick={() => this.setState({ currentView: "favs" })}>
            Favorites
          </button>
          <button onClick={() => this.setState({ currentView: "places" })}>
            Places
          </button>
        </header>
        <main>
          {this.state.currentView === "places" ? (
            <div className="app__entry">
              <PlacesView
                updateFavorites={this.updateFavorites}
                places={this.state.places}
              />
              <AddPlace updatePlaces={this.updatePlaces} />
            </div>
          ) : (
            <PlacesView
              showAddToFavButton={false}
              places={this.state.favorites}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
