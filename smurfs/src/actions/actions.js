import axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
export const ADD_SMURF = "ADD_SMURF"


export const fetchData = () => dispatch => {
    dispatch({type: FETCH_DATA})

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch( error => {
        dispatch({type: FETCH_DATA_FAILURE, payload: error.response})
    })

}

export const addSmurf = smurf => dispatch => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log(res)
        dispatch({type: ADD_SMURF, payload: res})
    })
    .catch(error => {
        dispatch({type: FETCH_DATA_FAILURE, payload: error.response})
    })
}