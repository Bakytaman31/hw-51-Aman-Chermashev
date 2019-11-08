import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Film = (props) => {
    return (
    <Col xs="6" sm="3">
        <div>
            <Card>
                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    </Col>
    );
};

export default Film;