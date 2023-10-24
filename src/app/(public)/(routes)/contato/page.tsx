/**
 * External
 */
import { ArrowRight, PencilLine, DollarSign, Headphones } from 'lucide-react'

/**
 * Internal
 */
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { TextHighlight } from '@/components/text-highlight'
import { EmailForm } from './components/email-form'
import { RedirectLink } from '@/components/redirect-link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ContactBoard } from './components/contact-board'
import { CTAAnnotation } from './components/cta-annotation'
import Image from 'next/image'
import heroImg from '@/assets/img/heros/contact.svg'
import { Text } from '@/components/ui/text'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper className="pt-24  lg:h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div className="flex flex-col justify-center h-full">
            <HeadingWrapper className="flex mb-8 lg:mb-8">
              <HeadingContentWrapper>
                <HeadingTitle>
                  Fale <TextHighlight>Conosco</TextHighlight>
                </HeadingTitle>
                <HeadingDescription>
                  Nossa equipe está sempre aqui para falar com você
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>

            <EmailForm />
          </div>

          <div className="hidden lg:flex items-center justify-center w-full">
            <Image src={heroImg} alt="Imagem de uma Start Up" />
          </div>
        </div>
      </ContainerWrapper>

      {/* Contact board */}
      <ContainerWrapper className="lg:pt-10">
        <ContactBoard />
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-background-highlight-main border-t">
        <ContainerWrapper className="flex flex-col items-center text-center py-10 lg:py-10">
          <div className="max-w-2xl">
            <h2 className="font-semibold text-4xl">
              Faça seu pedido <TextHighlight>personalizado</TextHighlight>
            </h2>
            <Text className="text-muted-foreground mt-4 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              odio, quaerat provident culpa ab.
            </Text>

            <RedirectLink url="/">
              <Button size="lg">
                <span className="text-base">Fazer pedido</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </RedirectLink>
          </div>

          <div className=" pt-12 pb-4 w-full">
            <Separator />
          </div>

          <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-full">
            <CTAAnnotation
              icon={PencilLine}
              content="Produtos personalizados"
            />
            <CTAAnnotation
              icon={Headphones}
              content="Suporte 100% humanizado"
            />
            <CTAAnnotation icon={DollarSign} content="Orçamentos otimistas" />
          </div>
        </ContainerWrapper>
      </section>
    </>
  )
}
