const initialState = {
    users: [],
    isLoaded: false,
  };
  
  const users = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
          isLoaded: true,
        };
  
      case 'SET_LOADED':
        return {
          ...state,
          isLoaded: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default users;