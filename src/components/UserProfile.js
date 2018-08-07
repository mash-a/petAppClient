import React, { Component } from 'react';
import axios from 'axios';
import DogForm from './DogForm';
import DogProfile from './DogProfile';
import { Button } from 'reactstrap';
import UserForm from './UserForm';
import './ComponentCSS/UserProfile.css'

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
            userForm: false,
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
            const arrOfDogs = dogs.data.dogs;
            this.setState({dogs: arrOfDogs, headers: headers})
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
        axios.post('/api/petApp/users', { profile, accessToken, headers })
        .then(result => console.log(result))
        .catch(err => console.error(err));
    }

    addDogClick(e) {
        e.preventDefault();
        this.state.addDog ? this.setState({addDog: false}) : this.setState({addDog: true});
    } 

    viewDogClick(e) {
        e.preventDefault();
        this.state.viewDog ? this.setState({viewDog: false}) : this.setState({viewDog: true, addDog:false});
    }

    apiPatchUser(id) {

    }

    apiPatchDog(id) {

    }

    viewUserForm = (e) => {
        e.preventDefault();
        this.state.viewUserForm ? this.setState({viewUserForm: false}) : this.setState({viewDog: false, addDog: false, viewUserForm: true})
    }

    updateDogs = dogs => {
        this.setState({
            dogs: dogs,
            editing: false,
            addDog: false,
            viewDog: true,
            currentDog: {
                id: null,
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
      })
    }

    updateDog = (attribute, newValue) => {
        this.setState({currentDog: {
            ...this.state.currentDog, 
            [attribute]: newValue
            }
        })
    }

    updateUser = (att, newVal) => {
        this.setState({currentProfile: {
            ...this.state.currentProfile,
            [att]: newVal
            }
        })
    }

    updateUsers = user => {
        this.setState({
            profile: user,
            editing: false,
            currentProfile: {
                id: null,
                userId: '',
                neighborhood: '',
                displayName: ''  
            }
      })
    }
   
    render() {        
        const { profile, dogs } = this.state;
        let profileComponent = ""
        if(this.state.addDog){
            profileComponent = <DogForm 
                currentDog={this.state.currentDog} 
                headers={this.state.headers}
                updateDog={this.updateDog}
                updateDogs={this.updateDogs}
                profile={this.state.profile}
            />
        } else if (this.state.viewDog) {
            profileComponent = <DogProfile 
                profile={this.state.profile}
                currentDog={this.state.currentDog} 
            />
        } else if (this.state.viewUserForm) {
            profileComponent = <UserForm 
                profile={this.state.profile}
                updateUser={this.updateUser}
                />
        }
        return (
            <div className="container user">
                This is your profile, {profile.display_name}. <Button onClick={this.props.auth.logout}>Logout</Button>    
                <h3>{profile.neighborhood}</h3>
                <Button>Edit Profile</Button>
                <Button onClick={this.addDogClick}>Add Dog</Button>
                {
                    dogs.map(dog => (<DogProfile key={dog.id} dog={dog} />))
                }
                {profileComponent}
            </div>
        )
    }

}

export default UserProfile;