import {createSelector} from 'reselect';

const selectDirectory = state => state.directoy;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);