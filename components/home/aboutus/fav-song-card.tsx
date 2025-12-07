"use client";

import { FAVORITE_SONG } from '@/data/user';
import { CirclePattern } from '../circle-pattern';
import { useState } from 'react';

const FavSongCard = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="flex items-center justify-between flex-1 flex-col border-edge border h-full rounded-xl overflow-hidden bg-accent dark:bg-accent/50">
            <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left">
                Recent Favorite
            </h3>
            <div className="p-0.5 pt-0 flex-1 h-full rounded-md flex w-full">
                <div className="flex-1 px-3 py-2 flex flex-col bg-background outline outline-muted/50 rounded-[10px] relative overflow-hidden group w-full"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <p className="max-h-[150px] overflow-hidden text-base mt-5 group-hover:-translate-y-2 ease-out transition-transform duration-300">
                        <span className="line-clamp-4 text-ellipsis text-center text-base sm:text-lg text-muted-foreground">
                            I&apos;m enjoying {" "}
                            <a className="font-semibold underline" href={FAVORITE_SONG.songUrl}>
                                <span className='text-foreground' dangerouslySetInnerHTML={{ __html: FAVORITE_SONG.title }}></span>
                            </a>{" "}
                            by{" "}
                            <a
                                className="font-semibold"
                                href={`https://open.spotify.com/artist/${FAVORITE_SONG.artistId}`}
                            >
                                <span className='text-foreground' dangerouslySetInnerHTML={{ __html: FAVORITE_SONG.artist }}></span>
                            </a>{" "}
                            from the album{" "}
                            <a
                                className="font-semibold break-keep"
                                href={`https://open.spotify.com/album/${FAVORITE_SONG.albumId}`}
                            >
                                <span className='text-foreground' dangerouslySetInnerHTML={{ __html: FAVORITE_SONG.albumName }}></span>
                            </a>
                        </span>
                    </p>
                    <div className="user-select-none pointer-events-none absolute z-2 -bottom-8 left-1/2 -translate-x-1/2 translate-y-6 transition-transform duration-500 group-hover:-translate-y-6 ease-out">
                        <Record albumImageUrl={FAVORITE_SONG.albumImageUrl} />
                    </div>
                    <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 z-4 group-hover:translate-y-6 ease-out transition-transform duration-500">
                        <div
                            className="h-[210px] w-[210px] rounded-sm bg-cover bg-center shadow-md"
                            style={{ backgroundImage: `url(${FAVORITE_SONG.albumImageUrl})` }}
                        ></div>
                    </div>
                    <span className="absolute -bottom-32 left-1/2 -translate-x-1/2 z-1">
                        <CirclePattern isHovered={hovered} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FavSongCard




function Record({
    albumImageUrl,
}: {
    albumImageUrl: string;
}) {
    return (
        <svg
            width="179"
            height="171"
            viewBox="0 0 179 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="89.5" cy="104.5" r="89.5" fill="#3C3C3F" />
            <circle
                cx="89.501"
                cy="104.5"
                r="87.06"
                stroke="#6C6D70"
                strokeWidth="1.3"
            />
            <circle
                cx="89.4992"
                cy="104.5"
                r="80.3"
                stroke="#4D4E52"
                strokeWidth="0.5"
            />
            <circle
                cx="89.4995"
                cy="104.5"
                r="69.56"
                stroke="#4D4E52"
                strokeWidth="0.5"
            />
            <circle
                cx="89.4995"
                cy="104.5"
                r="65.98"
                stroke="#4D4E52"
                strokeWidth="0.5"
            />
            <circle
                cx="89.4999"
                cy="104.5"
                r="49.87"
                stroke="#4D4E52"
                strokeWidth="0.5"
            />
            <g
                style={{ transformOrigin: "89.5001px 104.5px" }}
            >
                <circle
                    cx="89.5001"
                    cy="104.5"
                    r="39.13"
                    fill="#4D4E52"
                    stroke="#4D4E52"
                    strokeWidth="0.5"
                />
                <clipPath id="albumClip">
                    <circle cx="89.5001" cy="104.5" r="35" />
                </clipPath>
                <image
                    href={albumImageUrl}
                    x="54.5001"
                    y="69.5"
                    width="70"
                    height="70"
                    clipPath="url(#albumClip)"
                />
            </g>
            <circle cx="89.5009" cy="104.5" r="3.58" fill="#4D4E52" />
            <circle
                cx="89.5009"
                cy="104.5"
                r="3.33"
                stroke="white"
                strokeOpacity="0.3"
                strokeWidth="0.5"
            />
            <g filter="url(#filter0_f_161_134)">
                <path
                    d="M88.5 97L46 26C84.8 5.60003 121.833 18.5 135.5 27.5L88.5 97Z"
                    fill="white"
                    fillOpacity="0.15"
                    style={{ mixBlendMode: "soft-light" }}
                />
            </g>
            <path
                d="M60 22.5C69.6667 18.6667 95.1 13.3 119.5 22.5"
                stroke="url(#paint0_linear_161_134)"
            />
            <path
                d="M59 46C73.5 38.5 96 34 118.5 45.5"
                stroke="url(#paint1_linear_161_134)"
                strokeOpacity="0.3"
            />
            <defs>
                <filter
                    id="filter0_f_161_134"
                    x="31"
                    y="0.119873"
                    width="119.5"
                    height="111.88"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="7.5"
                        result="effect1_foregroundBlur_161_134"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_161_134"
                    x1="60"
                    y1="19.9601"
                    x2="119.5"
                    y2="19.9601"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.51" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_161_134"
                    x1="60"
                    y1="40.9601"
                    x2="119.5"
                    y2="40.9601"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.51" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}