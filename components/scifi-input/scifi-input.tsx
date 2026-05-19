'use client'

import { cn } from '@/lib/utils'
import type { Transition } from 'motion/react'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'

interface ScifiInputProps {
  placeholder?: string
  buttonLabel?: string
  onSubmit?: (value: string) => void
  className?: string
}

// The four corner bracket decorations
function CornerBrackets() {
  return (
    <>
      <div className='flex items-start flex-col absolute -top-5 -left-5'>
        <div className='bg-[#777] w-[10px] h-px absolute left-1/2 top-1/2 -translate-1/2' />
        <div className='bg-[#777] w-px h-[10px] absolute left-1/2 top-1/2 -translate-1/2' />
      </div>
      <div className='flex items-start flex-col absolute -bottom-5 -right-5'>
        <div className='bg-[#777] w-[10px] h-px absolute left-1/2 top-1/2 -translate-1/2' />
        <div className='bg-[#777] w-px h-[10px] absolute left-1/2 top-1/2 -translate-1/2' />
      </div>
      <div className='flex items-start flex-col absolute -top-5 -right-5'>
        <div className='bg-[#777] w-[10px] h-px absolute left-1/2 top-1/2 -translate-1/2' />
        <div className='bg-[#777] w-px h-[10px] absolute left-1/2 top-1/2 -translate-1/2' />
      </div>
      <div className='flex items-start flex-col absolute -bottom-5 -left-5'>
        <div className='bg-[#777] w-[10px] h-px absolute left-1/2 top-1/2 -translate-1/2' />
        <div className='bg-[#777] w-px h-[10px] absolute left-1/2 top-1/2 -translate-1/2' />
      </div>
    </>
  )
}

function BorderElements() {
  return (
    <>
      <div className='absolute left-[12px] top-0 w-[calc(100%-24px)] h-px bg-muted' />
      <div className='absolute left-[12px] bottom-0 w-[calc(100%-24px)] h-px bg-muted' />
      <div className='absolute left-0 top-[12px] h-[calc(100%-24px)] w-px bg-muted' />
      <div className='absolute right-0 top-[12px] h-[calc(100%-24px)] w-px bg-muted' />
    </>
  )
}

function CornerL({ isActive }: { isActive: boolean }) {
  return (
    <>
      <div className={cn('flex items-start flex-col absolute top-0 left-0 transition-all duration-300 ease-in-out', isActive ? '-translate-x-3 -translate-y-3' : 'translate-x-0 translate-y-0')}>
        <div className='bg-foreground w-[8px] h-px absolute left-0 top-0' />
        <div className='bg-foreground w-px h-[8px] absolute left-0 top-0' />
      </div>
      <div className={cn('flex items-start flex-col absolute top-0 right-0 transition-all duration-300 ease-in-out', isActive ? 'translate-x-3 -translate-y-3' : 'translate-x-0 translate-y-0')}>
        <div className='bg-foreground w-[8px] h-px absolute right-0 top-0' />
        <div className='bg-foreground w-px h-[8px] absolute right-0 top-0' />
      </div>
      <div className={cn('flex items-start flex-col absolute bottom-0 left-0 transition-all duration-300 ease-in-out', isActive ? '-translate-x-3 translate-y-3' : 'translate-x-0 translate-y-0')}>
        <div className='bg-foreground w-[8px] h-px absolute left-0 bottom-0' />
        <div className='bg-foreground w-px h-[8px] absolute left-0 bottom-0' />
      </div>
      <div className={cn('flex items-start flex-col absolute bottom-0 right-0 transition-all duration-300 ease-in-out', isActive ? 'translate-x-3 translate-y-3' : 'translate-x-0 translate-y-0')}>
        <div className='bg-foreground w-[8px] h-px absolute right-0 bottom-0' />
        <div className='bg-foreground w-px h-[8px] absolute right-0 bottom-0' />
      </div>
    </>
  )
}

// The stacked orange bar decorations on each side
const BAR_COUNT = 6
const WAVE_DURATION = 3
// Center index (midpoint between bar 2 and 3 for even count)
const CENTER = (BAR_COUNT - 1) / 2

function SideBarColumn({
  direction,
  isActive,
}: {
  direction: 'up' | 'down'
  isActive: boolean
}) {
  return (
    <div className='gap-px h-full w-3 rounded-[2px] flex flex-col justify-around'>
      {Array.from({ length: BAR_COUNT }, (_, i) => {
        // Default: directional wave stagger
        const directionalIndex = direction === 'down' ? i : BAR_COUNT - 1 - i
        const directionalDelay = (directionalIndex / BAR_COUNT) * WAVE_DURATION

        // Hover: center-out stagger — bars closer to center animate first
        const distFromCenter = Math.abs(i - CENTER)
        const maxDist = CENTER
        const centerOutDelay = (distFromCenter / maxDist) * (WAVE_DURATION * 0.4)

        const delay = isActive ? centerOutDelay : directionalDelay

        return (
          // Stable outer key keeps AnimatePresence alive; inner key triggers exit/enter on mode change
          <AnimatePresence key={i} mode='sync'>
            <motion.div
              key={`${i}-${isActive}`}
              className='rounded-[1px] bg-orange-500 w-full h-[4px]'
              initial={{ opacity: 0.2 }}
              exit={{ opacity: 0.2, transition: { duration: 0.5, ease: 'easeOut' } }}
              animate={{ opacity: [0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2] }}
              transition={{
                duration: WAVE_DURATION,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                delay,
              }}
            />
          </AnimatePresence>
        )
      })}
    </div>
  )
}

function SideBars({ isActive }: { isActive: boolean }) {
  return (
    <>
      <div className='absolute top-[6px] left-[6px] h-[calc(100%-12px)] w-3'>
        <SideBarColumn direction='down' isActive={isActive} />
      </div>
      <div className='absolute top-[6px] right-[6px] h-[calc(100%-12px)] w-3'>
        <SideBarColumn direction='up' isActive={isActive} />
      </div>
    </>
  )
}


export function ScifiInput({
  placeholder = 'ENTER YOUR EMAIL',
  buttonLabel = 'SUBSCRIBE',
  onSubmit,
  className,
}: ScifiInputProps) {
  const [value, setValue] = useState('')
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    onSubmit?.(value)
  }

  return (
    <div
      className={cn('relative inline-flex items-center p-1 px-6 mx-6', className)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => !inputRef.current?.matches(':focus') && setIsActive(false)}
    >
      <BorderElements />

      <CornerL isActive={isActive} />

      {/* Corner brackets */}
      <CornerBrackets />
      {/* Main container */}
      <motion.div
        transition={{ duration: 0.3, ease: 'easeInOut' as const }}
        className="flex items-center bg-background overflow-hidden"
        style={{ borderRadius: 0 }}
      >

        <SideBars isActive={isActive} />
        {/* Input */}
        <input
          ref={inputRef}
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          placeholder={placeholder}
          className={cn(
            'flex-1 min-w-[200px] bg-transparent px-4 py-3',
            'text-xs font-mono tracking-widest uppercase',
            'outline-none border-none focus:ring-0',
            'transition-colors duration-300',
            isActive && 'placeholder:text-zinc-500',
          )}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />

        {/* Submit button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
          className={cn(
            'px-5 py-3 text-xs font-mono tracking-widest uppercase cursor-pointer',
            'bg-muted',
            'text-muted-foreground',
            'transition-colors duration-200',
            'outline-none border-none focus:ring-0',
          )}
        >
          {buttonLabel}
        </motion.button>
      </motion.div>
    </div>
  )
}

export default ScifiInput
