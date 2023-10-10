import { Button } from '@/components/ui/button'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { ArrowRight } from 'lucide-react'
import { ExampleServices } from './components/example-services'

export default function Orders() {
  return (
    <>
      <ContainerWrapper className="min-h-screen flex justify-center flex-col gap-12">
        <div className="flex flex-col">
          <HeadingWrapper className="mb-8  max-w-3xl">
            <HeadingAnnotation annotation="Faça seu pedido" />
            <HeadingContentWrapper>
              <HeadingTitle className="">Nos fale o que precisa</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                corrupti consectetur voluptate odio? A inventore incidunt ab
                culpa, voluptas ratione! Hic similique aut eaque nam placeat
                amet laboriosam voluptatibus praesentium?
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <ExampleServices />

          <Button className="w-fit gap-1">
            Fazer pedido
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </ContainerWrapper>
    </>
  )
}
