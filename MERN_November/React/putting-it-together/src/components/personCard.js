import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: this.props.age
        }
    }


    hadBirthday = () => {
        this.setState({ age: this.state.age + 1})
    }


    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = { this.hadBirthday }>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard