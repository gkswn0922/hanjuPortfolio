import type { PropsWithChildren } from 'react'

export function Timeline({ children }: PropsWithChildren) {
  return <div className="relative grid gap-4">{children}</div>
}

export function TimelineItem({
  title,
  subtitle,
  children,
}: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <div className="relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
      <div className="absolute left-0 top-7 hidden h-[calc(100%-56px)] w-px bg-[hsl(var(--border))] sm:block" />
      <div className="absolute left-0 top-6 hidden size-3 -translate-x-1/2 rounded-full border-2 border-[hsl(var(--background))] bg-[hsl(var(--primary))] sm:block" />

      <div className="sm:pl-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-[hsl(var(--foreground))]">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm text-[hsl(var(--muted-foreground))]">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}









