import React, { useState } from 'react';
import { useUpdateProductMutation } from '../api/ProductsApi';

const UpdateProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [updateProduct] = useUpdateProductMutation();

  const handleUpdate = async () => {
    try {
      await updateProduct({ id: product.id, name, price }).unwrap();
      alert('Product updated successfully!');
    } catch (err) {
      console.error('Failed to update product:', err);
    }
  };

  return (
    <div className="update-product">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateProduct;
