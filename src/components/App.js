// Libraries
import React from "react";

// Componenets
import MerchThumbnail from "./merchThumbnail/merchandiseThumbnail";
import Header from "./header/header.component"

import axios from "axios";

const testingGridStyle = {
  display: "grid",
  border: "2px dashed rgba(114, 186, 94, 0.35)",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",
  justifyItems: "center"
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async grabJsonData() {
    console.log("user data mounted");
    const { data } = await axios.get("http://localhost:5005/data/all");
    this.setState({
      data: data
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
          {this.state.data.map(info => (
            <MerchThumbnail key={info.id} dataMap={info} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
