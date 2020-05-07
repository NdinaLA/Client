import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart.svg';

import LoginModal from '../LoginModal/LoginModal';

class NavbarUserUtils extends React.Component {
  state = { show: false };

  modalDisplay = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className="navbar-user-utils">
        <LoginModal isOpen={this.state.show} />
        <img
          className="navbar-user-utils-icon"
          src={searchIcon}
          alt="search icon"
        />
        <p className="navbar-user-utils-icon" onClick={this.modalDisplay}>
          Log In
        </p>
        <img
          className="navbar-user-utils-icon"
          src={cartIcon}
          alt="cart icon "
        />
      </div>
    );
  }
}

export default NavbarUserUtils;
