/**
 *
 * Reducer for MyProfile
 * @author Anil Kumar
 *
 */

import {
    GET_FUNCTION,
    SET_FUNCTION,
    ADD_FUNCTION
  } from './constant'
    
  const initialState = {
    getFunction:'',
    setFunction:'',
    sum:0,
    check: 0, 
  }
    
  export default function MyProfileReducer(state = initialState, action) {
    switch (action.type) {
      // case GET_FUNCTION:
      //   return {
      //     ...state,
      //   }

      // case SET_FUNCTION:
      //   return {
      //     ...state,
      //   }

        case ADD_FUNCTION:
        return{
          ...state,
          check: action.data
        }
      default:
        return state
    }
  }
//matching case and returning updated state
    
    