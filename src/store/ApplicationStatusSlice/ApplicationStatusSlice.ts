import {createSlice} from '@reduxjs/toolkit'

interface ApplicationStatusState {
    hasReachedBottom: boolean,
}

const initialState: ApplicationStatusState = {hasReachedBottom: false}

const ApplicationStatusSlice = createSlice({
    name: 'ApplicationStatus',
    initialState,
    reducers: {
        atBottom(state: ApplicationStatusState) {
            state.hasReachedBottom = true;
        },
        farFromBottom(state: ApplicationStatusState) {
            state.hasReachedBottom = false;
        },
    },
})
export const applicationStatusActions = ApplicationStatusSlice.actions;
export const applicationStatusReducer = ApplicationStatusSlice.reducer;