import { useEffect, useMemo, useState } from 'react'

type Slide = { src: string; alt: string }

export function ProjectGalleryModal({
  open,
  title,
  slides,
  initialIndex = 0,
  onClose,
}: {
  open: boolean
  title: string
  slides?: Slide[]
  initialIndex?: number
  onClose: () => void
}) {
  const safeSlides = useMemo(() => slides ?? [], [slides])
  const [index, setIndex] = useState(initialIndex)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (!open) return
    setIndex(initialIndex)
    setImgError(false)
  }, [open, initialIndex])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (safeSlides.length === 0) return
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % safeSlides.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose, safeSlides.length])

  if (!open) return null

  const current = safeSlides[index]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="w-full max-w-8xl overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl">
        <div className="flex items-center justify-between gap-3 border-b border-[hsl(var(--border))] p-4 sm:p-5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[hsl(var(--foreground))]">{title}</p>
            <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
              {safeSlides.length > 0 ? `${index + 1} / ${safeSlides.length}` : '이미지 준비중'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-transparent px-3 py-2 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
          >
            닫기
          </button>
        </div>

        <div className="relative bg-black/5 p-3 sm:p-4">
          {safeSlides.length === 0 ? (
            <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--card))]">
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                이미지가 아직 준비되지 않았습니다.
              </p>
            </div>
          ) : imgError ? (
            <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--card))]">
              <div className="text-center">
                <p className="text-sm font-medium text-[hsl(var(--foreground))]">이미지를 불러오지 못했습니다.</p>
                <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                  파일이 `public` 아래에 있는지 확인해 주세요.
                </p>
                <p className="mt-2 break-all text-xs text-[hsl(var(--muted-foreground))]">{current?.src}</p>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-black/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] w-full object-contain"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            </div>
          )}

          {safeSlides.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length)}
                className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/90 px-3 py-2 text-sm text-[hsl(var(--foreground))] shadow hover:bg-[hsl(var(--muted))]"
                aria-label="이전 이미지"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % safeSlides.length)}
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/90 px-3 py-2 text-sm text-[hsl(var(--foreground))] shadow hover:bg-[hsl(var(--muted))]"
                aria-label="다음 이미지"
              >
                ›
              </button>
            </>
          ) : null}
        </div>

        {safeSlides.length > 1 ? (
          <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[hsl(var(--border))] p-3">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`슬라이드 ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--border))]'
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}


