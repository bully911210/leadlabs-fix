import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What if I already have a website?",
      answer: "We rebuild your website from scratch using your existing content. The current design elements can be preserved if you like them, but the technical foundation will be completely rebuilt to ensure proper tracking, indexing, and AI readability.",
    },
    {
      question: "How long does the process take?",
      answer: "From the moment you submit your details, your new website will be live within 7 business days. Most projects are completed in 5 days. We guarantee the 7-day timeline or extend your free hosting.",
    },
    {
      question: "What do I need to provide?",
      answer: "Just your business information, logo (if you have one), and any text content you want on the site. If you don't have content ready, we can work with what's on your current website or help you create basic copy.",
    },
    {
      question: "What happens after the 3 months of free hosting?",
      answer: "Hosting continues at R199/month. You can cancel anytime and take your website with you—you own it completely. We'll help transfer it to any hosting provider you choose at no extra cost.",
    },
    {
      question: "Can I make changes after the website is live?",
      answer: "Yes. Your package includes 3 rounds of revisions covering layout adjustments and text changes. After that, small changes are R250 each, or you can manage the site yourself—we provide full access.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the direction after seeing the first draft, we'll revise until you are. We've never had a client request a refund because we don't deliver until you approve.",
    },
    {
      question: "What's included in 'search ready structure'?",
      answer: "Proper meta tags, semantic HTML, XML sitemap, robots.txt configuration, schema markup, and Google Search Console setup. These are the technical elements that allow Google to find and rank your pages.",
    },
    {
      question: "How is this different from Wix or Squarespace?",
      answer: "DIY builders let you create pages, but they don't set up tracking, proper indexing, or AI optimisation. We build a complete system, not just a pretty page. Your website will actually work for your business.",
    },
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-narrow">
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="headline-secondary">
              Common questions
            </h2>
            <p className="body-large max-w-xl mx-auto">
              Straight answers. No sales pitch.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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