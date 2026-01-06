import type { PropsWithChildren } from 'react'

type Variant = 'default' | 'secondary' | 'outline'

export function Badge({
  variant = 'secondary',
  children,
  className,
}: PropsWithChildren<{ variant?: Variant; className?: string }>) {
  const base =
    'font-ui inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition'

  const variants: Record<Variant, string> = {
    default:
      'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-sm',
    secondary:
      'border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]',
    outline:
      'border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))]',
  }

  return <span className={`${base} ${variants[variant]} ${className ?? ''}`}>{children}</span>
}









