import React from 'react'

function ProductDetails({products, isFavorite, onAddToCart}) {
  return (
    <section className="product-details">
        <h2>Produit mis en avant</h2>

        <div className="details-card">
            <h3>{products.name}</h3>
            <p>
                {products.description}
            </p>
            <p>{products.price} €</p>
            {isFavorite && <p>Ce produit est dans vos favoris</p>}
            <button onClick={() => onAddToCart(products)}>
                Ajouter au panier
            </button>
        </div>
    </section>
  )
}

export default ProductDetails