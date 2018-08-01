import React, { Component } from 'react';
import axios from 'axios';

class DogProfile extends Component {

    constructor(props) {
        super(props)
    }
    // userId = this.props.profile.id;
    render() {
        const { currentDog } = this.props;
        return (
            <div>
            {
                //console.log(this.props.profile.id)
            }
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