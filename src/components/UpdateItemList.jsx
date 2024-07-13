// src/UpdateItemList.js
import React, { useState } from 'react';

const UpdateItemList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Apple' },
    { id: 2, text: 'Banana' },
    { id: 3, text: 'Cherry' },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setNewText(currentText);
  };

  const updateItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, text: newText } : item));
    setEditingId(null);
    setNewText('');
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {editingId === item.id ? (
            <div>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => updateItem(item.id)}>Update</button>
            </div>
          ) : (
            <div>
              {item.text}
              <button onClick={() => startEditing(item.id, item.text)}>Edit</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UpdateItemList;
