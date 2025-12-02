'use client'

import { useEffect, useState } from 'react'

export const TechTag = ({ children }: { children: string }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span
      className={`
        py-2 px-3 text-xs opacity-70 rounded-lg text-center bg-[#10132E]
        ${isClient ? 'lg:py-4 lg:px-3 lg:text-base' : ''}
        transition-all duration-300
      `}
    >
      {children}
    </span>
  )
}