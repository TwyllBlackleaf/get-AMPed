import React, { useState } from "react";

class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        // use function from API.js to PUT the data from this.state.value into the db using the forItem prop
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default EditForm;