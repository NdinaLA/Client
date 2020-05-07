// Libraries
import React from 'react';

// Componenets
import MerchThumbnail from './merchThumbnail/merchandiseThumbnail';
import Header from './header/header.component';

import axios from 'axios';
import Footer from './Footer/Footer';
import LoginModal from './Modal/Modal';

<<<<<<< HEAD
import './App.css';

// Accessing Redux Store
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment } from '../actions';

connect(store => {
  return {
    counter: store.counter
  };
});
=======
const testingGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'auto',
  justifyItems: 'center',
};
>>>>>>> 75a3ef97d097a937f992f246e395fd6c06a09bec
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
    this.props.useDispatch(increment);
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
<<<<<<< HEAD
        <div className="testingGridStyle">
          {this.state.data.map(info => (
=======
        <LoginModal />
        <div style={testingGridStyle}>
          {this.state.data.map((info) => (
>>>>>>> 75a3ef97d097a937f992f246e395fd6c06a09bec
            <MerchThumbnail key={info.id} dataMap={info} />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
