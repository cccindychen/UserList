const initState = { isFetching: false, error: null, data: {} };

const currentUser = (state = initState, action) => {
  switch (action.type) {
    case "CURRENTUSER_START":
      return {
        ...state,
        isFetching: true
      };
    case "CURRENTUSER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case "CURRENTUSER_FAIL":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };     
    default:
      return state;
  }
};

export default currentUser;
