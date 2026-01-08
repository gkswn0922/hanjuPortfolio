import type { PropsWithChildren } from 'react'

export function Tag({ children }: PropsWithChildren) {
  return (
    <span className="font-ui inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-3 py-1 text-xs font-medium text-[hsl(var(--muted-foreground))]">
      {children}
    </span>
  )
}











