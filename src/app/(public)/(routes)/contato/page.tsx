'use client'

import { Text } from '@/components/ui/text'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Globe2, Quote, Store } from 'lucide-react'
import { ServiceModel } from './components/service-model'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { TextHighlight } from '@/components/text-highlight'

export default function ContactPage() {
  return (
    <>
      <section className="w-full bg-primary-gradient pt-16">
        <div className="py-12 container">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="text-primary-foreground text-5xl font-bold">
              Fale conosco
            </h2>
            <Text variant="primaryForeground" size="sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              quaerat repudiandae incidunt perferendis voluptate in, est quod
              temporibus unde libero adipisci, nesciunt asperiores non sit, amet
              corrupti earum itaque tempore?
            </Text>
          </div>
        </div>
      </section>

      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingAnnotation annotation="Respondemos rapidamente" />
          <HeadingContentWrapper>
            <HeadingTitle>
              Entrar em <TextHighlight>contato</TextHighlight>
            </HeadingTitle>
            <HeadingDescription>
              Fique a vontade para tirar qualquer duvida com nosso suporte
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="border-l pl-8 flex flex-col">
            <h2 className="text-xl">Precisa de apresentaçao?</h2>

            <div>
              <Quote className="text-primary" strokeWidth={1.5} />
              <Text variant="lowOpacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                qui consequatur sed veritatis sequi natus a, dolorum dolores
                unde autem voluptas praesentium cupiditate molestiae enim quam
                dignissimos quia? Magni, dignissimos?
              </Text>
            </div>

            <div className="flex items-center gap-2">
              <span>Link</span>
              <ChevronRight />
            </div>
          </div>
        </div>
      </ContainerWrapper>

      {/* Options */}
      <ContainerWrapper>
        <Title title="Atentendimento" />
        <h2 className="text-4xl font-semibold mb-3">
          Atendemos aonde quer que voce esteja
        </h2>

        <div className="flex flex-row w-full gap-12 mt-12">
          {/* Local */}
          <ServiceModel
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae repellat non tempora, eum alias provident error. Ducimus voluptates dolorum quae iure expedita, optio non doloremque. Dicta, minus fuga. Magni."
            title="Localmente"
            icon={Store}
          />

          <div className="flex items-center justify-center text-muted-foreground font-medium text-lg">
            ou
          </div>

          {/* Remote */}
          <ServiceModel
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae repellat non tempora, eum alias provident error. Ducimus voluptates dolorum quae iure expedita, optio non doloremque. Dicta, minus fuga. Magni."
            title="Remotamente"
            icon={Globe2}
          />
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-primary-gradient">
        <ContainerWrapper>
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-5xl font-semibold text-primary-foreground mb-8">
              Quer estar a frente dos concorrentes?
            </h2>

            <Text variant="primaryForeground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo,
              quidem optio corrupti ad cum suscipit, maiores natus, doloribus
              voluptatem vitae non fugiat laudantium perspiciatis placeat
              consequatur. Excepturi, nulla ipsum.
            </Text>

            <Button variant="secondary" className="gap-1 mt-6">
              Fazer pedido
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Button>
          </div>
        </ContainerWrapper>
      </section>
    </>
  )
}
