const initState = { isFetching: false, data: [], error: null };

const users = (state = initState, action) => {
  switch (action.type) {
    case "USERS_FETCH_START":
      return {
        ...state,
        isFetching: true
      };
    case "USERS_FETCH_FAIL":
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case "USERS_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
};

export default users;
