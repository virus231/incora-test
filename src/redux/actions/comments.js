import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchComments = (id) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
      });

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(({
            data
        }) => {
            dispatch(setComments(data))
            console.log(data)
        })
}

export const setComments = (comments) => ({
    type: 'SET_COMMENTS',
    payload: comments
})