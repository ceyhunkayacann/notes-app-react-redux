import { createSlice } from "@reduxjs/toolkit";


const current = new Date();
export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            
        ],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        }
    }
})


export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;