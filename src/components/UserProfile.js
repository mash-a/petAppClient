import React, { Component } from 'react';

class UserProfile extends Component {

    componentWillMount() {
        this.setState({ profile : {} })
        const {userProfile, getUserProfile} = this.props.auth;
        if(!userProfile) {
            getUserProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile : userProfile})
        }
    }

    render() {
        const { profile } = this.state;
        return (
            <div>
                This is a your profile, {profile.given_name}. Jump back to <a href='/'>Home</a> or Ping<a href='/ping'>Click Here</a>
                <br />
                <img src={profile.picture} alt="profile" />
                <h3>{profile.name}</h3>
                
                <button>Add Pet</button>
                
                <button onClick={this.props.auth.logout}>Logout</button>    
            </div>
        )
    }

}


//<pre>{JSON.stringify(profile, null, 2)}</pre> to view what the profile is returning from the setState

export default UserProfile;