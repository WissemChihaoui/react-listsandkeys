import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Laptop', description: 'A high performance laptop' },
    { id: 2, name: 'Phone', description: 'A smartphone with a great camera' },
    { id: 3, name: 'Tablet', description: 'A tablet with a large display' },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
