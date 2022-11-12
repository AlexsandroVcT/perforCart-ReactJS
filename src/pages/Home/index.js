import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

export default function Home() {
  return (
    <ProductList>
      {/* Produto 0 */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/carro-eletrico-infantil-bel-brink-esporte-bmw-i8-12v-com-controle-remoto-branco/14/DLW-0120-014/DLW-0120-014_zoom1.jpg?ts=1637345352&ims=544x" alt="Carro"
        />
        <strong>Carro Eletronico</strong>
        <span>R$350,90</span>

        <button type="button">
          <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      {/* Produto 1 */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/carrinho-rolima-eletrico-importway-bw189am-amarelo/30/JVY-0239-030/JVY-0239-030_zoom1.jpg?ts=1659108916&ims=544x" alt="Carro"
        />
        <strong>Carro Eletronico</strong>
        <span>R$350,90</span>

        <button type="button">
          <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      {/* Produto 2 */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/carro-eletrico-infantil-rosa-volkswagen-beetle/18/746-9722-018/746-9722-018_zoom1.jpg?ts=1668193962&ims=544x" alt="Carro"
        />
        <strong>Carro Eletronico</strong>
        <span>R$350,90</span>

        <button type="button">
          <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      {/* Produto 3 */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/carro-eletrico-infantil-preto-bel-fix-bmw-i8-coupe/08/746-9607-008/746-9607-008_zoom1.jpg?ts=1625858274&ims=544x" alt="Carro"
        />
        <strong>Carro Eletronico</strong>
        <span>R$350,90</span>

        <button type="button">
          <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      {/* Produto 4 */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/hoverkart-pro-drop-carrinho-para-hoverboard-cinza-(hoverboard-nao-incluso)/10/GI5-0013-010/GI5-0013-010_zoom1.jpg?ts=1660731282&ims=544x" alt="Carro"
        />
        <strong>Carro Eletronico</strong>
        <span>R$350,90</span>

        <button type="button">
          <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      {/* Produto 5 */}
      <li>
        <img src="https://static.netshoes.com.br/produtos/mini-carro-eletrico-discovery-importway-6v-bw080br-branco/14/JVY-0293-014/JVY-0293-014_zoom1.jpg?ts=1664527436&ims=544x" alt="Carro"
        />
        <strong>Carro Eletronico</strong>
        <span>R$350,90</span>

        <button type="button">
          <div>
        <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

    </ProductList>
  )
  // <h1>Home Funcionando</h1>
}


