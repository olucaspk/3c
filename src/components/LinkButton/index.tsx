import React from 'react'

interface LinkButtonProps {
  href: string
  children: React.ReactNode
}

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <a
      className="mt-4 hover:bg-gray-300 transition-all duration-300 ease-in-out flex items-center gap-2 bg-white text-black py-2 px-3 rounded-md"
      href={href}
    >
      {children}
    </a>
  )
}
