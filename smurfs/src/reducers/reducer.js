import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_SMURF } from '../actions/actions'
 

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}



export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA :
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

         case ADD_SMURF : 
         return {
             ...state,
             smurfs : [...state.smurfs, action.payload.data],
             isFetching: true
         }   
        default:
            return state
    }
}