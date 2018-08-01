import React, { Component } from 'react';

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
                    >Book Care for {currentDog.name}</a>
            </div>
        )
    }
}

export default DogProfile;