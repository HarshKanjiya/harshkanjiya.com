'use client';

import { Book } from '@/types/book';
import { PinIcon } from 'lucide-react';
import Image from 'next/image';

const BookItem = ({ title, imageUrl, isCompleted, isReading, recommended }: Book) => {
    const isRead = isCompleted;

    return (
        <div className='border-edge border p-3'>
            <div className="group relative flex flex-col gap-3">
                {
                    recommended && (
                        <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center z-40 rounded-md bg-foreground">
                            <PinIcon className="size-4 rotate-45 text-secondary" />
                            <span className="sr-only">Pinned</span>
                        </span>
                    )
                }

                <div
                    className={`relative min-h-32 aspect-square overflow-hidden rounded-lg border border-edge flex items-center justify-center ${isRead
                        ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950'
                        : 'bg-gray-100 dark:bg-gray-800'
                        } transition-all duration-300 ${!isRead && 'grayscale'}`}
                >
                    <div className={`relative w-16 h-16 ${!isRead && 'grayscale'}`}>
                        <Image
                            src={imageUrl || '/images/book.png'}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="leading-snug font-medium text-sm text-balance text-center line-clamp-3 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    {isReading && (
                        <p className="text-xs text-muted-foreground text-center">Currently reading</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookItem;