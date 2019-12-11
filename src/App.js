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
      places: []
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
    return (
      <div className="App">
        <AddPlace updatePlaces={this.updatePlaces} />
        <PlacesView places={this.state.places} />
      </div>
    );
  }
}

export default App;
