import { LinkButton } from '@/components/LinkButton'
import useData from '@/hooks/useData'
import { Pokemon } from '@/types/pokemon'
import { MdHome } from 'react-icons/md'

export default function List() {
  const { pokemons } = useData()

  if (!pokemons) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-[900px] p-8 m-auto">
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Lista</h1>
        <LinkButton href="/">
          <MdHome />
          Voltar para Home
        </LinkButton>
      </header>

      <main className="mt-4">
        <div className="flex flex-col gap-2">
          {pokemons?.map((pokemon: Pokemon) => (
            <div
              className="bg-white rounded-md w-min text-black py-2 px-3"
              key={pokemon.name}
            >
              {pokemon.name}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
