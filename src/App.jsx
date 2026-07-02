import React from 'react'
import { products } from './data/product'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './components/Cart'


function App() {
  
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [showDetails, setShowDetails] = useState(true)
  const [favoriteProductId, setFavoriteProductId] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [customerName, setCustomerName] = useState('')

  useEffect(() => {
    console.log('Panier mis à jour:', cartItems)
  }, [cartItems])

  function toggleFavorite(productId){
    if (favoriteProductId === productId){
      setFavoriteProductId(null)
    }
    else {
      setFavoriteProductId(productId)
    }
  }

  function handleAddToCart(product) {
    setCartItems((currentCartItems) => [...currentCartItems, product])
  }

  function removeFromCart(indexToRemove) {
    setCartItems(
      cartItems.filter((item, index) => index !== indexToRemove)
    )
  }

  function clearCart(){
    setCartItems([])
  }

  function handleOrderSubmit(event) {
    event.preventDefault()
    if (customerName.trim() === '') {
      alert('Veuillez saisir votre nom.')
      return
    }

    if (cartItems.length === 0) {
      alert('Votre panier est vide.')
      return
    }

    alert(`Merci pour votre commande, ${customerName} !`)
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

        <Cart 
          cartItems={cartItems} 
          customerName={customerName}
          onRemoveFromCart={removeFromCart} 
          onClearCart={clearCart} 
          onOrderSubmit={handleOrderSubmit} 
          onCustomerNameChange={setCustomerName}
          />
      </main>

      <Footer />
    </>
  )
}

export default App