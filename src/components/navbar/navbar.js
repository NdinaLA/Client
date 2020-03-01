import React from "react";

import "./navbar.styles.css";

class Navbar extends React.Component {
  render() {
    return (
        <div>
            <div className= "navbar">
                <a className= "navLink" href= "#">Dresses</a>
                <a className= "navLink" href= "#">Tops</a>
                <a className= "navLink" href= "#">Nursing</a>
                <a className= "navLink" href= "#">Bottoms</a>
                <a className= "navLink" href= "#">Cardigan</a>
            </div>
      </div>
    );
  }
}

export default Navbar;
