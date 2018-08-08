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

class UserForm extends Component {
    
    onChange = e => {this.props.updateUser(e.target.name, e.target.value)}

    onSubmit = e => {
        e.preventDefault();
        this.props.apiPatchUser();
    }

    render() {
        const { profile } = this.props;
        return (
            <Form className="form" onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="user">Name</Label>
                    <Input 
                        className="form-control"
                        type="text" 
                        name="display_name" 
                        id={profile.id} 
                        onChange={this.onChange}
                        value={profile.display_name}
                        />
                        <Label for="user">Neighborhood</Label>
                        <Input 
                        className="form-control"
                        type="text" 
                        name="neighborhood" 
                        id={profile.id} 
                        placeholder={"Williamsburg"}
                        onChange={this.onChange}
                        value={profile.neighborhood}
                        />  
                        <Button>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default UserForm;