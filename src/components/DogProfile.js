import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import './ComponentCSS/DogProfile.css';

class DogProfile extends Component {
    // userId = this.props.profile.id;
    render() {
        const { dog } = this.props;
        return (
            <div>
                <Card>
                    {dog.url && <CardImg src={dog.url} />}
                    <CardBody>
                        <CardTitle>{dog.name}</CardTitle>
                        <CardSubtitle><a 
                        href='https://dashboard.petchecktechnology.com/' 
                        target='_blank'
                        rel="noopener noreferrer"
                        >Book Care</a></CardSubtitle>
                        <CardText>Walks: {dog.walk_requirements}</CardText>
                        <i className="fas fa-pencil-alt"></i>
                        <i className="fas fa-trash-alt"></i>
                        <i className="fas fa-eye"></i>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default DogProfile;