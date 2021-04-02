import React, { PureComponent } from "react";
import image from "./assets/image.png";
export default class Header extends PureComponent {
  render() {
    return (
      <div>
        <img src={image} alt="logo" style={{ width: "100%", height: "auto" }} />
      </div>
    );
  }
}
