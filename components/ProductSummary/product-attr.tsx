import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => (
  <section className="container">
    <Header as="h3">Sobre esta paltita</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">
            Atributos (Va en inglés xq es una api)
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.keys(otherAttributes).map((key) => (
          <Table.Row key={key}>
            <Table.Cell className="attr-name">{key}</Table.Cell>
            <Table.Cell>
              {otherAttributes[key as keyof typeof otherAttributes]}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </section>
)

export default ProductAttributes
