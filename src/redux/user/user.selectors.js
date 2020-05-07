import { createSelector } from 'reselect';

const selectUser = currentState => currentState.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser 
)