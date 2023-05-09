import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  // const products = [
  //   { id: 1, name: 'Product 1', description: 'Description 1' },
  //   { id: 2, name: 'Product 2', description: 'Description 2' },
  //   { id: 3, name: 'Product 3', description: 'Description 3' },
  // ];

  const [products,setProducts]=useState([])
  useEffect(() => {

		const getProducts = async () => {
			axios.get('http://localhost:3001/product/getAll')
				.then(response => {
					setProducts(response.data);

				})
				.catch(error => {
					console.error(error);
				});
		};
		getProducts();
		

	}, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) =>(            
          <div>
            <h1>{product.prodName}</h1>
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.prodName}</Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;