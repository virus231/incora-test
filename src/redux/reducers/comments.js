const initialState = {
    comments: [],
    isLoaded: false,
  };
  
  const comments = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMMENTS':
        return {
          ...state,
          comments: action.payload,
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
  
  export default comments;