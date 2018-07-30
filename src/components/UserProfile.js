import React, { Component } from 'react';
import axios from 'axios';
import DogForm from './DogForm';
import CatsAndOtherPetForm from './CatAndOtherPetForm';

class UserProfile extends Component {
    
    constructor(props) {
        super(props)
        this.apiPost = this.apiPost.bind(this);
        this.onDogClick = this.onDogClick.bind(this);
        this.onCatClick = this.onCatClick.bind(this);
        this.setProfile = this.setProfile.bind(this);
        this.state = {
            profile : {},
            dogs: [],
            catsOrOtherPets: [],
            addCatOrPet: false,
            addDog: false,
            currentProfile: {
                id: 0,
            }
        }
    }

    componentDidMount = async () => {
        const { getProfile, getAccessToken} = this.props.auth;
        const id = this.state.currentProfile.id
        await this.setProfile();
        const user = await axios.get(`/users/${id}`);
        const profile = getProfile();
        const accessToken = getAccessToken();
        console.log('accessToken', accessToken)
        console.log(user)
        this.apiPost(profile, accessToken)
        console.log(profile)
    }

    setProfile() {
        const { getUserProfile } = this.props.auth;
        getUserProfile((err, profile) => {
            this.setState({profile})
        })
    }

    apiPost(profile, accessToken) {
        axios.post('/users', { profile, accessToken })
        .then(result => console.log(result))
        .catch(err => console.error(err));
    }

    onDogClick(e) {
        e.preventDefault();
        this.setState({addDog: true});
    } 

    onCatClick(e) {
        e.preventDefault();
        this.setState({addCatOrPet: true});
    }

    apiPatch(id) {

    }
    
    render() {        
        const { profile } = this.state;
        return (
            <div>
                This is your profile, {profile.given_name}. Jump back to <a href='/'>Home</a> or Ping<a href='/ping'>Click Here</a>
                <br />
                
                <h3>{profile.name}</h3>
                
                <button>Edit Profile</button>
                <button>Add Cat</button>
                <button>Add Dog</button>
                {
                    this.state.addDog && 
                    <DogForm />
                }
                {
                    this.state.addCatOrPet && 
                    <CatsAndOtherPetForm />
                }
                
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