import { LinkButton } from '@/components/LinkButton'
import { MdOutlineCatchingPokemon } from 'react-icons/md'

export default function Home() {
  const date = new Date()
  const currentHour = date.getHours()

  let currentShift = 'Boa noite'
  if (currentHour < 12) {
    currentShift = 'Bom dia'
  } else if (currentHour < 18) {
    currentShift = 'Boa tarde'
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl">3C Frontend</h1>
      <p className="text-gray-300">{currentShift}, seja bem vindo.</p>
      <LinkButton href="/list">
        <MdOutlineCatchingPokemon />
        Ver pokemons
      </LinkButton>
    </div>
  )
}
