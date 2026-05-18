'use client'

import React, { useState } from 'react'

export function PintchSwitch() {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => setIsOn(p => !p)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <button
      role="switch"
      aria-checked={isOn}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className={[
        'relative flex items-center',
        'w-[120px] h-[46px] rounded-full',
        'cursor-pointer outline-none select-none',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400',
        'bg-[#e8e8e8] dark:bg-[#151518]',
        'shadow-[inset_3px_3px_7px_rgba(0,0,0,0.09),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]',
        'dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(50,50,65,0.35)]',
      ].join(' ')}
    >
      {/* Left dot — visible when ON */}
      <span
        aria-hidden="true"
        className={[
          'pointer-events-none absolute left-[13px]',
          'w-[5px] h-[5px] rounded-full',
          'bg-[#a8b8c4] dark:bg-[#607a8c]',
          'transition-opacity duration-300',
          isOn ? 'opacity-60' : 'opacity-0',
        ].join(' ')}
      />

      {/* Right dot — orange, visible when OFF */}
      <span
        aria-hidden="true"
        className={[
          'pointer-events-none absolute right-[13px]',
          'w-[5px] h-[5px] rounded-full',
          'bg-[#f05a00] dark:bg-[#ff6820]',
          'transition-opacity duration-300',
          isOn ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      />

      {/* Thumb */}
      <span
        aria-hidden="true"
        className={[
          'pointer-events-none absolute top-[3px] left-[3px]',
          'flex items-center justify-center gap-[4px]',
          'px-[3px] h-[40px] rounded-full',
          'bg-[#e5e5e5] dark:bg-[#2a2a32]',
          'transition-transform duration-300 ease-in-out',
          // Light: strong white top-highlight + soft bottom shadow
          // Dark: replace white highlights with low-opacity light tint; keep the bottom shadow heavy
          'shadow-[0_3px_10px_rgba(0,0,0,0.35),inset_0px_8px_8px_rgba(255,255,255,0.9),inset_2px_-1px_8px_rgba(0,0,0,0.12)]',
          'dark:shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0px_6px_8px_rgba(255,255,255,0.07),inset_0px_-4px_8px_rgba(0,0,0,0.55),inset_1px_1px_0px_rgba(255,255,255,0.06)]',
          isOn ? 'translate-x-[42px]' : 'translate-x-0',
        ].join(' ')}
      >
        {/* knob1 */}
        <span
          className={[
            'w-[31px] h-[31px] rounded-full',
            // Light: bright fill + crisp top-left highlight + soft inset shadow
            'bg-[#f0f0f0]',
            'shadow-[inset_2px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_8px_rgba(255,255,255,0.95),inset_-1px_-1px_0px_rgba(255,255,255,1)]',
            // Dark: muted slate fill; very subtle top-left light catch; strong bottom-right depression
            'dark:bg-[#3c3c48]',
            'dark:shadow-[inset_2px_3px_8px_rgba(0,0,0,0.55),inset_-2px_-2px_6px_rgba(255,255,255,0.055),inset_1px_1px_0px_rgba(255,255,255,0.04)]',
          ].join(' ')}
        />
        {/* knob2 */}
        <span
          className={[
            'w-[31px] h-[31px] rounded-full',
            'bg-[#f0f0f0]',
            'shadow-[inset_2px_3px_8px_rgba(0,0,0,0.12),inset_-4px_-4px_10px_rgba(255,255,255,1),inset_-2px_-2px_0px_rgba(255,255,255,1)]',
            'dark:bg-[#3c3c48]',
            'dark:shadow-[inset_2px_3px_8px_rgba(0,0,0,0.55),inset_-3px_-3px_8px_rgba(255,255,255,0.05),inset_-1px_-1px_0px_rgba(0,0,0,0.3)]',
          ].join(' ')}
        />
      </span>
    </button>
  )
}

export default PintchSwitch