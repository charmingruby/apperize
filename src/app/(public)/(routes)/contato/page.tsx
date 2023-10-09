'use client'

import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe2, Store } from 'lucide-react'
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
import { EmailForm } from './components/email-form'
import heroImg from '@/assets/contact-hero.svg'
import Image from 'next/image'
import { MeansOfContact } from './components/means-of-contact'

export default function ContactPage() {
  return (
    <>
      <ContainerWrapper className="grid grid-cols-2 gap-12">
        <div>
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

          <EmailForm />
        </div>

        <div className="flex items-center justify-center">
          <Image src={heroImg} alt="Pessoas entrando em contato" />
        </div>
      </ContainerWrapper>

      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingAnnotation annotation="Outras formas" />
          <HeadingTitle>Opções de contato</HeadingTitle>
        </HeadingWrapper>

        <MeansOfContact />
      </ContainerWrapper>

      {/* Options */}
      <ContainerWrapper>
        <HeadingWrapper className="text-center items-center">
          <HeadingAnnotation annotation="Atentendimento" />
          <HeadingTitle>Atendemos aonde quer que voce esteja</HeadingTitle>
        </HeadingWrapper>

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
