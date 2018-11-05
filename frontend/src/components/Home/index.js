import React, { Component } from "react";
import Search from '../Home/Search';
import Sort from '../Home/Sort';
import UserTable from '../Home/UserTable';
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className='userList-wrapper'>
        <div className='users-title'>Users</div>
        <Search />
        <div className='sort'>
          <Sort />
        </div>
        <div className='user-table-container'>
        <UserTable />
        </div>
        <button 
          className='create-new-user-button'
          onClick={() => this.props.history.push('/users')}>Create New User</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Home);