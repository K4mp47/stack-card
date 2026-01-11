This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Stack-card Scrolling Animation

How to make a Impile Card Scrolling Animation using tailwindcss and React.

## Introduction

## Setting up the project

To set up a new Next.js project, you can use the following command:.
`npx create-next-app@latest`

After that, install the required dependencies:
`bash npm install framer-motion`

Now you are ready to start
## Implementation logic


Start creating a new component called `Card.tsx` inside the `components` folder. The code below shows the basic structure of the component.

```tsx
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
```

After that, you can use this component inside the `app/page.tsx` file to create the scrolling animation effect.

```tsx
"use client";

import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <section className="h-screen" />

      {/* STACK SECTION */}
      <section className="relative h-[300vh] w-full flex flex-col items-center">
        {[0,1,2].map((i) => (
          <Card
            key={i}
            src={i.toString()}
            i={i}
            bg={i % 2 === 0 ? "bg-purple-600" : "bg-pink-600"}
          />
        ))}
      </section>
      <section className="relative z-20 h-screen bg-transparent" />
    </main>
  );
}
```
