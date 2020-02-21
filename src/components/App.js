// Libraries
import React from "react";
import MerchThumbnail from "./merchThumbnail/merchandiseThumbnail";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div>hello</div>
        <MerchThumbnail />
      </React.Fragment>
    );
  }
}

export default App;
