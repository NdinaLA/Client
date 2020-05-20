import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart.svg';

import LoginModal from '../LoginModal/LoginModal';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalDisplay';
import { signOutUser } from '../../actions/isLogged';

const NavbarUserUtils = ({ toggleModal, isLogged, signOutUser }) => {
  return (
    <div className="navbar-user-utils">
      <LoginModal />
      <img
        className="navbar-user-utils-icon"
        src={searchIcon}
        alt="search icon"
      />
      {isLogged === false ? (
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
    isLogged: state.isLogged.isLogged,
  };
};

// const mapDispatchToProps = {
//   showModal,
// };

export default connect(mapStateToProps, { toggleModal, signOutUser })(
  NavbarUserUtils
);
