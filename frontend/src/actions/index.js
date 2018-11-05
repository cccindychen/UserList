import axios from 'axios';

export const getAllUsersStart = () => {
  return {type: 'USERS_FETCH_START'};
}

export const getAllUsersSuccess = response => {
  return {type: 'USERS_FETCH_SUCCESS', data: response.data.users};
}

export const getAllUsersFail = error => {
  return {type: 'USERS_FETCH_FAIL', error};
}

export const getOneUserStart = () => {
  return {type: 'CURRENTUSER_START'};
}

export const getOneUserSuccess = response => {
  return {type: 'CURRENTUSER_SUCCESS', data: response.data};
}

export const getOneUserFail = error => {
  return {type: 'CURRENTUSER_FAIL', error};
}

export const getUsers = () => {
  return dispatch => {
    dispatch(getAllUsersStart());
    axios
      .get('/api/users')
      .then(response => {
        dispatch(getAllUsersSuccess(response));
      })
      .catch(err => {
        dispatch(getAllUsersFail(err));
      });
  };
}

export const getOneUser = id => {
  return dispatch => {
    dispatch(getOneUserStart());
    axios
      .get('/api/users/' + id)
      .then(response => {
        dispatch(getOneUserSuccess(response));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const addUser = user => {
  return dispatch => {
    axios
      .post('/api/users/', user)
      .then(() => {
        dispatch(getUsers());
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const deleteUser = id => {
  return dispatch => {
    axios
      .delete('/api/users/' + id)
      .then(() => {
        dispatch(getUsers());
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const editUser = user => {
  return dispatch => {
    axios
      .put('/api/users/' + user._id, user)
      .then(() => {
        dispatch(getUsers());
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const setSort = sort => ({
  type: 'SET_SORT',
  sort
});

export const setSearch = search => ({
  type: 'SET_SEARCH',
  search
});

export const setPage = page => ({
  type: 'SET_PAGE',
  page
})