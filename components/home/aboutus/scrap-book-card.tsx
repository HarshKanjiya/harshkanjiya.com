"use client";
import { USER } from "@/data/user";
import { getRandomNumberInRange } from "@/lib/getRandomNumberInRange";
import { useElementBoundingRect } from "@/lib/useelementBoundingRect";
import { useRotationVelocity } from "@/lib/useRotationVelocity";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useClickAnyWhere, useMediaQuery } from "usehooks-ts";


function Sticker({
  children,
  index = 1,
  caption,
  className,
  preventYOffsetOnMobile: preventYOffset,
}: {
  children: React.ReactNode;
  index: number;
  caption?: string;
  className?: string;
  preventYOffsetOnMobile?: boolean;
}) {
  // Create refs for the sticker and caption, and set up measurement of elements
  const itemRef = useRef<HTMLDivElement | null>(null);
  const boundingRect = useElementBoundingRect(itemRef);

  // Manage state of stickers
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const [isCaptionVisible, setIsCaptionVisible] = useState<Boolean>(false);
  const [isModal, setIsModal] = useState<Boolean>(false);

  // Set up initial values persisted in state even while dragging
  const [initialRotation] = useState<number>(getRandomNumberInRange(-15, 15));
  const [initialY] = useState<number>(
    getRandomNumberInRange(10, 25) *
    (index === 0 ? 1 : index % 2 === 0 ? -0.5 : 0.5),
  );

  // Handle smaller devices with different behavior
  const matches = useMediaQuery("(max-width: 768px)");

  function onOpen() {
    if (matches) {
      setIsModal(!isModal);
      setIsCaptionVisible(!isModal);
    }
  }

  function onStart() {
    if (!matches) {
      // setDirty && setDirty(true)
      setIsCaptionVisible(true);
      setIsDragging(true);
    }
  }

  function onEnd() {
    if (!matches) {
      setIsCaptionVisible(false);
      setIsDragging(false);
    }
  }

  useClickAnyWhere((e) => {
    if (
      e.target != itemRef.current &&
      !itemRef.current?.contains(e.target as Node) &&
      isModal &&
      matches
    ) {
      setIsModal(false);
      setIsCaptionVisible(false);
    }
  });

  // Setup rotation based on speed of drag
  const { rotate, x } = useRotationVelocity(initialRotation);

  const stickerVariants = {
    default: {},
    modal: {
      x: -boundingRect.x / 2 + boundingRect.width,
      rotate: 0,
      scale: 1.2,
      zIndex: 1000,
    },
    dragging: {
      scale: 1.2,
      zIndex: 1000,
    },
  };

  return (
    <motion.div
      ref={itemRef}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
          y: 10,
        },
        shown: {
          opacity: 1,
          scale: 1,
          y: matches && preventYOffset ? Math.abs(initialY) : initialY,
        },
      }}
      style={{
        zIndex: isModal || isDragging ? 1000 : undefined,
      }}
      className={cn("relative cursor-grab active:cursor-grabbing", className)}
    >
      <motion.div
        variants={stickerVariants}
        className={cn(
          "flex-shrink-1 relative h-fit min-w-[96px] drop-shadow-lg",
        )}
        drag={!matches}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{
          power: 0.1,
          bounceStiffness: 200,
        }}
        dragElastic={0.8}
        style={{
          rotate: isModal ? 0 : rotate,
          x,
        }}
        animate={
          matches
            ? isModal
              ? "modal"
              : "default"
            : isDragging
              ? "dragging"
              : "default"
        }
        onTap={onOpen}
        onHoverStart={onStart}
        onHoverEnd={onEnd}
        onDragEnd={onEnd}
      >
        <div className="pointer-events-none select-none">{children}</div>

        <AnimatePresence>
          {caption && caption.length > 0 && isCaptionVisible && (
            <motion.div
              key="child"
              initial={{ opacity: 0, y: -48, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 0.9 }}
              exit={{ opacity: 0, y: -48, scale: 0.5 }}
              style={{
                left: `50%`,
                x: `-50%`,
              }}
              className={cn(
                "pointer-events-none absolute top-full z-10 mx-auto mt-2 min-w-[160px] !text-base max-w-screen-sm select-none text-balance rounded-sm bg-white/95 px-3 py-2 text-center text-[10px] text-black backdrop-blur-3xl",
              )}
            >
              {caption}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

const ScrapBookCard = () => {
  const container = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      transition: {
        delayChilcren: 0,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="flex items-center justify-between flex-1 flex-col border-edge border h-full rounded-xl bg-accent2">
      <h3 className="font-medium w-full py-1.5 px-2 text-lg opacity-50 text-center">
        Scrap Book
      </h3>
      <div className="p-1.5 pt-0 flex-1 h-full rounded-md flex w-full">
        <div className="flex-1 px-3 py-2 flex flex-col border border-edge bg-accent dark:bg-accent/50 rounded-lg relative group w-full">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_40%,transparent_100%)] dark:opacity-30"></div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="shown"
            className="-mt-8 h-full w-full flex flex-col justify-center items-center gap-12"
          >
            <Sticker
              caption="THAT Conference was my favorite tech event of 2024! I even kicked off my speaking season with my very first talk of the year there!"
              index={0}
            >
              <img
                width="80"
                src={USER.avatar}
                className="xs:max-w-none max-w-[100px]"
                draggable={false}
              />
            </Sticker>
            <Sticker
              caption={`I became an international speaker at C3 Dev Fest, where I shared insights on "The Power of a Second Brain in a Developer's Workflow."`}
              index={1}
            >
              <img
                width="96"
                src={USER.avatar}
                className="xs:max-w-none max-w-[100px]"
                draggable={false}
              />
            </Sticker>
            <Sticker
              caption="I helped create, organize, and speak at the inaugural Commit Your Code Conference in 2024, where every penny went to charity!"
              index={3}
            >
              <img
                width="70"
                src={USER.avatar}
                draggable={false}
                className="xs:max-w-none"
              />
            </Sticker>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default ScrapBookCard