import React from "react";

class AddPlace extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input placeholder="Place" />
        <input placeholder="Country" />
        <input placeholder="Rating" />
        <input placeholder="Image URL" />
        <button>Add</button>
      </div>
    );
  }
}

export default AddPlace;
