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
import { ExampleServices } from '../components/example-services'
import Link from 'next/link'

export default function Orders() {
  return (
    <>
      <ContainerWrapper className="min-h-screen flex justify-center flex-col gap-12">
        <div className="grid grid-cols-2 gap-12">
          {/* Right / Top */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <HeadingWrapper className="mb-8">
              <HeadingAnnotation annotation="Venha fazer seu pedido" />
              <HeadingContentWrapper>
                <HeadingTitle>Nos fale o que precisa</HeadingTitle>
                <HeadingDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  corrupti consectetur voluptate odio? A inventore incidunt ab
                  culpa, voluptas ratione! Hic similique aut eaque nam placeat
                  amet laboriosam voluptatibus praesentium?
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>

            {/* Button Group */}
            <div className="flex gap-4">
              <Link href="/servicos/criar" prefetch={false}>
                <Button className="w-fit gap-1">
                  Fazer pedido
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
              <Link href="/sobre" prefetch={false}>
                <Button variant="outline" className="w-fit gap-1">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>

          {/* Left / Bottom */}
          <ExampleServices />
        </div>
      </ContainerWrapper>
    </>
  )
}
