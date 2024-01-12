import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Gavel, LucideIcon } from 'lucide-react'

interface UseCase {
  icon: LucideIcon
  title: string
  description: string
}

const useCases: UseCase[] = [
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
  },
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
  },
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
  },
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
  },
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
  },
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
  },
]

export function UseCasesAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-border rounded-lg shadow-sm divide-y-2 divider-border"
    >
      {useCases.map(({ icon: Icon, description, title }) => (
        <AccordionItem value={title} key={title}>
          <AccordionTrigger className="font-medium text-base text-start">
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
