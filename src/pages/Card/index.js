import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>

            <td>
              <img src="https://static.netshoes.com.br/produtos/carro-eletrico-infantil-bel-brink-esporte-bmw-i8-12v-com-controle-remoto-branco/14/DLW-0120-014/DLW-0120-014_zoom1.jpg?ts=1637345352&ims=544x" alt="" />
            </td>

            <td>
              <strong>Carrinho muito massa</strong>
              <span>R$350,00</span>
            </td>

            <td>
              <div>

              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>

              <input type="number" readOnly value={3} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>

              </div>
            </td>

            <td>
              <strong>R$1050,00</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>

          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1040,00</strong>
        </Total>
      </footer>
    </Container>
  )
}


