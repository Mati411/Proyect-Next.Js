import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/layout'
import ProductSummary from '@components/ProductSummary/product-summary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <section>
      {product !== null ? <ProductSummary product={product} /> : null}
    </section>
  )
}

export default ProductPage
