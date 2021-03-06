import React, { Component } from "react";
import axios from "axios";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let smurf = this.state;
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(this.props.history.push("/"))
      .catch(err => console.log(err));
    console.log("smurf added!");
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Smurf name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurf age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Smurf height"
            value={this.state.height}
            name="height"
          />
          <button className="form-link" type="submit">
            Add!
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
