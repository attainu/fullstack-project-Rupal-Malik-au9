import React, { PureComponent } from 'react'
import "./categories.css";
import { Card, Button, Row, Col } from 'reactstrap';
export default class Categories_section extends PureComponent {
    render() {
        return (
            <div style={{ "marginTop": "2rem" }}>
                <h6>Everyone has a story to tell. Share your most amazing stories and be a part of Live Twice.</h6>
                <h5>Some of the most popular and amazing stories.</h5>

                <Row style={{ "marginLeft": "4rem", "marginRight": "4rem" }}>
                    <Col sm="4" >
                        <Card body className="image-banner1">

                            <Button>Travel</Button>
                        </Card>
                    </Col>
                    <Col sm="4" >
                        <Card body className="image-banner2">

                            <Button>Food</Button>
                        </Card>
                    </Col>
                    <Col sm="4" >
                        <Card body className="image-banner3">

                            <Button>Meditation</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
