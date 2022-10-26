import { createSlice } from "@reduxjs/toolkit";


export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            
        ],
        color: [
            {
                name : "green", code : "linear-gradient(#16a34a, #166534);"
            },
            {
                name : "red", code : "linear-gradient(#dc2626, #991b1b);"
            },
            {
                name : "yellow", code : "linear-gradient(#ca8a04, #854d0e);"
            },
            {
                name : "blue", code : "linear-gradient(#2563eb, #1e40af);"
            }
        ],
        activeColor : 'green'
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        },
        toggle : (state, action) => {
            const {id} = action.payload
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
        },
        deleteItem : (state, action) => {
            const {id} = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered
        }
       
    }

})


export const { addNote, toggle, deleteItem } = noteSlice.actions;
export default noteSlice.reducer;