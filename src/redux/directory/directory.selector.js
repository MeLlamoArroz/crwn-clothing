import { createSelector } from 'reselect';

const selectDirectory = currentState => currentState.directory

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)