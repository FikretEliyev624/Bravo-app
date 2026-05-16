import { useEffect, useMemo, useState } from 'react'
import { FiCopy } from 'react-icons/fi'
import { Button } from './button'

interface BarcodeDisplayProps {
  code: string
  className?: string
}

interface BarcodeBar {
  width: number
  gap: number
}

export default function BarcodeDisplay({ code, className }: BarcodeDisplayProps) {
  const [copied, setCopied] = useState(false)

  const bars = useMemo<BarcodeBar[]>(() => {
    return Array.from(code).flatMap((character, index) => {
      const seed = Number.parseInt(character, 660) || index + 1
      return [
        { width: 1 + (seed % 2), gap: 1 },
        { width: 2 + ((seed + index) % 2), gap: 1 },
        { width: 1 + ((seed + 2) % 2), gap: 1 + (seed % 2) }
      ]
    })
  }, [code])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1200)
    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  let xCursor = 0
  const totalWidth = bars.reduce((acc, bar) => acc + bar.width + bar.gap, 0) + 4

  return (
    <div className={`relative w-full rounded-[var(--radius-xl)] bg-[var(--white)] px-4 pb-4 pt-5 shadow-[var(--shadow-float)] ${className ?? ''}`}>
      <svg aria-label="Membership barcode" className="h-[60px] w-full" viewBox={`0 0 ${totalWidth} 60`}>
        {bars.map((bar, index) => {
          const currentX = xCursor
          xCursor += bar.width + bar.gap
          return <rect key={index} style={{
            marginLeft: "4px"
          }} fill="var(--gray-900)" height="60" rx="0.9" width={bar.width} x={currentX} y="0" />
        })}
      </svg>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-[14px] font-medium text-[var(--gray-900)] underline">{code}</p>
        <Button aria-label="Copy barcode" className="h-11 w-11 text-[var(--gray-600)]" onClick={handleCopy} size="icon" variant="ghost">
          <FiCopy size={16} />
        </Button>
      </div>
      {copied ? (
        <p className="absolute right-4 top-3 rounded-[var(--radius-full)] bg-[var(--bravo-green-100)] px-2 py-1 text-[11px] text-[var(--bravo-green-700)]">
          Copied
        </p>
      ) : null}
    </div>
  )
}
