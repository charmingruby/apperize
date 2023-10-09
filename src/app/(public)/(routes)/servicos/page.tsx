import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Textarea } from '@/components/ui/textarea'

export default function Orders() {
  return (
    <>
      <ContainerWrapper className="min-h-screen grid grid-cols-2 gap-12">
        <div>
          <HeadingWrapper>
            <HeadingAnnotation annotation="Faça seu pedido" />
            <HeadingContentWrapper>
              <HeadingTitle>Nos fale o que precisa</HeadingTitle>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            quas illo dicta ipsum dolorum sint sunt neque ipsa nulla suscipit
            blanditiis fugiat alias illum, iste, asperiores voluptatibus?
            Repellendus, quos aperiam?
          </Text>

          <Textarea placeholder="Nos conte sua necessidade..." />
          <Button>Iniciar pedido</Button>
        </div>

        <div>
          <h2>Algumas duvidas</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ContainerWrapper>
    </>
  )
}
