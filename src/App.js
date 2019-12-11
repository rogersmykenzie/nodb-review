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
  }

  componentDidMount() {
    axios.get("/api/places").then(response => {
      this.setState({ places: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <AddPlace />
        <PlacesView />
      </div>
    );
  }
}

export default App;
