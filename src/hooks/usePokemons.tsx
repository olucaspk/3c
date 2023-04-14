import { PokemonContext } from '@/contexts/PokemonsContext'
import { useContext } from 'react'

export function usePokemons() {
  return useContext(PokemonContext)
}
