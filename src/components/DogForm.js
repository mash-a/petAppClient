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
    }

    apiPost = () => {
        const {
            name, medication, specialNeeds,
            walkRequirements, birthday, temperament, 
            allergies, loudNoises, treats, 
            other, feeding, imgUrl,
        } = this.props.currentDog;
        const { headers } = this.props;
        const { id } = this.props.profile;
        const userId = id;
        console.log(headers, 'dogForm')
        axios.post(`/api/petApp/users/${userId}`, {name, medication, specialNeeds,
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
                    <Label for="dog">Name</Label>
                    <Input type="text" name="name" id="exampleText" onChange={this.onChange} placeholder="Buddy"/>
                    <Label for="medication">Does your pup need any medication?</Label>
                    <Input type="textarea" name="medication" id="exampleText" onChange={this.onChange} placeholder="Yes, Boneo Canine after dinner meal."/>
                    <Label for="specialNeeds">Does your pup have any special needs?</Label>
                    <Input type="textarea" name="specialNeeds" id="exampleText" onChange={this.onChange} placeholder="Help walking up stairs."/>
                    <Label for="walkRequirements">What are your pup's walk requirements?</Label>
                    <Input type="textarea" name="walkRequirements" id="exampleText" onChange={this.onChange} placeholder="M-F 1-3pm"/>
                    <Label for="birthday">When is your pup's birthday?</Label>
                    <Input type="text" name="birthday" id="exampleText" onChange={this.onChange} placeholder="May 3rd"/>
                    <Label for="temperament">How is your pup with other dogs, animals, strangers?</Label>
                    <Input type="textarea" name="temperament" id="exampleText" onChange={this.onChange} placeholder="Loves other dogs. Chases squirrels. Great with strangers."/>
                    <Label for="allergies">Does your pup have allergies? If yes, explain.</Label>
                    <Input type="textarea" name="allergies" id="exampleText" onChange={this.onChange} placeholder="Chicken"/>
                    <Label for="loudNoises">How is your pup with loud noises?</Label>
                    <Input type="textarea" name="loudNoises" id="exampleText" onChange={this.onChange} placeholder="Fine"/>
                    <Label for="feeding">Feeding?</Label>
                    <Input type="textarea" name="feeding" id="exampleText" onChange={this.onChange} placeholder="1 cup of Nutro 2x a day"/>
                    <Label for="imgUrl">Add a photo of your pup!</Label>
                    <Input type="url" name="imgUrl" id="exampleText" placeholder="url" onChange={this.onChange}/>
                    <Label for="treats">Does your pup receive treats after walks?</Label>
                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" onChange={this.onChange}/>
                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" onChange={this.onChange}/>
                    <Label for="other">Anything else we should know?</Label>
                    <Input type="textarea" name="other" id="exampleText" onChange={this.onChange} placeholder="Walks on a collar. Want lots of socialization for Buddy!"/>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default DogForm;