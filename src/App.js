import React from "react";
import PlacesView from "./components/PlacesView";
import axios from "axios";
import "./reset.css";
//components
import AddPlace from "./components/AddPlace";

//TOTAL POINTS - 21;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      places: [],
      currentView: "places"
    };
    this.updatePlaces = this.updatePlaces.bind(this);
  }

  componentDidMount() {
    axios.get("/api/places").then(response => {
      this.setState({ places: response.data });
    });
  }

  updatePlaces(newPlaces) {
    this.setState({ places: newPlaces });
  }

  render() {
    // if (this.state.currentView === "places") {
    //   return (
    //     <div className="App">
    //       <button>Favorites</button>
    //       <button>Places</button>
    //       <AddPlace updatePlaces={this.updatePlaces} />
    //       <PlacesView places={this.state.places} />
    //     </div>
    //   );
    // } else if (this.state.currentView === "favs") {
    //   // return <PlacesView />;
    //   return <h1>Favorites List</h1>;
    // }
    return (
      <div>
        <button>Favorites</button>
        <button>Places</button>
        {this.state.currentView === "places" ? (
          <div className="App">
            <AddPlace updatePlaces={this.updatePlaces} />
            <PlacesView places={this.state.places} />
          </div>
        ) : (
          <h1>Favorites List</h1>
        )}
      </div>
    );
  }
}

export default App;
