import React, { Component } from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    CustomInput 
} from 'reactstrap';
import axios from 'axios';

class DogForm extends Component {

    onSubmit = e => {
        e.preventDefault();
        this.apiPost();
        // this.props.editingDog ? this.props.apiDogPatch() : 
    }

    apiPost = () => {
        const {
            name, medication, specialNeeds,
            walkRequirements, birthday, temperament, 
            allergies, loudNoises, treats, 
            other, feeding, imgUrl, userId, headers
        } = this.props.currentDog
        axios.post(`https://bkbarkapp.herokuapp.com/api/petApp/users/${userId}`, {name, medication, specialNeeds,
            walkRequirements, birthday, temperament, 
            allergies, loudNoises, treats, 
            other, feeding, imgUrl, headers})
            .then((result) => {
                this.props.updateDogs(result.data)
            })
    }

    onChange = e => {this.props.updateDog(e.target.name, e.target.value)}

    render() {
        const { currentDog } = this.props;
        return (
            <Form className="form" onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="dog">{currentDog.name}</Label>
                    <Label for="medication">Does {currentDog.name} need any medication?</Label>
                    <Input type="textarea" name="medication" id="exampleText" onChange={this.onChange}/>
                    <Label for="specialNeeds">Does {currentDog.name} have any special needs?</Label>
                    <Input type="textarea" name="specialNeeds" id="exampleText" onChange={this.onChange}/>
                    <Label for="walkRequirements">What are {currentDog.name}'s walk requirements?</Label>
                    <Input type="text" name="walkRequirements" id="exampleText" onChange={this.onChange}/>
                    <Label for="birthday">When is {currentDog.name}'s birthday?</Label>
                    <Input type="text" name="birthday" id="exampleText" onChange={this.onChange}/>
                    <Label for="temperament">How is {currentDog.name} with other dogs, animals, strangers?</Label>
                    <Input type="textarea" name="temperament" id="exampleText" onChange={this.onChange}/>
                    <Label for="allergies">Does {currentDog.name} have allergies? If yes, explain.</Label>
                    <Input type="textarea" name="allergies" id="exampleText" onChange={this.onChange}/>
                    <Label for="loudNoises">How is {currentDog.name} with loud noises?</Label>
                    <Input type="textarea" name="loudNoises" id="exampleText" onChange={this.onChange}/>
                    <Label for="feeding">Does {currentDog.name} need to be fed? If yes, explain.</Label>
                    <Input type="textarea" name="feeding" id="exampleText" onChange={this.onChange}/>
                    <Label for="imgUrl">Add a photo of {currentDog.name}!</Label>
                    <Input type="url" name="imgUrl" id="exampleText" placeholder="url" onChange={this.onChange}/>
                    <Label for="treats">Does {currentDog.name} receive treats after walks?</Label>
                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" onChange={this.onChange}/>
                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" onChange={this.onChange}/>
                    <Label for="other">Anything else we should know about {currentDog.name}?</Label>
                    <Input type="textarea" name="other" id="exampleText" onChange={this.onChange}/>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}
// id: null,
// name: '',
// medication: '', 
// specialNeeds: '',
// walkRequirements: '',
// birthday: '',
// temperament: '',
// allergies: '',
// loudNoises: '',
// treats: true,
// other: '',
// feeding: '',
// imgUrl: ''

export default DogForm;