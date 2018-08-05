import React, { Component } from 'react';
import { Button } from 'reactstrap';

class DogProfile extends Component {
    // userId = this.props.profile.id;
    render() {
        const { currentDog } = this.props;
        return (
            <div>
            <a 
                href='https://dashboard.petchecktechnology.com/' 
                target='_blank'
                rel="noopener noreferrer"
            >Book Care</a>
            <p>{currentDog.birthday}</p>
            <Button>Edit profile</Button>
            
            </div>
        )
    }
}

export default DogProfile;