import React from "react";
import axios from "axios";
import '../App.scss'
class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      username: "",
      email: "",
      password: "",
      // created_at:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.post = this.post.bind(this);
  }

  post() {
    let player = {
      name: this.state.name,
      age: this.state.age,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      // created_at:this.state.created_at
    };
    
    console.log(this.props)

    axios
      .post("http://localhost:8081/api/addplayer", player)
      .then((response)=> {
      
        alert("You have been added");
        this.props.history.push("/player");
      })
      .catch((err) => {
          console.log(err);
        alert("This is a duplicate");
      });
  }
  handleChange(event) {
    let n = event.target.name;
    let value = event.target.value;
    this.setState({ [n]: value });
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">

        <form>
          <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <input
          className="form-control"
          type="number"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.handleChange}
          />
          <input
          className="form-control"
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
          />
          <input
          className="form-control"
          type="text"
          name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
        </form>
            </div>
            <div className="d-flex justify-content-center">

        <button type="button" className="btn btn-primary" onClick={this.post} type="submit">
          Submit
        </button>
            </div>
      </div>
    );
  }
}
export default AddPlayer;
