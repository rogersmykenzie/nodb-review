import React from "react";
import "../styles/PlacesView.css";
import axios from "axios";

class PlacesView extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  addToFavorites(place) {
    axios.post("/api/favs", place).then(response => {
      this.props.updateFavorites(response.data);
    });
  }

  render() {
    return (
      <div className="places__container">
        {this.props.places.map(element => {
          const { place, country, imgUrl, rating } = element;
          return (
            <div className="places__card">
              <h1>{place}</h1>
              <h2>{country}</h2>
              <img alt="place_image" className="place__image" src={imgUrl} />
              <h2>{"⭐".repeat(rating) + "★".repeat(10 - rating)}</h2>
              {this.props.showAddToFavButton === false ? null : (
                <img
                  onClick={() => this.addToFavorites(element)}
                  className="place__heart"
                  alt="like_button"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default PlacesView;
