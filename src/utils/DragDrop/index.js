import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import { LIST, SUBLIST, LISTITEM } from "./constants";
import DropZone from "./DropZone";

function DragDrop() {
  const [items, setItems] = useState([]);
  const [sublist, setSublist] = useState([
    { id: "i-7", name: "subtask 1", type: "listItem" },
  ]);
  const [list, setList] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: [LIST, SUBLIST, LISTITEM],
    drop: (item) => {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDrop = (item) => {
    if (item.type === LISTITEM) {
      const selectedItem = items.filter((i) => i.id === item.id);
      setList((list) => [...list, selectedItem[0]]);
      setItems((items) => items.filter((i) => i.id !== item.id));
    }

    if (item.type === SUBLIST) {
      setList((list) => [...list, item]);
    }
  };

  return (
    <>
      {/* List to drop stuff into: */}
      <div className="list" ref={drop}>
        <h3>LIST</h3>

        {list.map((item) => {
          if (item.type === LISTITEM) {
            return <Item key={item.id} id={item.id} name={item.name} />;
          } else if (item.type === SUBLIST) {
            if (item.sublist) {
              return (
                <div key={item.id} className="sub-list">
                  <h5>{item.name}</h5>

                  {item.sublist.map((child) => {
                    return (
                      <Item key={child.id} id={child.id} name={child.name} />
                    );
                  })}
                </div>
              );
            }
          }
          return null;
        })}
      </div>

      {/* Sub-list that can be dragged into a main List: */}

      <DropZone
        items={items}
        setItems={setItems}
        sublist={sublist}
        setSublist={setSublist}
      />

      {/* Items to be dragged into a list: */}
      <div>
        <h5>List Items</h5>
        {items.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </>
  );
}

export default DragDrop;
