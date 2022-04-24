import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./shoppingListSlice";
import AddShoppingListItem from "./AddShoppingListItem";

const Checklist = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.shoppingList);
  const item = items.shoppingList.map((a) => (
    <div key={a.id} className="items">
      <p>{a.content}</p>
      Quantity {a.quantity}
      <button onClick={() => dispatch(removeItem(a))}>x</button>
    </div>
  ));

  return (
    <div>
      {item}

      <AddShoppingListItem />
    </div>
  );
};

export default Checklist;
