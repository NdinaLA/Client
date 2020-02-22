import React from "react";

// Style Place holder to be moved to its own CSS file
const dot = {
  height: "25px",
  width: "25px",
  backgroundColor: "blue",
  borderRadius: "50%",
  display: "inline-block"
};
const blockDisplay = {
  display: "block"
};
const imageWidth = {
  width: "100px"
};
const divAlign = {
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  backgroundColor: "red",
  width: "150px",
  height: "300px",
  margin: "20px"
};
class MerchThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "Company Name",
      itemDescription: "This describes the item",
      itemPrice: "Price"
    };
  }
  render() {
    // Temporarily set variable names for readability
    const { itemDescription, company, itemPrice } = this.state;
    return (
      <div style={divAlign}>
        <img
          style={imageWidth}
          src="https://ae01.alicdn.com/kf/HTB144qlXe6sK1RjSsrbq6xbDXXaq.jpg"
          alt=""
        />
        <h3>{company}</h3>
        {itemDescription}
        <div style={blockDisplay}>
          <span style={dot}></span>
          <span style={dot}></span>
          <span style={dot}></span>
          <span style={dot}></span>
        </div>
        <h4>{itemPrice}</h4>
      </div>
    );
  }
}

export default MerchThumbnail;
