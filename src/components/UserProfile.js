import React, { Component } from 'react';
import axios from 'axios';
import DogForm from './DogForm';
import DogProfile from './DogProfile';

class UserProfile extends Component {
    
    constructor(props) {
        super(props)
        this.apiPost = this.apiPost.bind(this);
        this.addDogClick = this.addDogClick.bind(this);
        this.setProfile = this.setProfile.bind(this);
        this.checkForUser = this.checkForUser.bind(this);
        this.viewDogClick = this.viewDogClick.bind(this);
        this.state = {
            profile : {},
            dogs: [],
            editing: false,
            addDog: false,
            viewDog: false,
            headers: {},
            currentProfile: {
                id: null,
                userId: '',
                neighborhood: '',
                displayName: ''

            },
            currentDog: {
                id: null,
                userId: null,
                name: '',
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
            // currentDog: {
            //     id: 1,
            //     name: 'Betsy',
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
        }
    }

    componentDidMount = async () => {
        const { getProfile, getAccessToken} = this.props.auth;
        //const id = this.state.currentProfile.id
        const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
        // await this.setProfile();
        //add heroku url to the axios.get
        const user = await axios.get(`https://bkbarkapp.herokuapp.com/api/petApp/users`, { headers });
        const json = await user.data;
        //console.log(json.users)
        const profile = getProfile();
        const accessToken = getAccessToken();
        //console.log('accessToken', accessToken)
        //console.log(user)
        
        //console.log(this.checkForUser(json.users, profile.sub))
        if(this.checkForUser(json.users, profile.sub)) {
            this.setState({profile: this.checkForUser(json.users, profile.sub)})
            // console.log(this.state.profile, 'line 45')
            const userId = this.state.profile.id
            const dogs = await axios.get(`https://bkbarkapp.herokuapp.com/api/petApp/users/${userId}`, { headers })
            this.setState({dogs: dogs.data, headers: headers})
           console.log(this.state.dogs)
        } else {
            this.apiPost(profile, accessToken, headers)
            // this.setState({profile: })
        }
        console.log(this.state.headers);
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
        axios.post('https://bkbarkapp.herokuapp.com/api/petApp/users', { profile, accessToken, headers })
        .then(result => console.log(result))
        .catch(err => console.error(err));
    }

    addDogClick(e) {
        e.preventDefault();
        this.state.addDog ? this.setState({addDog: false}) : this.setState({addDog: true});
    } 

    viewDogClick(e) {
        e.preventDefault();
        this.state.viewDog ? this.setState({viewDog: false}) : this.setState({viewDog: true});
    }

    apiPatchUser(id) {

    }

    apiPatchDog(id) {

    }

    updateDogs = dogs => {
        this.setState({
            dogs: dogs,
            editing: false,
            addDog: false,
            viewDog: true,
            currentDog: {
                id: null,
                userId: null,
                name: '',
                medication: '', 
                specialNeeds: '',
                walkRequirements: '',
                birthday: '',
                temperament: '',
                allergies: '',
                loudNoises: '',
                treats: null,
                other: '',
                feeding: '',
                imgUrl: ''   
            }
      })
    }

    updateDog = (attribute, newValue) => {
        this.setState({currentDog: {
            ...this.state.currentDog, 
            [attribute]: newValue
            }
        })
    }
    
    render() {        
        const { profile } = this.state;
        let profileComponent = ""
        if(this.state.addDog){
            profileComponent = <DogForm currentDog={this.state.currentDog} headers={this.state.headers}/>
        } else if (this.state.viewDog) {
            profileComponent = <DogProfile 
            profile={this.state.profile}
            currentDog={this.state.currentDog} 
            />
        }
        return (
            <div className="container">
                This is your profile, {profile.given_name}. Jump back to <a href='/'>Home</a> or <button onClick={this.props.auth.logout}>Logout</button>    
                <h3>{profile.name}</h3>
                <button>Edit Profile</button>
                <button onClick={this.addDogClick}>Add Dog</button>
                <button onClick={this.viewDogClick}>View Dog/s</button>
                {profileComponent}
            </div>
        )
    }

}


//<pre>{JSON.stringify(profile, null, 2)}</pre> to view what the profile is returning from the setState

export default UserProfile;