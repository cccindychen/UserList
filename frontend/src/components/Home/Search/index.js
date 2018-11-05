import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

  handleSearch = e => {
    this.setState({search: e.target.value});
    this.props.dispatch(actions.setSearch(e.target.value));
    this.props.dispatch(actions.setPage(1));
  }

  render() {
    return (
      <form className='search-form'>
        <div className='search-title'>Search:</div>
        <input
          className='search-input'
          type="text"
          value={this.state.search}
          onChange={this.handleSearch}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    search: state.search,
    page: state.page
  };
};

export default connect(mapStateToProps)(Search);