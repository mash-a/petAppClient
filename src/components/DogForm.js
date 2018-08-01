import React, { Component } from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    CustomInput 
} from 'reactstrap';

class DogForm extends Component {
    render() {
        const { currentDog } = this.props;
        return (
            <Form>
                <FormGroup>
                    <Label for="dog">{currentDog.name}</Label>
                    <Label for="medication">Does {currentDog.name} need any medication?</Label>
                    <Input type="textarea" name="medication" id="exampleText"/>
                    <Label for="specialNeeds">Does {currentDog.name} have any special needs?</Label>
                    <Input type="textarea" name="specialNeeds" id="exampleText"/>
                    <Label for="walkRequirements">What are {currentDog.name}'s walk requirements?</Label>
                    <Input type="text" name="walkRequirements" id="exampleText"/>
                    <Label for="birthday">When is {currentDog.name}'s birthday?</Label>
                    <Input type="text" name="birthday" id="exampleText"/>
                    <Label for="temperament">How is {currentDog.name} with other dogs, animals, strangers?</Label>
                    <Input type="textarea" name="temperament" id="exampleText"/>
                    <Label for="allergies">Does {currentDog.name} have allergies? If yes, explain.</Label>
                    <Input type="textarea" name="allergies" id="exampleText"/>
                    <Label for="loudNoises">How is {currentDog.name} with loud noises?</Label>
                    <Input type="textarea" name="loudNoises" id="exampleText"/>
                    <Label for="feeding">Does {currentDog.name} need to be fed? If yes, explain.</Label>
                    <Input type="textarea" name="feeding" id="exampleText"/>
                    <Label for="imgUrl">Add a photo of {currentDog.name}!</Label>
                    <Input type="url" name="imgUrl" id="exampleText" placeholder="url"/>
                    <Label for="treats">Does {currentDog.name} receive treats after walks?</Label>
                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Yes" />
                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="No" />
                    <Label for="other">Anything else we should know about {currentDog.name}?</Label>
                    <Input type="textarea" name="other" id="exampleText"/>
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