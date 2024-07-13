import React, { useState } from 'react';

const AddItemList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddItemList;
