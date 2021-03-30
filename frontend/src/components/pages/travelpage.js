import React, { PureComponent } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Travel from "../../Travel";
export default class Travelpage extends PureComponent {
  render() {
    return (
      <div>
        <h2>Travelpage</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Travel />
        </div>
        <Footer />
      </div>
    );
  }
}
