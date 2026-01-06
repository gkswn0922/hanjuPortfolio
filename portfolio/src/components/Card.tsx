import type { PropsWithChildren } from 'react'

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
      {children}
    </div>
  )
}








