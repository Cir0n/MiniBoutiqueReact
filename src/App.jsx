import React from 'react'
import { products } from './data/product'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [showDetails, setShowDetails] = useState(true)
  const [favoriteProductId, setFavoriteProductId] = useState(null)

  function toggleFavorite(productId){
    if (favoriteProductId === productId){
      setFavoriteProductId(null)
    }
    else {
      setFavoriteProductId(productId)
    }
  }

  function handleAddToCart(product) {
    console.log(`Produit ajouté au panier : ${product.name}`);
  }

  return (
    <>
      <Header />

      <main>
        <ProductList 
          products={products} 
          onSelectedProduct={setSelectedProduct}
          selectedProductId={selectedProduct.id}
          favoriteProductId={favoriteProductId}
          onToggleFavorite={toggleFavorite}
          />

        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Masquer les  details" : 'Afficher les détails'}
        </button>
        
        {showDetails && (
          <ProductDetails products={selectedProduct} isFavorite={favoriteProductId === selectedProduct.id} onAddToCart={handleAddToCart} />
        )}
      </main>

      <Footer />
    </>
  )
}

export default App