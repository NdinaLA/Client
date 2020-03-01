import React from "react";

//components
import Navbar from "../navbar/navbar";
import NavbarUserUtils from "../NavbarUserUtils/navbarUserUtils.component"

import "./header.styles.css";

const Header = () => (
    <div className= "header">
        <NavbarUserUtils />
        <Navbar />
    </div>
)

export default Header;