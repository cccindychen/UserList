import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      sex: "",
      age: "",
      passWord1: "",
      passWord2: ""
    };
  }

  handleChange = (name, e) => {
    this.setState({[name]: e.target.value});
  };

  handleSubmit = e => {
    const {passWord1, passWord2} = this.state;
    e.preventDefault();
    if (passWord1 === passWord2) {
      const { firstName, lastName, sex, age, passWord1 } = this.state;
      const user = {
        firstName: firstName,
        lastName: lastName,
        sex: sex,
        age: age,
        password: passWord1
      };
      this.props.dispatch(actions.addUser(user));
      this.props.dispatch(actions.setSearch(""));
      this.props.dispatch(actions.setPage(1));

      //redirect to home page
      this.props.history.push("/");
    }
  };

  render() {
    const { firstName, lastName, sex, age, passWord1, passWord2 } = this.state;
    return (
      <div className="create-user-wrapper">
        <div className="create-user-title">Create New User</div>
        <form onSubmit={this.handleSubmit} className="create-user-form">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={e => this.handleChange("firstName", e)}
          />
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={e => this.handleChange("lastName", e)}
          />
          Sex:
          <select value={sex} name="sex" onChange={e => this.handleChange("sex", e)}>
            <option value="">Please select:</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          Age:
          <input
            type="text"
            value={age}
            onChange={e => this.handleChange("age", e)}
          />
          Password:
          <div>
            <input
              className="password"
              type="password"
              value={passWord1}
              onChange={e => this.handleChange("passWord1", e)}
              />
            {passWord2 === "" ? null : passWord1 === passWord2 ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-times" />
            )}
          </div>
          <div>
            Repeat:
            <input
              className="password"
              type="password"
              onChange={e => this.handleChange("passWord2", e)}
            />
            {passWord2 === "" ? null : passWord1 === passWord2 ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-times" />
            )}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(CreateUser);
