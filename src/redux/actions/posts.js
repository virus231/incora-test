import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPosts = (id) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
      });


    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(({
            data
        }) => {
            dispatch(setPosts(data))

        })
}

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})