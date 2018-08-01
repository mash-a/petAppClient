import React, { Component } from 'react';
import axios from 'axios';
import DogForm from './DogForm';
import DogProfile from './DogProfile';
// import CatsAndOtherPetForm from './CatAndOtherPetForm';

class UserProfile extends Component {
    
    constructor(props) {
        super(props)
        this.apiPost = this.apiPost.bind(this);
        this.onDogClick = this.onDogClick.bind(this);
        //this.onCatClick = this.onCatClick.bind(this);
        this.setProfile = this.setProfile.bind(this);
        this.checkForUser = this.checkForUser.bind(this);
        this.state = {
            profile : {},
            dogs: [],
            catsOrOtherPets: [],
            addDog: false,
            currentProfile: {
                id: null,
                access_token: '',

            },
            // currentDog: {
            //     id: null,
            //     name: '',
            //     medication: '', 
            //     specialNeeds: '',
            //     walkRequirements: '',
            //     birthday: '',
            //     temperament: '',
            //     allergies: '',
            //     loudNoises: '',
            //     treats: true,
            //     other: '',
            //     feeding: '',
            //     imgUrl: ''
            // }
            currentDog: {
                id: 1,
                name: 'Betsy',
                medication: '', 
                specialNeeds: '',
                walkRequirements: '',
                birthday: '',
                temperament: '',
                allergies: '',
                loudNoises: '',
                treats: true,
                other: '',
                feeding: '',
                imgUrl: ''
            }
        }
    }

    componentDidMount = async () => {
        const { getProfile, getAccessToken} = this.props.auth;
        //const id = this.state.currentProfile.id
        const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
        // await this.setProfile();
        const user = await axios.get(`/api/petApp/users`, { headers });
        const json = await user.data;
        //console.log(json.users)
        const profile = getProfile();
        const accessToken = getAccessToken();
        //console.log('accessToken', accessToken)
        //console.log(user)
        
        //console.log(this.checkForUser(json.users, profile.sub))
        if(this.checkForUser(json.users, profile.sub)) {
            this.setState({profile: this.checkForUser(json.users, profile.sub)})
            console.log(this.state.profile, 'line 45')
            const userId = this.state.profile.id
            const dogs = await axios.get(`/api/petApp/users/${userId}`, { headers })
            this.setState({dogs: dogs.data})
           console.log(this.state.dogs)
        } else {
            this.apiPost(profile, accessToken, headers)
            // this.setState({profile: })
        }
        console.log(this.state.profile.id);
    }

    //check if user exists in database
    checkForUser(arrOfUsers, userId) {
        const user = arrOfUsers.filter(user => user.user_id === userId)[0]
        if(user){
            return user;
        }
        return false;
    }

    setProfile() {
        const { getUserProfile } = this.props.auth;
        getUserProfile((err, profile) => {
            this.setState({profile})
        })
    }

    apiPost(profile, accessToken, headers) {
        axios.post('/api/petApp/users', { profile, accessToken, headers })
        .then(result => console.log(result))
        .catch(err => console.error(err));
    }

    onDogClick(e) {
        e.preventDefault();
        this.setState({addDog: true});
    } 

    apiPatch(id) {

    }
    
    render() {        
        const { profile } = this.state;
        console.log(profile)
        return (
            <div className="container">
                This is your profile, {profile.given_name}. Jump back to <a href='/'>Home</a> or Ping<a href='/ping'>Click Here</a>
                <br />
                
                <h3>{profile.name}</h3>
                <button>Edit Profile</button>
                <button>Add Dog</button>
                {
                    this.state.addDog && 
                    <DogForm/>
                }
                <DogForm currentDog={this.state.currentDog}/>
                <DogProfile 
                    profile={this.state.profile}
                    currentDog={this.state.currentDog}
                    // auth={this.props.auth}    
                />
                <button onClick={this.props.auth.logout}>Logout</button>    
                <br />
                
            </div>
        )
    }

}


//<pre>{JSON.stringify(profile, null, 2)}</pre> to view what the profile is returning from the setState

export default UserProfile;