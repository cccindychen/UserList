import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../actions";

class UserRow extends Component {
  render() {
    const { key, user } = this.props;
    return (
      <tr key={key}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.sex}</td>
        <td>{user.age}</td>
        <td>
          <button className="edit-user-button">
            <Link
              className="edit-user-link"
              to={{ pathname: `/users/${user._id}` }}
            >
              <i className="fas fa-edit" />
              Edit
            </Link>
          </button>
        </td>
        <td>
          <button
            className="delete-user-button"
            onClick={() => {
              this.props.dispatch(actions.deleteUser(user._id));
              this.props.dispatch(actions.setSearch(''));
              this.props.dispatch(actions.setPage(1));
            }}
          >
            <i className="fas fa-trash-alt" />
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserRow);
