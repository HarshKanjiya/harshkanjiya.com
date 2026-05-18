'use client';

import { useState, useEffect } from 'react';
import styles from './realistic-button.module.css';

type TextState = 'off' | 'drawing' | 'on';

export default function RealisticButton() {
    const [isActive, setIsActive] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [textState, setTextState] = useState<TextState>('off');

    useEffect(() => {
        if (isActive) {
            setTextState('drawing');
            const timer = setTimeout(() => setTextState('on'), 900);
            return () => clearTimeout(timer);
        } else {
            setTextState('off');
        }
    }, [isActive]);

    return (
        <div className={`${styles.wrap} sm:scale-[0.6] scale-[0.5]`}>
            <button
                className={`${styles.button} ${isPressed ? styles.buttonPressed : ''} relative overflow-hidden w-[250px] h-[96px] bg-black z-20 border-transparent rounded-[24px]`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => { setIsActive(false); setIsPressed(false); }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                style={{
                    boxShadow: isActive || isPressed
                        ? 'inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -6px 1px -4px #ff7300, inset 0 -15px 6px -8px #cc5500,'
                        : 'inset 0 1px 1px rgb(255 255 255 / 40%), inset 0 -6px 1px -4px #ff7300, inset 0 -15px 6px -8px #ff6600',
                    transform: isPressed ? 'scale(0.94)' : 'scale(1)',
                    transition: isPressed
                        ? 'transform 0.07s ease, box-shadow 0.07s ease'
                        : 'transform 0.2s ease, box-shadow 0.3s ease',
                }}
            >
                <div className={`${styles.corner} absolute opacity-10 transition-all duration-400`}></div>

                <div
                    className={`${styles.inner} z-10 absolute flex items-center justify-center rounded-[20px] transition-all duration-300`}
                    style={{
                        inset: '14px 13px',
                        background: 'linear-gradient(180deg, #232324 5%, #46484b 100%)',
                        boxShadow: 'inset 0 -5px 15px -1px rgba(0, 0, 0, 0.3), inset 0 -4px 3px -3px black, inset 0 -10px 20px -8px rgb(255 255 255 / 40%), inset 0 1px 0 1px rgb(255 255 255 / 20%)'
                    }}
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 184 68"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ overflow: 'visible' }}
                    >
                        {/* {showGlow && (
                            <text
                                x="92"
                                y="34"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className={glowClass}
                            >
                                Start For Free
                            </text>
                        )} */}
                        <text
                            x="92"
                            y="34"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className={isPressed ? styles.svgTextBlink : ''}
                            style={{ fontSize: '26px', fill: isPressed ? 'rgb(147 147 147)' : 'rgb(247 245 243 / 70%)' }}
                        >
                            Start For Free
                        </text>
                    </svg>
                </div>
            </button>

            <div
                className={`${styles.led} absolute z-30 rounded-full w-1.5 h-1.5`}
                style={{
                    top: '100%',
                    marginTop: '14px',
                    backgroundColor: '#f35f3a',
                    boxShadow: '0 -10px 35px 17px #ff5100, inset 0 1px 2px 0px rgba(255, 255, 255, 0.6), 0 0 0px 3px rgb(0 0 0 / 60%), 0 0 2px 4px rgba(152, 81, 0, 0.8)',
                }}
            ></div>

            <div
                className={`${styles.bg} absolute z-10 bg-black rounded-[30px] overflow-hidden`}
                style={{
                    inset: '-5px',
                    boxShadow: isPressed
                        ? '0 20px 10px -10px rgba(0, 0, 0, 0.3), inset 4px 0 18px 6px rgba(0, 0, 0, 0.95), inset -4px 0 18px 6px rgba(0, 0, 0, 0.95), inset 0 4px 18px 6px rgba(0, 0, 0, 0.95), inset 0 -4px 18px 6px rgba(0, 0, 0, 0.95)'
                        : isActive
                            ? '0 20px 10px -10px rgba(0, 0, 0, 0.3), inset 0 0 28px 10px rgba(255, 100, 0, 0.45)'
                            : '0 20px 10px -10px rgba(0, 0, 0, 0.3)',
                    transition: isPressed ? 'box-shadow 0.07s ease' : 'box-shadow 0.25s ease',
                }}
            >
                <div
                    className="absolute inset-0 rounded-[30px] z-10 pointer-events-none"
                    style={{
                        boxShadow:
                            'inset 0 -2px 0px -1px rgb(120 176 255 / 32%), inset 0 0 5px 1px black, inset 0 0 0 1px black',
                    }}
                ></div>
                <div
                    className={`${styles.shine1} absolute`}
                    style={{
                        width: '10px',
                        height: '10px',
                        left: '50%',
                        bottom: '0',
                        transform: 'translateX(-50%)',
                        margin: 'auto',
                        borderRadius: '50%',
                        filter: 'blur(2px)',
                        backgroundColor: 'rgb(255, 115, 0)',
                    }}
                ></div>
                <div className={`${styles.shine2} absolute transition-all duration-500 opacity-0`}></div>
            </div>

            <div className={`${styles.bgGlow} absolute z-0 transition-all duration-500`}></div>
        </div>
    );
}
