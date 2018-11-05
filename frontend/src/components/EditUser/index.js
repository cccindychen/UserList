import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      sex: "",
      age: "",
      passWord1: "",
      passWord2: "",
    };
  }

  componentDidMount = () => {
    this.props.dispatch(actions.getOneUser(this.props.match.params.userId));
  }

  //props got changed
  componentDidUpdate = prevProps => {
    if (prevProps.currentUser !== this.props.currentUser && this.props.currentUser.data.user) {
      const {firstName, lastName, sex, age} = this.props.currentUser.data.user;
      this.setState({firstName: firstName, lastName: lastName, sex: sex, age: age});
    }
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
        _id: this.props.currentUser.data.user._id,
        firstName: firstName,
        lastName: lastName,
        sex: sex,
        age: age,
        password: passWord1
      };
      console.log(user);
      this.props.dispatch(actions.editUser(user));
      this.props.dispatch(actions.setSearch(""));
      this.props.dispatch(actions.setPage(1));

      //redirect to home page
      this.props.history.push("/");
    }
  }

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
            disabled
          />
          Last Name:
          <input
            type="text"
            value={lastName}
            disabled
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
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(EditUser);
