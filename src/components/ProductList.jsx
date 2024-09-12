import React from 'react';
import { useGetProductsQuery } from '../api/ProductsApi';
import './ProductList.css';

const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Update</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
