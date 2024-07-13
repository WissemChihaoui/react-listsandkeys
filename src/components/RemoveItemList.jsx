import React, { useState } from 'react';

const RemoveItemList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_,index) => index !== indexToRemove));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default RemoveItemList;
