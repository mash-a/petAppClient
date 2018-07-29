import React, { Component } from 'react';

class CatAndOtherPetForm extends Component {
    render() {
        return (
            <form>
                <input
                value="name"
                >
                </input>
                <input
                value="img"
                >
                </input>
                <input
                value="medication"
                >
                </input>
                <input
                value="special needs"
                >
                </input>
                <input
                value="hiding spots"
                >
                </input>
                <input
                value="birthday"
                >
                </input>
            </form>
        )
    }
}

// table.string('name');
//       table.string('medication');
//       table.string('special needs');
//       table.string('walk requirements');
//       table.integer('DOB');
//       table.string('temperament');
//       table.string('allergies');
//       table.string('loud noises');
//       table.boolean('treats');
//       table.string('other');
//       table.string('feeding')

export default CatAndOtherPetForm;