import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { LinkButton } from '.'

test('link-button contains href prop', () => {
  const href = 'https://google.com'
  const { getByRole } = render(<LinkButton href={href}>Click me</LinkButton>)
  const linkElement = getByRole('link')
  expect(linkElement).toHaveAttribute('href', href)
})

test('link-button displays correct content', () => {
  const buttonText = 'Click me'
  const { getByText } = render(
    <LinkButton href="https://google.com">{buttonText}</LinkButton>,
  )
  expect(getByText(buttonText)).toBeInTheDocument()
})

test('link-button has correct CSS classes', () => {
  const { getByRole } = render(
    <LinkButton href="https://google.com">Click me</LinkButton>,
  )
  const linkElement = getByRole('link')
  expect(linkElement).toHaveClass('mt-4')
  expect(linkElement).toHaveClass('hover:bg-gray-300')
  expect(linkElement).toHaveClass('transition-all')
  expect(linkElement).toHaveClass('duration-300')
  expect(linkElement).toHaveClass('ease-in-out')
  expect(linkElement).toHaveClass('flex')
  expect(linkElement).toHaveClass('items-center')
  expect(linkElement).toHaveClass('gap-2')
  expect(linkElement).toHaveClass('bg-white')
  expect(linkElement).toHaveClass('text-black')
  expect(linkElement).toHaveClass('py-2')
  expect(linkElement).toHaveClass('px-3')
  expect(linkElement).toHaveClass('rounded-md')
})
