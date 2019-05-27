/**
 *
 * Actions for Wellness.
 * @author Shashank Srivastava
 *
 *
 */

// import CONFIG from '../Config'
import {
  // GET_FUNCTION,
  // SET_FUNCTION,
  ADD_FUNCTION
} from './constant'


// export const getFunction = (details) => (dispatch: any) => {
//   console.warn("action")
//   dispatch({
//     type:GET_FUNCTION,
//   })
// }

// export const setFunction = (params) => (dispatch: any) => {
//   dispatch({
//     type:SET_FUNCTION,
//   })
// }

export const calculateFunction = (paramOne,paramTwo) => (dispatch: any) => {
  var one=paramOne
  var two=paramTwo
  var total=one+two
  dispatch({
    type:ADD_FUNCTION,
    data:total
  })
}
//calculate function to give sum of numbers 
