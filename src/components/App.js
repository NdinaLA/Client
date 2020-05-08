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
import { increment } from '../actions';

connect((store) => {
  return {
    counter: store.counter,
  };
});
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
    // this.props.useDispatch(increment);
  }

  render() {
    // Grab counter from redux state
    // const counter = useSelector(state => state.isLogged);
    return (
      <React.Fragment>
        {/* <h1>{this.counter}</h1>
        <button onClick={this.dispatch}>+</button>
        <button>-</button> */}
        <Header />

        <div style={testingGridStyle}>
          {this.state.data.map((info) => (
            <MerchThumbnail key={info.id} dataMap={info} />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
