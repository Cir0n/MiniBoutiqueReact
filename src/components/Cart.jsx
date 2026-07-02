import React from 'react'

function Cart({cartItems, onRemoveFromCart, onClearCart, onOrderSubmit, onCustomerNameChange, customerName}) {

    const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className='cart'>
        <h2>Panier</h2>

        {cartItems.length === 0 &&(
            <p>Votre panier est vide</p>
        )}

        {cartItems.length > 0 && (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={`${item.id}-${index}`}>
                                {item.name} - {item.price}€
                                <button onClick={() => onRemoveFromCart(index)}>Supprimer</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: {total}€</p>
                    <button onClick={onClearCart}>Vider le panier</button>
                </>
                    
        )}

        <form onSubmit={onOrderSubmit} className='order-form'>
            <label>
                Votre nom:
                <input type="text" value={customerName} onChange={(e) => onCustomerNameChange(e.target.value)} placeholder="Ex : Philippe" />
            </label>
            <button type="submit">Valider la commande</button>
        </form>
    </section>
  )
}

export default Cart