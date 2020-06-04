import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart.svg';

import LoginModal from '../LoginModal/LoginModal';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalDisplay';
import { signOutUser } from '../../actions/isLogged';
import { toggleSearchbar } from '../../actions/search';

const NavbarUserUtils = ({
  toggleModal,
  authorized,
  signOutUser,
  toggleSearchbar,
  displaySearchbar,
}) => {
  return (
    <div className="navbar-user-utils">
      <LoginModal />
      {displaySearchbar ? (
        <>
          <form className="searchForm">
            <div className="selectContainer">
              <select className="searchSelector">
                <option value="All">All</option>
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
              </select>
            </div>
            <input className="searchInput" />
          </form>
          <div className="graySearch">
            <img
              className="navbar-user-utils-icon searchIcon"
              src={searchIcon}
              alt="search icon"
              onClick={toggleSearchbar}
            />
          </div>
        </>
      ) : (
        <img
          className="navbar-user-utils-icon"
          src={searchIcon}
          alt="search icon"
          onClick={toggleSearchbar}
        />
      )}

      {authorized === false ? (
        <p className="navbar-user-utils-icon" onClick={toggleModal}>
          Log In
        </p>
      ) : (
        <p className="navbar-user-utils-icon" onClick={signOutUser}>
          Log out
        </p>
      )}
      <img className="navbar-user-utils-icon" src={cartIcon} alt="cart icon " />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authorized: state.isLogged.authorized,
    displaySearchbar: state.searchProducts.displaySearchbar,
  };
};

export default connect(mapStateToProps, {
  toggleModal,
  signOutUser,
  toggleSearchbar,
})(NavbarUserUtils);
