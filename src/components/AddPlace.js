import React from "react";
import axios from "axios";
import "../styles/AddPlace.css";

class AddPlace extends React.Component {
  constructor() {
    super();
    this.state = {
      place: "",
      country: "",
      rating: "",
      imgUrl: ""
    };
    this.updatePlace = this.updatePlace.bind(this);
    this.updateCountry = this.updateCountry.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateImageURL = this.updateImageURL.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updatePlace(e) {
    this.setState({ place: e.target.value });
  }
  updateCountry(e) {
    this.setState({ country: e.target.value });
  }
  updateRating(e) {
    this.setState({ rating: e.target.value });
  }
  updateImageURL(e) {
    this.setState({ imgUrl: e.target.value });
  }
  handleClick() {
    const { place, country, rating, imgUrl } = this.state;
    let body = {
      place,
      country,
      rating,
      imgUrl
    };
    axios.post("/api/places", body).then(response => {
      this.props.updatePlaces(response.data);
    });
  }

  render() {
    return (
      <div className="add_place__container">
        <input onChange={this.updatePlace} placeholder="Place" />
        <input onChange={this.updateCountry} placeholder="Country" />
        <input onChange={this.updateRating} placeholder="Rating" />
        <input onChange={this.updateImageURL} placeholder="Image URL" />
        <button className="add_place__button" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default AddPlace;
