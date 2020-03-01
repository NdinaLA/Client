import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="backToTop">Back to top</div> */}
        <div className="houseLinks">
          <ul>
            <h3>Shop</h3>
            <li>What's New</li>
            <li>Featured</li>
            <li>Cardigans</li>
            <li>Dresses</li>
            <li>Tops</li>
            <li>Nursing</li>
            <li>Bottoms</li>
          </ul>
          <ul>
            <h3>Get to know us</h3>
            <li>About Business</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>My Account</li>
            <li>Contact</li>
            <li>Gift Card</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
