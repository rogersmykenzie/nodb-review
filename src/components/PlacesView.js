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
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        {this.props.places.map(element => {
          return (
            <div>
              <h1>{element.place}</h1>
              <h2>{element.country}</h2>
              <img
                alt="place_image"
                className="place__image"
                src={element.imgUrl}
              />
              <h2>{element.rating}</h2>
              <img
                onClick={() => this.addToFavorites(element)}
                className="place__heart"
                alt="like_button"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PlacesView;
