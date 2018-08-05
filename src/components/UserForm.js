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

    render() {
        const { profile } = this.props;
        return (
            <Form>
                <FormGroup>
                    <Label for="user">{profile.display_name}</Label>
                    <Input 
                        type="text" 
                        name="display_name" 
                        id={profile.id} 
                        placeholder="Jane Doe" 
                        onChange={this.onChange}
                        />  
                </FormGroup>
            </Form>
        )
    }
}

export default UserForm;