import React from "react";
import "../styles/PlacesView.css";

class PlacesView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.places.map(element => {
          return (
            <div>
              <h1>{element.place}</h1>
              <h2>{element.country}</h2>
              <img className="place__image" src={element.imgUrl} />
              <h2>{element.rating}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PlacesView;
