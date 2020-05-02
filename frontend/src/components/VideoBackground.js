import React, { Component } from "react";

import Video from "../assets/video/KO_Background.mp4";

class VideoBackground extends Component {
  render() {
    const style = {
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      zIndex: "-50",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      opacity: "0.1",
      position: "fixed",
      // position: "absolute",
    };

    return (
      <div>
        <video autoPlay loop muted style={style}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoBackground;
