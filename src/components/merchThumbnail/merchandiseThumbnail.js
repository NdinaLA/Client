import React from "react";
import "./Merch.css";

class MerchThumbnail extends React.Component {
  render() {
    // Destructure and pull the variables from database
    const { img: imageURL, company, description, price } = this.props.dataMap;
    return (
      <div className="divAlign">
        <img className="imageWidth" src={imageURL} alt="" />
        <h3>{company}</h3>
        {description}
        <div className="blockDisplay">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <h4>{price}</h4>
      </div>
    );
  }
}

export default MerchThumbnail;
