export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost'

export function buttonStyles(variant: ButtonVariant = 'default') {
  const base =
    'font-ui inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] disabled:pointer-events-none disabled:opacity-50'

  const variants: Record<ButtonVariant, string> = {
    default:
      'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90',
    secondary:
      'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]/80',
    outline:
      'border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]',
    ghost:
      'bg-transparent text-[hsl(var(--foreground))] shadow-none hover:bg-[hsl(var(--muted))]',
  }

  return `${base} ${variants[variant]}`
}










