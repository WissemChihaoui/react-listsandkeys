import React, { useState } from 'react';

const SortList = () => {
  const [items, setItems] = useState(['Cherry', 'Apple', 'Banana', 'Elderberry', 'Date']);

  const sortItems = () => {
    const sortedItems = [...items].sort();
    setItems(sortedItems);
  };

  return (
    <div>
      <button onClick={sortItems}>Sort</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortList;
