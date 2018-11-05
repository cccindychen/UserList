import React, { Component } from "react";
import UserRow from "../UserRow";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import Pagination from "react-js-pagination";
import { sortUsers, searchUsers } from "../../../util";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPerPage: 10
    };
  }
  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }

  handlePageChange = pageNumber => {
    this.props.dispatch(actions.setPage(pageNumber));
  };

  render() {
    const { isFetching, data, error } = this.props.users;
    if (isFetching) {
      return <div>Loading the data....</div>;
    } else if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    } else {
      if (!data) return null;
      //search and sort the users locally. do not involve http request
      let filteredUsers = sortUsers(searchUsers(data, this.props.search), this.props.sort);      

      //pagination
      const {itemPerPage } = this.state;
      const indexOfLastUser = this.props.page * itemPerPage;
      const indexOfFirstUser = indexOfLastUser - itemPerPage;
      const renderedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); //shallow copy

      return (
        <div>
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {renderedUsers.map((user, index) => {
                return <UserRow key={index} user={user} />;
              })}
            </tbody>
          </table>   
          <Pagination
            activePage={this.props.page}
            itemsCountPerPage={this.state.itemPerPage}
            totalItemsCount={filteredUsers.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    search: state.search,
    sort: state.sort,
    page: state.page
  };
};

export default connect(mapStateToProps)(UserTable);
