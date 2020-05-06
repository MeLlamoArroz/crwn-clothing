import { createReducer } from '@reduxjs/toolkit';

import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null
}

// const userReducer = (currentState = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       return {
//         ...currentState,
//         currentUser: action.payload
//       }
//     default:
//       return currentState
//   }
// }

const userReducer = createReducer(INITIAL_STATE, {
  [UserActionTypes.SET_CURRENT_USER]: (currentState, action) => ({...currentState, currentUser: action.payload})
})

export default userReducer