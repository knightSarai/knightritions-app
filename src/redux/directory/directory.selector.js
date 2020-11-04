import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;

export const selecetDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)