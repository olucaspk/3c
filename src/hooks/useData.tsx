import { api } from '@/server/api'
import { queryClient } from '@/server/reactQuery'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import useLocalStorage from './useLocalStorage'
import { usePokemons } from './usePokemons'

export default function useData() {
  const { pokemons, setPokemons } = usePokemons()
  const [pokemonsStorage, setPokemonsStorage] = useLocalStorage(
    'pokemons',
    null,
  )

  const { isFetched } = useQuery(
    'pokemons',
    async () => {
      const { data } = await api.get('/pokemon')
      return data.results
    },
    {
      enabled: false,
      onSuccess: (data) => {
        setPokemons(data)
        setPokemonsStorage(data)
      },
    },
  )

  useEffect(() => {
    if (pokemons && pokemons.length > 0) return

    if (pokemonsStorage) {
      // console.log('exists in storage', { pokemonsStorage })
      setPokemons(pokemonsStorage)
      return
    }

    // console.log('does not exists in storage', { pokemonsStorage })
    isFetched || queryClient.prefetchQuery('pokemons')
  }, [pokemons, pokemonsStorage, setPokemons, setPokemonsStorage, isFetched])

  return { pokemons }
}
