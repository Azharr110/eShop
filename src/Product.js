import React from 'react'
import '../src/Product.css'


function Product({title, id, rating, price, image}) {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
               
            </div>
            <img src={image} alt="product-image" />

            <button>Add To Basket</button>
        </div>
    </div>
  )
}

export default Product