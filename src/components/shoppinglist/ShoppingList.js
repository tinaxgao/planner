import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./shoppingListSlice";
import AddShoppingListItem from "./AddShoppingListItem";
import ".//ShoppingList.css";

const Checklist = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.shoppingList);
  const item = items.shoppingList.map((a) => (
    <div key={a.id} className="items">
      <div id="col1">
        <div className="toplabel">Item</div>
        {a.content}
      </div>
      <div id="col2">
        <div className="toplabel">Qty</div>
        {a.quantity}
      </div>
      <div className="btn-checked" onClick={() => dispatch(removeItem(a))} />
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
