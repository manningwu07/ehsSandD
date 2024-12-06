import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface FAQ {
  title: string;
  subtitle: string;
  faqData: {
    question: string;
    answer: string;
  }[]
}

export default function FAQSection({title, subtitle, faqData}: FAQ) {
  return (
    <div id="FAQ-section">
      <h2 className="my-2 text-center text-5xl font-bold">{title}</h2>
      <p className="mb-5 md:mb-8 text-center text-xl text-gray-700">
        {subtitle}
      </p>
      <Accordion
        type="single"
        collapsible
        className="mx-auto min-w-[10rem] max-w-[50rem] lg:w-[50rem]"
      >
        <FAQ faqData={faqData}/>
      </Accordion>
    </div>
  );
}

const FAQ = ({faqData}: {faqData: FAQ["faqData"]}) => {
  return (
    <>
      {faqData.map((FAQ, index) => (
        <AccordionItem value={`item-${index + 1}`} key={FAQ.question}>
          <AccordionTrigger
            className={`${index === 0 && "text-left"} text-2xl font-bold`}
          >
            {`${FAQ.question}`}
          </AccordionTrigger>
          <AccordionContent>{`${FAQ.answer}`}</AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
};
