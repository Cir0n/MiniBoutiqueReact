import React from 'react'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <section className="product-list">
        <h2>Nos produits</h2>

        <div className="products-grid">
            <ProductCard
                name="Ordinateur portable"
                price={899}
                category='Informatique'
                description='Ordinateur portable Lenovo transportable partout '
                image="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductCard
                name="Souris sans fil"
                price={29}
                category='accessoire'
                description="Souris éclairé"
                image="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <ProductCard
                name="Clavier mécanique"
                price={79}
                category='accessoire'
                description="Clavier Mécanique à touche rétro éclairer"
                image="https://images.unsplash.com/photo-1626958390898-162d3577f293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                available={true}
            />

            <ProductCard
                name="Ecouteur sans fil"
                price={99}
                category='accessoire'
                description="Eoutez votre musique en toute isolation avec nos écouteur a reduction de bruits"
                available={true}
                image="https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
    </section>
  )
}

export default ProductList