import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPosts = (id) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(({
            data
        }) => {
            dispatch(setPosts(data))
            console.log(data)

        })
}

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})