import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./categories.css";

export default class CategoriesSection extends PureComponent {
  render() {
    return (
      //   <div style={{ marginTop: "2rem" }}>
      //     <h6>
      //       Everyone has a story to tell. Share your most amazing stories and be a
      //       part of Live Twice.
      //     </h6>
      //     <h5>Some of the most popular and amazing stories.</h5>

      //     <Row
      //       style={{ marginLeft: "4rem", marginRight: "4rem", marginTop: "2rem" }}
      //     >
      //       <Col sm="4">
      //         <Card
      //           body
      //           className="image-banner1"
      //           style={{
      //             display: "flex",
      //             alignItems: "center",
      //             justifyContent: "center",
      //           }}
      //         >
      //           <a href="/travel">
      //             {" "}
      //             <button type="button" class="btn btn-light">
      //               Travel
      //             </button>
      //           </a>
      //         </Card>
      //       </Col>
      //       <Col sm="4">
      //         <Card
      //           body
      //           className="image-banner2"
      //           style={{
      //             display: "flex",
      //             alignItems: "center",
      //             justifyContent: "center",
      //           }}
      //         >
      //           <a href="/food">
      //             <button type="button" class="btn btn-light">
      //               Food
      //             </button>
      //           </a>
      //         </Card>
      //       </Col>
      //       <Col sm="4">
      //         <Card
      //           body
      //           className="image-banner3"
      //           style={{
      //             display: "flex",
      //             alignItems: "center",
      //             justifyContent: "center",
      //           }}
      //         >
      //           <a href="/sports">
      //             <button type="button" class="btn btn-light">
      //               Sports
      //             </button>
      //           </a>
      //         </Card>
      //       </Col>
      //     </Row>
      //     <div
      //       class="card mt-3"
      //       style={{ background: "rgb(242, 242, 242)", border: "none" }}
      //     >
      //       <div class="card-body">
      //         <blockquote class="blockquote mb-0">
      //           <p>
      //             SOME MEMORIES
      //             <strong>
      //               {" "}
      //               Captured in
      //               <br /> time.
      //             </strong>
      //           </p>
      //         </blockquote>
      //       </div>
      //     </div>
      //     <div
      //       style={{
      //         display: "flex",
      //         flexDirection: "column",
      //         alignItems: "center",
      //         marginTop: "2rem",
      //       }}
      //     >
      //       <div class="card mb-3" style={{ "max-width": "48rem" }}>
      //         <div class="card-body">
      //           <img
      //             src="https://static.wixstatic.com/media/4d2d8fa0c42543a7b9a5ec9416597378.jpg/v1/fill/w_630,h_520,fp_0.50_0.50,q_90/4d2d8fa0c42543a7b9a5ec9416597378.webp"
      //             style={{ width: "44rem" }}
      //             class="card-img-top"
      //             alt="..."
      //           />
      //           <h5 class="card-title">Essential Spa & Body Treatments</h5>
      //           <p class="card-text">
      //             In 2019, my husband and I took a trip to France to attend the
      //             wedding of my former exchange student, Christelle......
      //           </p>
      //           <p class="card-text" style={{ color: "green" }}>
      //             By John walker <i>from San Diego</i>
      //             <br />
      //             <small class="text-muted">Last updated 3 mins ago</small>
      //           </p>
      //         </div>
      //       </div>
      //       <div class="card" style={{ "max-width": "48rem" }}>
      //         <div class="card-body">
      //           <img
      //             src="https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2020/04/Mostar-Bridge-Horizontal.jpg"
      //             style={{ width: "44rem" }}
      //             class="card-img-bottom"
      //             alt="..."
      //           />
      //           <h5 class="card-title">CONFUSION IN SMALL-TOWN FRANCE</h5>
      //           <p class="card-text">
      //             In 2019, my husband and I took a trip to France to attend the
      //             wedding of my former exchange student, Christelle......
      //           </p>
      //           <p class="card-text" style={{ color: "green" }}>
      //             By Harry Thomson <i>from San Diego</i>
      //             <br />
      //             <small class="text-muted">Last updated 3 mins ago</small>
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="category-section main">
        <div class="row">
          <div class="col s12 m3 image-banner1">
            <Link to="/travel" className="waves-effect waves-light btn">
              Travel
            </Link>
          </div>

          <div class="col s12 m3 image-banner2">
            <Link to="/eat" className="waves-effect waves-light btn">
              Eat
            </Link>
          </div>

          <div class="col s12 m3 image-banner3">
            <Link to="sports" className="waves-effect waves-light btn">
              Sports
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
