import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./shoppingListSlice";

const AddShoppingListItem = () => {
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "" });
  const dispatch = useDispatch();

  // Set new item based on input
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Add new item from form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(newItem));
    setNewItem({ itemName: "", quantity: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label className="formLabel">Add item</label>
        <input
          type="text"
          id="itemContent"
          name="itemName"
          onChange={handleChange}
          value={newItem.itemName}
        />
        <label className="formLabel">Quantity</label>
        <input
          type="text"
          id="itemQty"
          name="quantity"
          onChange={handleChange}
          value={newItem.quantity}
        />
        <button id="btn-formsubmit" type="submit"></button>
      </form>
    </div>
  );
};

export default AddShoppingListItem;
