// Libraries
import React from 'react';
import axios from 'axios';

// Componenets
import MerchThumbnail from './merchThumbnail/merchandiseThumbnail';
import Header from './header/header.component';
import Footer from './Footer/Footer';

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

  componentDidMount() {
    this.grabJsonData();
  }

  render() {
    return (
      <React.Fragment>
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
