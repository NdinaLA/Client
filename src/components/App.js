// Libraries
import React from "react";
import MerchThumbnail from "./merchThumbnail/merchandiseThumbnail";

const testingGridStyle = {
  display: "grid",
  border: "2px dashed rgba(114, 186, 94, 0.35)",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",
  justifyItems: "center"
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div style={testingGridStyle}>
          <MerchThumbnail />
          <MerchThumbnail />
          <MerchThumbnail />
          <MerchThumbnail />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
