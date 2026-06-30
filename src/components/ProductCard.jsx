import React from 'react'
import ProductBadge from './ProductBadge'

function ProductCard({ product, onSelectedProduct, isSelected, isFavorite, onToggleFavorite }) {
  return (
    <article className={`product-card ${isSelected ? 'selected' : ''}`}>
        <img src={product.image} alt={product.name} />

        <div className='product-card__body'>
            <h3 className='product-card__title'>{product.name}</h3>
             <ProductBadge category={product.category} />
            <p>Description : {product.description}</p>
            <strong className='product-card__price'>{product.price} €</strong>
            <br />
            {/* <p>{available ? "Disponible" : "Hors-stock"} </p> */}
            <button onClick={() => onSelectedProduct(product)}>Voir les détails</button>
            <button onClick={() => onToggleFavorite(product.id)}> {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'} </button>
        </div>
    </article>
  )
}

export default ProductCard