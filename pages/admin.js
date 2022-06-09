import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';
import { urlFor } from '../lib/client';

const Admin = ({products}) => {
  return (
    <div>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Toy of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => 
        <div className="product-card">
          <img src={urlFor(product.image && product.image[0])} width={245} height={245} className="product-image" />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>      
        )}
      </div>
    </div>
  )
}



export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: {products}
  }
}

export default Admin;