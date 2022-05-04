import { createSlice } from "@reduxjs/toolkit";

// The initial state of the shopping list
const initialState = {
    shoppingList: [
        { id: 1, itemName: "Coconut Milk", quantity: "1" },
        { id: 2, itemName: "Almonds", quantity: "2" },
        { id: 3, itemName: "Baguettes", quantity: "3" },
        { id: 4, itemName: "Artichokes", quantity: "4" },
        { id: 5, itemName: "Tomatoes", quantity: "5" },
    ],
};

// The shopping list slice
const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.shoppingList.push({
                id: state.shoppingList.length + 1,
                itemName: action.payload.itemName,
                quantity: action.payload.quantity,
            });
        },
        removeItem: (state, action) => {
            state.shoppingList = state.shoppingList.filter(
                (a) => a.id !== action.payload.id
            );
        },
    },
});

// The actions
export const { addItem, removeItem } = shoppingListSlice.actions;

// The reducer
export default shoppingListSlice.reducer;