import React from "react";

class NewUserLink extends React.Component {
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
        // use function from API.js to POST the new UserLink data
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                
                <label>
                    Link or Text:
                    <textarea name="link" value={this.state.value} onChange={this.handleChange}></textarea>
                </label>

                <label>
                    Description or More Text: (optional)
                    <textarea name="description" value={this.state.value} onChange={this.handleChange}></textarea>
                </label>

                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default NewUserLink;