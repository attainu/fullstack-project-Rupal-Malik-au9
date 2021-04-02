import React, { useContext } from "react";
import footer from "./assets/aboutus.webp";
import { UserContext } from "../App";

import { Link } from "react-router-dom";
import image1 from "./assets/Footer_01.jpg";
import image2 from "./assets/Footer_02.jpg";
import image3 from "./assets/Footer_03.jpg";
import image4 from "./assets/Footer_04.jpg";
import image5 from "./assets/footer_05.jpg";
export default function Footer() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      <div
        class="card mt-3"
        style={{
          background: "rgb(37, 115, 218)",
          border: "none",
          color: "white",
        }}
      >
        <div class="card-body">
          Share your experience on &emsp;
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"
            style={{ width: "28px" }}
            alt="social_icons"
          />{" "}
          Facebook &emsp;{" "}
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-128.png"
            style={{ width: "28px" }}
            alt="social_icons"
          />{" "}
          Twitter &emsp;
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-128.png"
            style={{ width: "28px" }}
            alt="social_icons"
          />{" "}
          Pinterest &emsp;
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png"
            style={{ width: "28px" }}
            alt="social_icons"
          />{" "}
          Instagram
        </div>
      </div>
      <div class="row" style={{ display: "flex" }}>
        <div class="column" style={{ flex: "20%", padding: "5px" }}>
          <img
            src={image1}
            alt="Snow"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div class="column" style={{ flex: "20%", padding: "5px" }}>
          <img
            src={image2}
            alt="Forest"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div class="column" style={{ flex: "20%", padding: "5px" }}>
          <img
            src={image3}
            alt="Mountains"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div class="column" style={{ flex: "20%", padding: "5px" }}>
          <img
            src={image4}
            alt="Mountains"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div class="column" style={{ flex: "20%", padding: "5px" }}>
          <img
            src={image5}
            alt="Mountains"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
      </div>

      {/* <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
      >
        <img src={image1} alt="footer_image" />

        <img src={image2} alt="footer_image" style={{ flexGrow: "1" }} />

        <img src={image3} alt="footer_image" style={{ flexGrow: "1" }} />

        <img src={image4} alt="footer_image" style={{ flexGrow: "1" }} />

        <img src={image5} alt="footer_image" style={{ flexGrow: "1" }} />
      </div> */}
      <div
        style={{
          background: "#696969",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{ marginTop: "2rem", display: "flex", flexDirection: "row" }}
        >
          <div
            class="card mb-3"
            style={{
              "max-width": "540px",
              background: "#696969",
              color: "white",
              border: "none",
            }}
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={footer} alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">About Us</h5>
                  <p class="card-text">
                    <p>
                      “You only live twice:
                      <br />
                      Once when you are born
                      <br />
                      And once when you look death in the face”.
                    </p>
                  </p>
                  <p class="card-text">
                    <a href="/about">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footertext"
            style={{ color: "white", width: "18rem", marginLeft: "15px" }}
          >
            Join our Mailing List
            <form
              className="form-inline"
              onSubmit={() => {
                alert("email is successfully registered");
              }}
            >
              <div className="form-group mb-2">
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  required
                  className="form-control mb-2"
                  id="staticEmail2"
                  placeholder="email@example.com"
                />
                <input
                  type="submit"
                  className="btn btn-primary mb-2"
                  value="Subscribe Newsletter"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
