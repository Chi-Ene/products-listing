import { useState, useEffect } from 'react';
import './Products.css'; // Make sure to adjust the path to your CSS file

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?_t=' + new Date().getTime());
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} />
            <h5>{product.title}</h5>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
