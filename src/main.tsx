import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import App from './App'
import PokemonContextProvider from './contexts/PokemonsContext'
import { queryClient } from './server/reactQuery'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PokemonContextProvider>
  </React.StrictMode>,
)
