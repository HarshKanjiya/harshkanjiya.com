'use client'

import React, { useState } from 'react'
import styles from './toggle.module.css'
import { useSound } from '@/hooks/use-sound'

export function Toggle() {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => setIsOn(p => !p)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  const playClick = useSound("/audio/ui-sounds/toggle.mp3");

  return (
    <button
      role="switch"
      aria-checked={isOn}
      onClick={() => {
        toggle();
        playClick();
      }}
      onKeyDown={handleKeyDown}
      className={`${styles.track} relative flex items-center w-[88px] h-[44px] rounded-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 select-none bg-[#e8e8e8] dark:bg-[#151518]`}
    >
      {/* Left dot — subtle, visible when ON */}
      <span
        className={`pointer-events-none absolute left-[11px] top-[19px] w-[6px] h-[6px] rounded-full bg-[#a8b8c4] dark:bg-[#607a8c] transition-opacity duration-300 ${isOn ? 'opacity-70' : 'opacity-0'}`}
      />

      {/* Right dot — orange, visible when OFF */}
      <span
        className={`pointer-events-none absolute right-[11px] top-[19px] w-[6px] h-[6px] rounded-full bg-[#f05a00] dark:bg-[#ff6820] transition-opacity duration-300 ${isOn ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Thumb — raised pintch button */}
      <span
        className={`${styles.thumb} pointer-events-none absolute top-[4px] left-[4px] w-[36px] h-[36px] rounded-full bg-[#f8f8f8] dark:bg-[#2a2a32] transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-[44px]' : 'translate-x-0'}`}
      />
    </button>
  )
}

export default Toggle
