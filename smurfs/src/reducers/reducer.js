import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actions'
 

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}



export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_FAILURE :
            return {
                ...state,
                isFetching: true
            }
         case FETCH_DATA_SUCCESS :
             return {
                 ...state,
                 smurfs: action.payload,
                 isFetching: false
             }   

         case FETCH_DATA_FAILURE :    
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}