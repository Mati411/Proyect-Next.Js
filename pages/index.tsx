import React, { useEffect, useState } from 'react'
import ProductList from '@components/ProductList/product-list'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <div style={{ width: '70%', margin: '0 15%', padding: 25 }}>
      <h1 style={{ textAlign: 'center' }}>
        ¡Elegí tú palta favorita para ver sus datos!
      </h1>
      <ProductList products={productList} />
    </div>
  )
}

export default HomePage
