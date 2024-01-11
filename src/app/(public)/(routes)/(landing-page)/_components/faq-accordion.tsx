import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQ {
  value: string
  title: string
  description: string
}

const doubts: FAQ[] = [
  {
    value: 'Suporte',
    title: 'O produto tem suporte?',
    description: 'Temos sim',
  },
]

export function FAQsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-border rounded-lg shadow-sm divide-y-2 divider-border"
    >
      {doubts.map(({ value, title, description }) => (
        <AccordionItem value={value} key={value}>
          <AccordionTrigger className="font-medium text-base">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
