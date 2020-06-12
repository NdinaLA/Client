import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import cartIcon from '../../assets/cart.svg';

//components
import LoginModal from '../LoginModal/LoginModal';
import SearchBar from '../SearchBar/searchBar.component';

//redux
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalDisplay';
import { signOutUser } from '../../actions/isLogged';

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
    const { toggleSearchbar } = this.props;
    this.onSubmit(event);
    toggleSearchbar();
  };

  render() {
    const { toggleModal, authorized, signOutUser } = this.props;

    return (
      <div className="navbar-user-utils">
        <LoginModal />
        <SearchBar />

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
  };
};

export default connect(mapStateToProps, {
  toggleModal,
  signOutUser,
})(NavbarUserUtils);
