import React from 'react'

function ProductBadge({ category }) {
  const slug = category.toLowerCase()

  return (
    <span className={`product-badge product-badge--${slug}`}>
      {category}
    </span>
  )
}

export default ProductBadge