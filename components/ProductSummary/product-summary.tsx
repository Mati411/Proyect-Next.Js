import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import ProductAttributes from './product-attr'

import style from './product-summary.module.css'

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <div className={style.container}>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <img src={product.image} alt={product.name} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{product.name}</Item.Header>
          <Item.Description>
            <p>U$D {product.price}</p>
            <Label>{`ID Producto: ${product.sku}`}</Label>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProductAttributes {...product.attributes} />
  </div>
)

export default ProductSummary
