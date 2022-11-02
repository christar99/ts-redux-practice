import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onIncrease (state) {
            state.count ++;
        },
        onDecrease (state) {
            state.count --;
        },
        onIncreaseBy (state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    }
});

export const { onIncrease, onDecrease, onIncreaseBy } = counter.actions;

export default counter;