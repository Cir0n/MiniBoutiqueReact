import React from 'react'
import ProductBadge from './ProductBadge'

function ProductCard({name, price, category, image, description, available}) {
  return (
    <article className="product-card">
        <img src={image} alt={name} />

        <div className='product-card__body'>
            <h3 className='product-card__title'>{name}</h3>
             <ProductBadge category={category} />
            <p>Description : {description}</p>
            <strong className='product-card__price'>{price} €</strong>
            <p>{available ? "Disponible" : "Hors-stock"} </p>
        </div>
    </article>
  )
}

export default ProductCard