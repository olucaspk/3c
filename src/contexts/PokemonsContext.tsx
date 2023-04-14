import { Pokemon } from '@/types/pokemon'
import React, { createContext, useState } from 'react'

interface PokemonsContextData {
  pokemons: Pokemon[] | null
  setPokemons: (pokemons: Pokemon[] | null) => void
}

interface PokemonsContextProviderProps {
  children: React.ReactNode
}

export const PokemonContext = createContext({} as PokemonsContextData)

export default function PokemonContextProvider({
  children,
}: PokemonsContextProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
