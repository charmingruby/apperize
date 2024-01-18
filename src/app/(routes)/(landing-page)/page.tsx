/**
 * External
 */
import {
  ArrowRight,
  ArrowUpRight,
  Headphones,
  HelpCircle,
  TabletSmartphone,
} from 'lucide-react'
import Image from 'next/image'

/**
 * Internal
 */
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Services } from './_components/services'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { FAQsAccordion } from './_components/faq-accordion'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { Features } from './_components/features'
import { USP } from './_components/usp'
import { TextHighlight } from '@/components/text-highlight'
import { SectionsDivider } from '@/components/sections-divider'
import heroImg from '@/assets/img/home.png'
import { ServicesTypewriter } from './_components/services-typewriter'
import { staticSEO } from '@/components/seo/static'
import { CreateRequestLink } from './_components/create-request-link'
import { RedirectLink } from '@/components/redirect-link'
import { HeroPattern } from './_components/hero-pattern'
import serviceImg from '@/assets/img/services/brand.png'
import Link from 'next/link'
import { UseCases } from './_components/use-cases'
import { RecentWorks } from './_components/recent-works'
import { RequestForm } from '@/components/request-form'
import { whatsAppLink } from '@/contents/site/contact'
import { Depositions } from './_components/depositions'

export const metadata = staticSEO({
  rawTitle: 'Desenvolvimento sob demanda de Software',
  description:
    'Transformamos ideias em realidade digital. Somos uma software house dedicada a criar soluções personalizadas e inovadoras para atender às necessidades únicas do seu negócio.',
})

