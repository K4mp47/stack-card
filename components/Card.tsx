"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Card({
  src,
  bg,
  i = 0,
}: {
  src: string;
  bg: string;
  i?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.85, 1]
  );

  const y = useTransform(scrollYProgress, [0, 1], [0, i * 60]);

  // const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        // opacity,
        y,
        zIndex: 10 + i,
        position: "sticky",
        top: 0,
      }}
      className={`w-full min-h-screen flex items-center justify-center ${bg}`}
    >
      <h1 className="text-white font-bold text-[12rem]">{src}</h1>
    </motion.div>
  );
}
