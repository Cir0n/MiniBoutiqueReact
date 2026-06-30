import React from 'react'
import ProductCard from './ProductCard'


function ProductList({products, selectedProductId, onSelectedProduct, favoriteProductId, onToggleFavorite}) {
  return (
    <section className="product-list">
        <h2>Nos produits</h2>

        <div className="products-grid">
            <ProductCard 
                product={products[0]} 
                onSelectedProduct={onSelectedProduct} 
                isSelected={selectedProductId === products[0].id}
                isFavorite ={favoriteProductId === products[0].id}
                onToggleFavorite={onToggleFavorite}
            />

            <ProductCard 
                product={products[1]} 
                onSelectedProduct={onSelectedProduct}  
                isSelected={selectedProductId === products[1].id}
                isFavorite ={favoriteProductId === products[1].id}
                onToggleFavorite={onToggleFavorite}
            />

            <ProductCard 
                product={products[2]} 
                onSelectedProduct={onSelectedProduct}  
                isSelected={selectedProductId === products[2].id}
                isFavorite ={favoriteProductId === products[2].id}
                onToggleFavorite={onToggleFavorite}
            />
        </div>
    </section>
  )
}

export default ProductList