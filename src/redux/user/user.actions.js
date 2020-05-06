import { createAction } from '@reduxjs/toolkit';

import { UserActionTypes } from './user.types'

// export const setCurrentUser = user => {
//   return ({
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user
//   })
// }

export const setCurrentUser = createAction(UserActionTypes.SET_CURRENT_USER)