export default function Home() {
  return (
    <>
      <div className="relative h-full w-full" id="inicio">
        <HeroPattern />
        {/* Hero */}
        <section className="container pt-20 md:pt-28 flex flex-col lg:justify-center ">
          <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center pt-12 lg:pt-16 xl:pt-24">
            <div className="flex flex-col items-center gap-6 lg:gap-12">
              {/* Heading */}
              <div className="space-y-2">
                <h1 className="m-0 whitespace-pre-wrap text-center font-extrabold leading-tight tracking-tight text-3xl lg:text-4xl xl:text-5xl">
                  Desenvolvimento sob demanda de
                </h1>
                <ServicesTypewriter />
              </div>

              {/* Description */}
              <p className="mx-auto max-w-[60ch] text-center text-sm font-medium text-muted-foreground md:text-lg">
                Transformamos ideias em realidade digital. Somos uma software
                house dedicada a criar soluções{' '}
                <TextHighlight className="text-foreground">
                  personalizadas
                </TextHighlight>{' '}
                e inovadoras para atender às necessidades únicas do seu negócio.
              </p>
            </div>

            {/* Buttons group */}
            <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
              {/* Form link */}
              <div className="flex w-full md:w-fit flex-1 justify-end">
                <CreateRequestLink />
              </div>

              {/* Contact link */}
              <div className="flex flex-1  justify-start">
                <RedirectLink url={whatsAppLink}>
                  <Button variant="ghost" className="text-muted-foreground ">
                    Fale conosco
                  </Button>
                </RedirectLink>
              </div>
            </div>
          </div>
        </section>
        {/* Illustration */}
        <ContainerWrapper className="flex justify-center pb-0 pt-12">
          <Image
            src={heroImg}
            alt="Página de Dashboard"
            className="w-[80%]"
            quality={100}
            priority
          />
        </ContainerWrapper>
        {/* USP */}
        <ContainerWrapper id="sobre">
          <div className="mb-8 lg:mb-10 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
            <div className="lg:col-span-3">
              <HeadingWrapper className="mb-0 lg:mb-0">
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
            <div className="flex w-full lg:justify-end lg:items-end">
              <Button className="w-full lg:w-fit" asChild>
                <a href="#contato" className="outline-none">
                  Fazer pedido <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <USP />
        </ContainerWrapper>
        {/* Services */}
        <ContainerWrapper
          id="o-que-fazemos"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="border border-border rounded relative w-full h-64 lg:h-auto order-last lg:order-first">
            <Image
              src={serviceImg}
              alt="imagem dos serviços"
              className="absolute bottom-0 left-0 h-full rounded w-full object-cover"
            />
          </div>

          <div>
            <HeadingWrapper>
              <HeadingAnnotation annotation="Com o que trabalhamos" />
              <HeadingContentWrapper>
                <HeadingTitle>
                  Nossos <TextHighlight>serviços</TextHighlight>
                </HeadingTitle>
                <HeadingDescription>
                  Desenvolvemos sites, landing pages e blogs personalizados para
                  as suas necessidades e com qualidade excepcional. Venha
                  transformar seu negócio no mundo digital.
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>

            <Services />

            <Button className="mt-6 w-full lg:w-fit" asChild>
              <Link prefetch={false} href="#contato">
                Fazer pedido
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </ContainerWrapper>
        {/* Features */}
        <ContainerWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Presentation */}
            <div className="flex flex-col justify-center">
              <HeadingWrapper className="flex flex-col">
                <HeadingAnnotation annotation="Por que confiar na apperize?" />
                <HeadingContentWrapper>
                  <HeadingTitle>
                    Diferenciais que você encontra na{' '}
                    <TextHighlight> apperize</TextHighlight>
                  </HeadingTitle>
                  <HeadingDescription>
                    Nosso compromisso é entregar soluções de software altamente
                    personalizadas, perfeitamente adaptadas às particularidades
                    do seu negócio.
                  </HeadingDescription>
                </HeadingContentWrapper>
              </HeadingWrapper>

              <Button asChild>
                <Link href="#contato" className="w-full lg:w-fit">
                  Fazer pedido <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <Features />
          </div>
        </ContainerWrapper>
        {/* Use Cases */}
        <ContainerWrapper id="casos-de-sucesso">
          <HeadingWrapper className="lg:text-center flex flex-col lg:items-center">
            <HeadingAnnotation annotation="Casos de uso" />
            <HeadingContentWrapper>
              <HeadingTitle>
                Design moldado para o que voce precisa
              </HeadingTitle>
              <HeadingDescription>
                Criamos produtos independente da área de atuação
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <div>
            <UseCases />
          </div>
        </ContainerWrapper>
        {/* Recents works */}
        <ContainerWrapper>
          <HeadingWrapper>
            <HeadingAnnotation annotation="Desenvolvidos recentemente" />
            <HeadingContentWrapper>
              <HeadingTitle>Trabalhos recentes</HeadingTitle>
              <HeadingDescription>
                Aqui listamos os projetos mais recentes entregues.
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <div>
            <RecentWorks />
          </div>
        </ContainerWrapper>
        {/* Evaluations */}
        <section className="border-y border-background-alt-dark bg-background-alt">
          <ContainerWrapper
            id="depoimentos"
            className="py-10 lg:py-10 scroll-mt-16"
          >
            {/* Heading */}
            <HeadingWrapper className="lg:w-1/2 mb-0">
              <HeadingAnnotation annotation="Depoimentos" />
              <HeadingTitle>O que nossos clientes dizem sobre nós</HeadingTitle>
            </HeadingWrapper>

            {/* Depositions */}
            <div>
              <Depositions />
            </div>
          </ContainerWrapper>
        </section>
        {/* FAQ */}
        <ContainerWrapper className="flex flex-col lg:items-center max-w-4xl w-full">
          <HeadingWrapper>
            <HeadingContentWrapper className="lg:text-center">
              <HeadingTitle>Ficou com dúvidas? Não se preocupe</HeadingTitle>
              <HeadingDescription>
                Tudo que o que voce precisa de saber sobre o serviço e a
                cobrança
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <FAQsAccordion />
        </ContainerWrapper>
        {/* Contact */}
        <ContainerWrapper className="flex items-center justify-center bg-background-alt border border-background-alt-dark rounded-xl py-10 lg:py-10">
          <div className="max-w-xl flex flex-col items-center justify-center text-center">
            <Headphones className="text-primary h-12 w-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-6">Entre em contato</h2>
            <Text
              className="mb-8 leading-normal"
              variant="lowOpacity"
              size="md"
            >
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

              <RedirectLink url="#contato">
                <Button className="text-base w-full lg:w-fit" size="lg">
                  Fale conosco
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </RedirectLink>
            </div>
          </div>
        </ContainerWrapper>
        <SectionsDivider />
        {/* CTA */}
        <ContainerWrapper
          id="contato"
          className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12  pt-0 lg:pt-0"
        >
          <div className="flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <TabletSmartphone className="text-primary h-9 w-9" />

              <strong className="text-4xl font-semibold font-alt tracking-wider">
                <span className="text-primary">app</span>
                erize
              </strong>
            </div>

            {/* Slogan */}
            <HeadingTitle className="mt-12 text-4xl max-w-md">
              Resolva os problemas de maneira digital
            </HeadingTitle>

            {/* Form or phone number */}
            <span className="mt-2 mb-8 text-base text-muted-foreground">
              Preencha o formulário
              <span className="block">ou ligar para +55 32 99110-0990</span>
            </span>

            <div className="flex items-center gap-2">
              <div className="bg-background-alt-dark rounded-full p-1.5">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>

              <span className="font-medium">
                Alguma duvida?{' '}
                <Link
                  prefetch={false}
                  href="/"
                  className="text-muted-foreground hover:text-primary hover:underline transition-all"
                >
                  Entre em contato
                </Link>
              </span>
            </div>
          </div>

          <div className="col-span-2">
            <RequestForm />
          </div>
        </ContainerWrapper>{' '}
      </div>
    </>
  )
}
