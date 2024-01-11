/**
 * External
 */
import { ArrowRight, ArrowUpRight, Headphones } from 'lucide-react'
import Image from 'next/image'

/**
 * Internal
 */
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Title } from '@/components/title'
import { Services } from './_components/services'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { FAQsAccordion } from './_components/faq-accordion'
import { Features } from './_components/features'
import { USP } from './_components/usp'
import { TextHighlight } from '@/components/text-highlight'
import { DepositionItem } from './_components/deposition-item'
import { Separator } from '@/components/ui/separator'
import developersOffice from '@/assets/img/photos/developers-office.jpeg'
import { SectionsDivider } from '@/components/sections-divider'
import heroImg from '@/assets/img/heros/home.png'
import { ServicesTypewriter } from './_components/services-typewriter'
import { staticSEO } from '@/components/seo/static'
import { RedirectLink } from '@/components/redirect-link'
import { CreateRequestLink } from './_components/create-request-link'
import { CTAWithRequestForm } from '@/components/cta-with-request-form'
import { UseCasesAccordion } from './_components/use-cases-accordion'

export const metadata = staticSEO({
  rawTitle: 'Desenvolvimento sob demanda de Software',
  description:
    'Transformamos ideias em realidade digital. Somos uma software house dedicada a criar soluções personalizadas e inovadoras para atender às necessidades únicas do seu negócio.',
})

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-20 md:pt-28 flex flex-col lg:justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            {/* Heading */}
            <h1 className="font-bold text-4xl sm:text-5xl my-8 text-center flex flex-col gap-3">
              Desenvolvimento
              <span className="block">sob demanda de</span>
              <ServicesTypewriter />
            </h1>

            {/* Description */}
            <p className="text-center text-muted-foreground leading-relaxed text-lg mb-6 max-w-2xl">
              Transformamos ideias em realidade digital. Somos uma software
              house dedicada a criar soluções personalizadas e inovadoras para
              atender às necessidades únicas do seu negócio.
            </p>
          </div>
          {/* Buttons group */}
          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4 w-full md:w-fit">
            {/* Form link */}
            <CreateRequestLink />

            {/* Contact link */}
            <RedirectLink url="/contato">
              <Button
                variant="ghost"
                size="lg"
                className="text-base text-muted-foreground w-full md:w-fit"
              >
                Fale conosco
              </Button>
            </RedirectLink>
          </div>
        </div>
      </section>

      {/* Illustration */}
      <ContainerWrapper className="flex justify-center pb-0 pt-8 md:pt-12">
        <Image
          src={heroImg}
          alt="Página de Dashboard"
          className="w-[80%]"
          quality={100}
          priority
        />
      </ContainerWrapper>

      {/* USP */}
      <ContainerWrapper>
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
          <div className="lg:col-span-3">
            <HeadingWrapper className="mb-0">
              <HeadingAnnotation annotation="Plataforma feita para o cliente" />
              <HeadingContentWrapper>
                <HeadingTitle>Desenvolvemos juntos de você</HeadingTitle>
                <HeadingDescription>
                  Queremos que você se sinta confortável ao fazer um pedido.
                  Para isso, mantemos você sempre atualizado sobre o
                  desenvolvimento do seu produto. Isso garante que suas
                  necessidades sejam atendidas de maneira personalizada,
                  enquanto você está totalmente informado sobre o processo.{' '}
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>
          </div>
          <div className="flex w-full md:justify-end items-end">
            <CreateRequestLink />
          </div>
        </div>

        <USP />
      </ContainerWrapper>

      {/* Services */}
      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingAnnotation annotation="Com o que trabalhamos" />
          <HeadingContentWrapper className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <HeadingTitle>
              Nossos <TextHighlight>serviços</TextHighlight>
            </HeadingTitle>

            <div className="max-w-md">
              <span className="font-medium text-muted-foreground leading-normal">
                Caso nao esteja ai o que necessita, fazemos pedidos customizados
                tambem.
              </span>
            </div>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <Services />
      </ContainerWrapper>

      {/* Features */}
      <ContainerWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Presentation */}
          <div className="flex flex-col">
            <HeadingWrapper className="mb-6">
              <HeadingAnnotation annotation="Por que confiar na apperize?" />
              <HeadingTitle>
                Diferenciais que você encontra na{' '}
                <span className="text-primary bg-background-highlight-dark  ">
                  apperize
                </span>
              </HeadingTitle>
            </HeadingWrapper>

            <div className="mb-8">
              <Text className="text-muted-foreground">
                Nosso compromisso é entregar soluções de software altamente
                personalizadas, perfeitamente adaptadas às particularidades do
                seu negócio. Contando com nossa extensa experiência e uma equipe
                altamente qualificada, estamos preparados para oferecer uma
                ampla gama de funcionalidades para atender às suas demandas
                exclusivas.
              </Text>
            </div>

            <RedirectLink url="o-que-fazemos">
              <Button size="lg" className="flex text-base w-full md:w-fit">
                <span>Veja mais</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </RedirectLink>
          </div>

          <Features />
        </div>
      </ContainerWrapper>

      {/* Use Cases */}
      <ContainerWrapper>
        <HeadingWrapper className="text-center flex flex-col items-center">
          <HeadingAnnotation annotation="Casos de uso" />
          <HeadingTitle>Design moldado para o que voce precisa</HeadingTitle>
        </HeadingWrapper>

        <div className="grid grid-cols-3">
          <div className="col-span-2">image</div>
          <div>
            <UseCasesAccordion />
          </div>
        </div>
      </ContainerWrapper>

      {/* Recents works */}
      <ContainerWrapper>
        <h1>todo: recent works</h1>
      </ContainerWrapper>

      {/* Evaluations */}
      <section className="border-y border-background-highlight-dark bg-background-highlight-main">
        <ContainerWrapper className="py-10 lg:py-10">
          {/* Heading */}
          <div className="lg:w-1/2">
            <Title title="Depoimentos" />
            <strong className="text-4xl lg:text-5xl font-semibold leading-tight block text-foreground">
              O que nossos clientes dizem sobre nós:
            </strong>
          </div>

          {/* Depositions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full">
            <div className="mt-12 space-y-6">
              <DepositionItem />
              <Separator />
              <DepositionItem />
            </div>

            <div className="block lg:hidden my-6">
              <Separator />
            </div>

            <div className="space-y-6">
              <DepositionItem />
              <Separator />
              <DepositionItem />
            </div>
          </div>
        </ContainerWrapper>
      </section>

      {/* About */}
      <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:pb-0">
        <div className="hidden lg:flex items-center">
          <Image
            src={developersOffice}
            alt="Desenvolvedores programando"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center text-center h-full lg:text-left">
          <HeadingWrapper className="mb-6">
            <HeadingTitle>Quem somos?</HeadingTitle>
          </HeadingWrapper>

          <div className="mb-8">
            <Text className="text-muted-foreground">
              Uma software house em ascensão que evoluiu para uma empresa
              estabelecida devido à crescente demanda por nossos serviços como
              freelancers, com compromisso com qualidade, inovação e expansão.
              Estamos focados em oferecer soluções de software excepcionais para
              impulsionar o sucesso de nossos clientes, ansiosos para crescer
              ainda mais e fortalecer nossa equipe talentosa.
            </Text>
          </div>

          <div className="flex justify-center lg:justify-normal w-full">
            <RedirectLink url="/sobre">
              <Button size="lg" className="flex text-base w-full lg:w-fit">
                <span>Veja mais</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </RedirectLink>
          </div>
        </div>
      </ContainerWrapper>

      <SectionsDivider />
      {/* FAQ */}
      {/* TODO: change cta with the contact cta */}
      <ContainerWrapper className="flex flex-col lg:items-center max-w-4xl w-full pt-0 lg:pt-0">
        <HeadingWrapper>
          <HeadingContentWrapper className="lg:text-center">
            <HeadingTitle>Ficou com dúvidas? Não se preocupe</HeadingTitle>
            <HeadingDescription>
              Tudo que o que voce precisa de saber sobre o serviço e a cobrança
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <FAQsAccordion />
      </ContainerWrapper>

      {/* Contact */}
      <ContainerWrapper className="flex items-center justify-center bg-background-highlight-main border border-background-highlight-dark rounded-xl py-10 lg:py-10">
        <div className="max-w-xl flex flex-col items-center justify-center text-center">
          <Headphones className="text-primary h-12 w-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-6">Entre em contato</h2>
          <Text className="mb-8 leading-normal" variant="lowOpacity" size="md">
            Estamos aqui para ajudar. Entre em contato para suporte técnico
            personalizado em nossos produtos e serviços.
          </Text>

          <div className="flex flex-col md:flex-row md:justify-center gap-4 w-full">
            <RedirectLink url="/">
              <Button
                variant="outline"
                size="lg"
                className="text-base w-full lg:w-fit"
              >
                Whatsapp
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </RedirectLink>

            <RedirectLink url="/contato">
              <Button className="text-base w-full lg:w-fit" size="lg">
                Fale conosco
                <ArrowRight className="h-4 w-4" />
              </Button>
            </RedirectLink>
          </div>
        </div>
      </ContainerWrapper>
      <SectionsDivider />

      <CTAWithRequestForm />
    </>
  )
}
