import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchComments = (id) => (dispatch) => {

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(({
            data
        }) => {
            console.log(data)
            dispatch(setComments(data))
        })
}

export const setComments = (comments) => ({
    type: 'SET_COMMENTS',
    payload: comments
})