"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  intro?: string;
  items: FAQItem[];
};

export function FAQ({ title = "Sıkça Sorulan Sorular", intro, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">{title}</h2>
          {intro ? <p className="mt-3 text-base text-soft">{intro}</p> : null}
        </div>
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border border-white/10 bg-graphite">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-label={item.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-medium text-white">{item.question}</span>
                  <span className="text-xl text-soft">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? <p className="px-5 pb-5 text-sm leading-7 text-soft">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
