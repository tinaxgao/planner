import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./shoppingListSlice";

const AddShoppingListItem = () => {
  const [newItem, setNewItem] = useState({ content: "", quantity: "" });
  const dispatch = useDispatch();

  // Set new item based on input
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Add new item from form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(newItem));
    setNewItem({ content: "", quantity: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="itemContent"
          name="content"
          placeholder="Item name"
          onChange={handleChange}
          value={newItem.content}
        />
        <input
          type="text"
          id="itemQty"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
          value={newItem.quantity}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddShoppingListItem;
