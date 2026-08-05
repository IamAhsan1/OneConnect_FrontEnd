import { faqData } from "@/data/contactData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-slate-50 py-20 lg:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2
            id="faq-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Answers to Common Questions
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Find quick answers to the questions we receive most often. If you
            still need assistance, our team is always happy to help.
          </p>
        </div>

        {/* Accordion */}

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 transition-colors hover:text-blue-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-base leading-7 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;