import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/contents/faqs'

export function FAQsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-border rounded-lg shadow-sm divide-y-2 divide-border"
    >
      {faqs.map(({ question, response }) => (
        <AccordionItem value={question} key={question}>
          <AccordionTrigger className="text-start font-medium text-base">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {response}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
