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
      <ContainerWrapper className="lg:h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-12 w-full">
          <div>
            <HeadingWrapper>
              <HeadingAnnotation annotation="Respondemos rapidamente" />
              <HeadingContentWrapper>
                <HeadingTitle>
                  Entrar em <TextHighlight>contato</TextHighlight>
                </HeadingTitle>
                <HeadingDescription>
                  Fique a vontade para tirar qualquer dúvida com nosso suporte
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>

            <EmailForm />
          </div>

          <div className="flex items-center justify-center">
            <Image src={heroImg} alt="Pessoas entrando em contato" />
          </div>
        </div>
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
            description="Estamos aqui na sua comunidade, prontos para oferecer assistência pessoal e soluções próximas de você."
            title="Localmente"
            icon={Store}
          />

          <div className="flex items-center justify-center text-muted-foreground font-medium text-lg">
            ou
          </div>

          {/* Remote */}
          <ServiceModel
            description="Nossa equipe está pronta para ajudar onde você estiver, com atendimento remoto conveniente e eficaz."
            title="Remotamente"
            icon={Globe2}
          />
        </div>
      </ContainerWrapper>

      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingAnnotation annotation="Outras formas" />
          <HeadingTitle>Opções de contato</HeadingTitle>
        </HeadingWrapper>

        <MeansOfContact />
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-primary-gradient">
        <ContainerWrapper>
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-5xl font-semibold text-primary-foreground mb-8">
              Quer estar a frente dos concorrentes?
            </h2>

            <Text variant="primaryForeground">
              Modernize-se agora com o nosso serviço de software de ponta. Não
              fique para trás, abrace a inovação e leve o seu negócio para o
              próximo nível. Descubra como podemos ajudar você a alcançar o
              sucesso digital.
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
