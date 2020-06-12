// Libraries
import React from 'react';
import axios from 'axios';

// Componenets
import MerchThumbnail from './merchThumbnail/merchandiseThumbnail';
import Header from './header/header.component';
import Footer from './Footer/Footer';

import './App.css';

// Accessing Redux Store
import { useSelector, useDispatch, connect } from 'react-redux';
import setAuthToken from '../utils/setAuthToken';
import { increment } from '../actions';
import { loadUser } from '../actions/isLogged';

//for JWT
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// connect((store) => {
//   return {
//     counter: store.counter,

//   };
// });

const testingGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'auto',
  justifyItems: 'center',
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async grabJsonData() {
    console.log('user data mounted');
    const { data } = await axios.get('http://localhost:5005/data/all');
    this.setState({
      data: data,
    });
  }

  // Accessing redux store
  //!   counter = () => useSelector(state => state.counter);
  //!   dispatch = () => useDispatch(increment);

  componentDidMount() {
    this.grabJsonData();
    this.props.loadUser();
    // this.props.useDispatch(increment);
  }

  render() {
    // Grab counter from redux state
    // const counter = useSelector(state => state.isLogged);
    const { isSearching, searchResults } = this.props;
    return (
      <React.Fragment>
        {/* <h1>{this.counter}</h1>
        <button onClick={this.dispatch}>+</button>
        <button>-</button> */}
        <Header />

        <div style={testingGridStyle}>
          {isSearching && searchResults.length === 0 && <p>No matches!</p>}

          {isSearching
            ? searchResults.map((info) => (
                <MerchThumbnail key={info.id} dataMap={info} />
              ))
            : this.state.data.map((info) => (
                <MerchThumbnail key={info.id} dataMap={info} />
              ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isSearching: state.searchProducts.isSearching,
  searchResults: state.searchProducts.searchResults,
});

const mapDispatchToProps = {
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
