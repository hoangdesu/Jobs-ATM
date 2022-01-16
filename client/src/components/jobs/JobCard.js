import React from 'react';
import { Card, Button } from 'react-bootstrap';

const JobCard = (props) => {
    const { thumbnail, title, description } = props.details;

    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={thumbnail} style={{ height: "180px" }}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
    );
};

export default JobCard;
