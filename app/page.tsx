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