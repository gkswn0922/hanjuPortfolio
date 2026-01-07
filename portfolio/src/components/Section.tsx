import type { PropsWithChildren } from 'react'

import { Container } from './Container'

export function Section({
  id,
  title,
  subtitle,
  children,
}: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <Container>
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 h-1 w-12 rounded-full bg-[hsl(var(--primary))]/70" />
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-2xl">
              {title}
            </h2>
          {subtitle ? (
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {subtitle}
              </p>
          ) : null}
          </div>
        </div>
        {children}
      </Container>
    </section>
  )
}









