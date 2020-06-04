import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart.svg';

import LoginModal from '../LoginModal/LoginModal';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalDisplay';
import { signOutUser } from '../../actions/isLogged';
import {
  toggleSearchbar,
  searchProducts,
  searchStateToggle,
} from '../../actions/search';

class NavbarUserUtils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { searchInput } = this.state;
    const { searchProducts, searchStateToggle } = this.props;
    searchProducts(searchInput);
    searchStateToggle();
  };

  initSearch = (event) => {
    this.onSubmit(event);
    this.props.toggleSearchbar();
  };

  render() {
    const {
      toggleModal,
      authorized,
      signOutUser,
      toggleSearchbar,
      displaySearchbar,
    } = this.props;

    return (
      <div className="navbar-user-utils">
        <LoginModal />
        {displaySearchbar ? (
          <>
            <form className="searchForm" onSubmit={this.onSubmit}>
              <div className="selectContainer">
                <select className="searchSelector">
                  <option value="All">All</option>
                  <option value="placeholder">placeholder</option>
                  <option value="placeholder">placeholder</option>
                </select>
              </div>
              <input
                className="searchInput"
                name="searchInput"
                value={this.state.searchInput}
                onChange={this.onChange}
              />
              <input type="submit" className="submit" />
            </form>
            <div className="graySearch">
              <img
                className="navbar-user-utils-icon searchIcon"
                src={searchIcon}
                alt="search icon"
                onClick={this.initSearch}
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
        <img
          className="navbar-user-utils-icon"
          src={cartIcon}
          alt="cart icon "
        />
      </div>
    );
  }
}

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
  searchProducts,
  searchStateToggle,
})(NavbarUserUtils);
