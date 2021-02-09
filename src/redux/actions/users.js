import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchUsers = () => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });


    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(({
            data
        }) => {
            dispatch(setUsers(data))
        })
}

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users
})