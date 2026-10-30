import React from 'react'
import './home.css'
import FAQ from '../components/Acordeao/FAQ.jsx'
import ListaDeJogos from '../components/Paginacao/listaDeJogos.jsx'
import AbaComponent from '../components/Aba/abaComponent.jsx'

const home = () => {
  return (
    <div>
        <h1>Teste</h1>
      <FAQ />
      <ListaDeJogos />
      <AbaComponent />
    </div>
  )
}

export default home
