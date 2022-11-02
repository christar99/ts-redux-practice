import { createSlice } from "@reduxjs/toolkit";
import { asyncUpFetch } from '../../api/github';

type GithubState = {
    info: object;
    status: string;
}

const initialState: GithubState = {
    info: {},
    status: ''
}

export const github = createSlice({
    name: 'github',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(asyncUpFetch.getUserProfile.pending, (state, action) => {
            state.status = 'Loading';
        })
        .addCase(asyncUpFetch.getUserProfile.fulfilled, (state, action) => {
            state.status = '가져오기 완료';
            state.info = action.payload;
        })
        .addCase(asyncUpFetch.getUserProfile.rejected, (state, action) => {
            state.status = '에러';
        })
    }
})