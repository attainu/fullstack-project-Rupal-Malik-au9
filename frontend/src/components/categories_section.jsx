import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./categories.css";
import { Card, Row, Col } from "reactstrap";
export default class CategoriesSection extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <h6>
          Everyone has a story to tell. Share your most amazing stories and be a
          part of Live Twice.
        </h6>
        <h5>Some of the most popular and amazing stories.</h5>

        <Row
          style={{ marginLeft: "4rem", marginRight: "4rem", marginTop: "2rem" }}
        >
          <Col sm="4">
            <Card
              body
              className="image-banner1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/travel">
                {" "}
                <button type="button" class="btn btn-light">
                  Travel
                </button>
              </Link>
            </Card>
          </Col>
          <Col sm="4">
            <Card
              body
              className="image-banner2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/food">
                <button type="button" class="btn btn-light">
                  Food
                </button>
              </Link>
            </Card>
          </Col>
          <Col sm="4">
            <Card
              body
              className="image-banner3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/sports">
                <button type="button" class="btn btn-light">
                  Sports
                </button>
              </Link>
            </Card>
          </Col>
        </Row>
        <div
          class="card mt-3"
          style={{ background: "rgb(242, 242, 242)", border: "none" }}
        >
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                SOME MEMORIES
                <strong>
                  {" "}
                  Captured in
                  <br /> time.
                </strong>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}
