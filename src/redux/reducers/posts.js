const initialState = {
    posts: [],
    isLoaded: false,
  };
  
  const posts = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return {
          ...state,
          posts: action.payload,
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
  
  export default posts;