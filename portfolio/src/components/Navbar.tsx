import { useEffect, useMemo, useState } from 'react'

import { Container } from './Container'

export type NavItem = { id: string; label: string }

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: '소개' },
  { id: 'skills', label: '핵심 기술' },
  { id: 'projects', label: '프로젝트' },
  { id: 'career', label: '경력' },
  { id: 'contact', label: '연락처' },
]

function useActiveSection(items: NavItem[]) {
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        const top = visible[0]
        const id = (top?.target as HTMLElement | undefined)?.id
        if (id) setActiveId(id)
      },
      {
        root: null,
        // 헤더 높이만큼 고려
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

export function Navbar() {
  const activeId = useActiveSection(NAV_ITEMS)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const go = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => go('top')}
            className="rounded-lg px-2 py-1 text-sm font-semibold tracking-tight text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
            aria-label="맨 위로"
          >
            CHJ's Portfolio
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={
                    'rounded-lg px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] ' +
                    (active
                      ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-sm'
                      : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]')
                  }
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm text-[hsl(var(--muted-foreground))] shadow-sm hover:bg-[hsl(var(--muted))] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            메뉴
            <span className="text-xs text-[hsl(var(--muted-foreground))]">
              {open ? '닫기' : '열기'}
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={
            'md:hidden ' +
            (open
              ? 'pb-4'
              : 'pointer-events-none h-0 overflow-hidden pb-0 opacity-0')
          }
        >
          <div className="grid gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-3 shadow-sm">
            {NAV_ITEMS.map((item) => {
              const active = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className={
                    'w-full rounded-lg px-3 py-2 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] ' +
                    (active
                      ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                      : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]')
                  }
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </Container>
    </header>
  )
}









