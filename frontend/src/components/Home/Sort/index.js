import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = { select: "firstNameAsc" };
  }

  handleSelectChange = e => {
    this.setState({ select: e.target.value });
    this.props.dispatch(actions.setSort(e.target.value));
  }

  render() {
    return (
      <form>
        Sort By:
        <select value={this.state.select} onChange={this.handleSelectChange}>
          <option value="firstNameAsc">First Name: A to Z</option>
          <option value="firstNameDesc">First Name: Z to A</option>
          <option value="lastNameAsc">Last Name: A to Z</option>
          <option value="lastNameDesc">Last Name: Z to A</option>
          <option value="femaleFirst">Sex: Female first</option>
          <option value="maleFirst">Sex: Male first</option>
          <option value="ageAsc">Age: Low to High</option>
          <option value="ageDesc">Age: High to Low</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    sort: state.sort
  };
};

export default connect(mapStateToProps)(Sort);
