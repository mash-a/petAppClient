import React, { Component } from 'react';
import axios from 'axios';
import DogForm from './DogForm';
import CatsAndOtherPetForm from './CatAndOtherPetForm';

class UserProfile extends Component {
    
    constructor(props) {
        super(props)
        this.apiPost = this.apiPost.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {profile : {}}
    }

    componentDidMount = async () => {
        const {getUserProfile, getProfile, getAccessToken} = this.props.auth;
        await this.setProfile();
    }

    setProfile() {
        const { getUserProfile } = this.props.auth;
        getUserProfile((err, profile) => {
                    this.setState({profile})
                    console.log(profile)
        })
    }

    apiPost(profile, accessToken) {
        axios.post('/users', { profile, accessToken })
        .then(result => console.log(result))
        .catch(err => console.error(err));
    }

    onClick() {

    } 
    
    render() {        
        const { profile } = this.state;
        console.log(profile)
        return (
            <div>
                This is a your profile, {profile.given_name}. Jump back to <a href='/'>Home</a> or Ping<a href='/ping'>Click Here</a>
                <br />
                
                <h3>{profile.name}</h3>
                
                <button>Add Pet</button>
                <DogForm />
                <CatsAndOtherPetForm />
                <button onClick={this.props.auth.logout}>Logout</button>    
                <a 
                    href='https://dashboard.petchecktechnology.com/' 
                    target='_blank'
                    rel="noopener noreferrer"
                    >Book Care for your Pet</a>
            </div>
        )
    }

}


//<pre>{JSON.stringify(profile, null, 2)}</pre> to view what the profile is returning from the setState

export default UserProfile;