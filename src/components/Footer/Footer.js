import React from "react";
import "./Footer.css";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span className="backToTop">Back to top</span>
        <div className="houseLinks">
          <ul>
            <h3>Shop</h3>
            <li>
              <a href="#">What's New</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Cardigans</a>
            </li>
            <li>
              <a href="#">Dresses</a>
            </li>
            <li>
              <a href="#">Tops</a>
            </li>
            <li>
              <a href="#">Nursing</a>
            </li>
            <li>
              <a href="#">Bottoms</a>
            </li>
          </ul>
          <ul>
            <h3>Get to know us</h3>
            <li>
              <a href="#">About Business</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Gift Card</a>
            </li>
          </ul>
          <SocialMediaLinks />
        </div>
      </React.Fragment>
    );
  }
}
