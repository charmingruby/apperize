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
import { Title } from '@/components/title'
import { Services } from './components/services'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { DoubtsAccordion } from './components/doubts-accordion'
import { Features } from './components/features'
import { USP } from './components/usp'
import { TextHighlight } from '@/components/text-highlight'
import { DepositionItem } from './components/deposition-item'
import { Separator } from '@/components/ui/separator'
import developersOffice from '@/assets/img/photos/developers-office.jpeg'
import { RequestForm } from '@/components/request-form'
import { SectionsDivider } from '@/components/sections-divider'
import heroImg from '@/assets/img/heros/home.png'
import Link from 'next/link'
import { ServicesTypewriter } from './components/services-typewriter'
import { staticSEO } from '@/components/seo/static'
import budgetIllustration from '@/assets/img/illustrations/home-budget.svg'
import { BudgetRequestTopic } from './components/budget-request-topic'
import { RedirectLink } from '@/components/redirect-link'
import { CreateRequestLink } from './components/create-request-link'

export const metadata = staticSEO({
  rawTitle: 'Desenvolvimento sob demanda de Software',
  description:
    'Transformamos ideias em realidade digital. Somos uma software house dedicada a criar soluções personalizadas e inovadoras para atender às necessidades únicas do seu negócio.',
})

export default async function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-20 md:pt-28 flex flex-col lg:justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            {/* Heading */}
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl my-8 text-center flex flex-col gap-3">
              Desenvolvimento
              <span className="block">sob demanda de</span>
              <ServicesTypewriter />
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-center leading-relaxed text-lg mb-6 max-w-2xl">
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

      {/* About */}
      <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="hidden lg:flex items-center">
          <Image
            src={developersOffice}
            alt="Desenvolvedores programando"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center lg:justify-normal text-center lg:text-left">
          <HeadingWrapper className="mb-6">
            <HeadingTitle>Quem somos?</HeadingTitle>
          </HeadingWrapper>

          <div className="mb-8">
            <Text variant="lowOpacity" size="md" className="leading-loose">
              Somos uma software house em ascensão que tomou a decisão
              estratégica de evoluir para uma empresa estabelecida devido à
              crescente demanda por nossos serviços como freelancers. Com uma
              trajetória marcada pelo compromisso com a qualidade e inovação,
              percebemos que a transição para uma empresa nos permitiria atender
              nossos clientes de maneira mais abrangente e eficaz. Estamos
              ansiosos para continuar crescendo, expandindo nossa equipe
              talentosa e oferecendo soluções de software excepcionais que
              impulsionem o sucesso de nossos clientes.
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
              <HeadingAnnotation annotation="Por que confiar na Apperize?" />
              <HeadingTitle>
                Diferenciais que você encontra na{' '}
                <span className="text-primary bg-background-highlight-dark  ">
                  Apperize
                </span>
              </HeadingTitle>
            </HeadingWrapper>

            <div className="mb-8">
              <Text variant="lowOpacity">
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

      {/* Depositions */}
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

      {/* Budget */}
      <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-2 pb-0 lg:pb-0">
        {/* Illustration */}
        <div className="hidden lg:block">
          <Image src={budgetIllustration} alt="ilustração do orçamento" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <HeadingWrapper className="mb-6">
            <HeadingAnnotation annotation="Solicitar orçamento" />
            <HeadingContentWrapper>
              <HeadingTitle>
                Para cada um <TextHighlight>caso</TextHighlight>, um{' '}
                <TextHighlight>sucesso</TextHighlight>
              </HeadingTitle>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <div className="mb-8 space-y-6">
            <Text variant="lowOpacity">
              Está pronto para colaborar conosco na criação do seu software?
              Estamos empenhados em encontrar as opções mais vantajosas, visando
              reduzir custos e elevar a satisfação do cliente ao máximo.
            </Text>

            <div className="space-y-3">
              <Separator />
              <div className="space-y-3">
                <BudgetRequestTopic topic="De acordo com o valor máximo estabelecido." />
                <BudgetRequestTopic topic="Gestão eficaz de custos nos permite oferecer preços acessíveis e alta qualidade." />
              </div>
              <Separator />
            </div>
          </div>

          <CreateRequestLink label="Solicitar orçamento" />
        </div>
      </ContainerWrapper>

      <SectionsDivider />
      {/* Frequently asked */}
      <ContainerWrapper className="flex flex-col lg:items-center max-w-4xl w-full pt-0 lg:pt-0">
        <HeadingWrapper>
          <HeadingContentWrapper className="lg:text-center">
            <HeadingTitle>Ficou com dúvidas? Não se preocupe</HeadingTitle>
            <HeadingDescription>
              Tudo que o que voce precisa de saber sobre o serviço e a cobrança
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <DoubtsAccordion />
      </ContainerWrapper>
      {/* Contact */}
      <ContainerWrapper className="flex items-center justify-center bg-background-highlight-main border border-background-highlight-dark rounded-xl py-10 lg:py-10">
        <div className="max-w-3xl flex flex-col items-center justify-center text-center">
          <Headphones className="text-primary h-12 w-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-6">Entre em contato</h2>
          <Text className="mb-8 leading-normal text-muted-foreground">
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

      {/* CTA */}
      <ContainerWrapper
        id="make-request"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12  pt-0 lg:pt-0"
      >
        <div className="flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TabletSmartphone className="text-primary h-9 w-9" />

            <strong className="text-4xl font-semibold font-alt tracking-wider">
              <span className="text-primary">App</span>
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
            <div className="bg-background-highlight-dark rounded-full p-1.5">
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
      </ContainerWrapper>
    </>
  )
}
