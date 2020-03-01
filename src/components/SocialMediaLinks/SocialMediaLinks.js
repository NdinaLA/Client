import "./SocialMediaLinks.css";
import React from "react";

export default class SocialmediaLinks extends React.Component {
  render() {
    return (
      <div className="socialMediaImgHolder">
        <img
          src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png"
          alt=""
        />
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/instagram-transparent-logo-png-1.png"
          alt=""
        />
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/logo-twitter-png-black-3.png"
          alt=""
        />
        <img
          src="https://i.ya-webdesign.com/images/youtube-logo-black-png-2.png"
          alt=""
        />
        <img
          src="https://i.ya-webdesign.com/images/pinterest-logo-png-black-8.png"
          alt=""
        />
      </div>
    );
  }
}
