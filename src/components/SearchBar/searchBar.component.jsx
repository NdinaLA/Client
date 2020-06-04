import React from 'react';

import './searchBar.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';

import { connect } from 'react-redux';
import {
  toggleSearchbar,
  searchProducts,
  searchStateToggle,
} from '../../actions/search';

class SearchBar extends React.Component {
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
    const { toggleSearchbar, displaySearchbar } = this.props;

    return (
      <div className="navbar-user-utils">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displaySearchbar: state.searchProducts.displaySearchbar,
  };
};

export default connect(mapStateToProps, {
  toggleSearchbar,
  searchProducts,
  searchStateToggle,
})(SearchBar);
