import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { api } from  './services/api'
import './styles/App.css'

/*interface AppProps {

  cep: number,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string

}*/


export function App() {
  const [input, setInput] = useState ('')
  const [cep,setCep] = useState ({})

  async function handleSubmit(){
    if(input === ''){
      alert('Favor preencher o campo abaixo!')
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('')
  
    } catch{
      alert('Insira um cep válido')
      setInput('')
    }
    
  } 
  
  return(
    <>
      <div className='conteinerprincipal'>
        <h1 className='buscador'>Busque seu CEP</h1>
      
        <div className='conteinerinput'>
        <input 
          type='text'
          placeholder='Informe seu cep...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='search' onClick={handleSubmit}>
          <FiSearch className='img'/>
        </button>
        </div>
      
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span className='primeirospan'>Endereço: <span className='bold'>{cep.logradouro}</span></span>
          <span>Complemento: <span className='bold'>{cep.complemento}</span></span>
          <span>Bairro: <span className='bold'>{cep.bairro}</span></span>
          <span>Cidade: <span className='bold'>{cep.localidade}</span></span>
          <span>Estado: <span className='bold'>{cep.uf}</span></span>
        </main>
      
      
      </div>
      
    </>  
  );
}


