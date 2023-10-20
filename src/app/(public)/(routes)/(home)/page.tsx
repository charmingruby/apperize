import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ArrowUpRight,
  Headphones,
  HelpCircle,
  TabletSmartphone,
} from 'lucide-react'
import Image from 'next/image'
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
import { DepositionItem } from './components/depositions-swiper/deposition-item'
import { Separator } from '@/components/ui/separator'
import developersOffice from '@/assets/img/photos/developers-office.jpeg'
import { RequestForm } from '@/components/request-form'
import { SectionsDivider } from '@/components/sections-divider'
import heroImg from '@/assets/img/heros/home.png'
import Link from 'next/link'
import { ServicesTypewriter } from './components/services-typewriter'
import { staticSEO } from '@/components/seo/static'
import budgetIllustration from '@/assets/img/illustrations/home-budget.svg'

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
          <div className="flex flex-col items-center md:flex-row gap-4 w-full md:w-fit">
            {/* Form link */}
            <a href="#make-request" className="w-full md:w-fit">
              <Button size="lg" className="text-base w-full md:w-fit">
                Fazer pedido <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

            {/* Contact link */}
            <Link href="/contato" prefetch={false} className="w-full md:w-fit">
              <Button
                variant="ghost"
                size="lg"
                className="text-base text-muted-foreground w-full md:w-fit"
              >
                Fale conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Illustration */}
      <ContainerWrapper className="flex justify-center pb-0 pt-8 md:pt-20">
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
            <Button className=" w-full md:w-fit text-base">
              Fazer pedido <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <USP />
      </ContainerWrapper>

      {/* About */}
      <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="hidden lg:block">
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

          <Link
            prefetch={false}
            href="/sobre"
            className="flex justify-center lg:justify-normal w-full"
          >
            <Button size="lg" className="flex text-base">
              <span>Veja mais</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </ContainerWrapper>

      {/* Services */}
      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingAnnotation annotation="Com o que trabalhamos" />
          <HeadingContentWrapper className="flex justify-between items-center">
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
          <div className="flex flex-col justify-center">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                cum blanditiis ex quam reiciendis commodi velit quia, incidunt
                esse enim, aliquid quisquam sequi. Obcaecati ad impedit
                repudiandae debitis aliquam veritatis.
              </Text>
            </div>

            <Button size="lg" className="flex text-base w-full md:w-fit">
              <span>Veja mais</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <Features />
        </div>
      </ContainerWrapper>

      {/* Depositions */}
      <section className="border-y border-background-highlight-dark bg-background-highlight-main">
        <ContainerWrapper className="py-20">
          {/* Heading */}
          <div className="w-1/2">
            <Title title="Depoimentos" underline={false} />
            <strong className="text-5xl font-semibold leading-tight block text-foreground">
              O que nossos clientes dizem sobre nós:
            </strong>
          </div>

          {/* Depositions */}
          <div className="grid grid-cols-2 gap-16 w-full">
            <div className="mt-12 space-y-6">
              <DepositionItem />
              <Separator />
              <DepositionItem />
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
      <ContainerWrapper className="grid grid-cols-2 pb-6">
        <div>
          <Image src={budgetIllustration} alt="ilustração do orçamento" />
        </div>
        <div>
          <HeadingWrapper>
            <HeadingContentWrapper>
              <HeadingTitle>Para cada um caso, um sucesso</HeadingTitle>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            voluptatibus iste aut fuga neque quis eaque numquam cumque
            laudantium molestias? Eaque molestias consequatur unde reiciendis
            aperiam beatae reprehenderit. Repellendus, recusandae.
          </Text>

          <div></div>

          <Button size="lg" className="text-base">
            Solicite um orçamento
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </ContainerWrapper>

      <SectionsDivider />

      {/* Frequently asked */}
      <ContainerWrapper className="flex flex-col items-center max-w-4xl w-full pt-6">
        <HeadingWrapper>
          <HeadingContentWrapper className="text-center">
            <HeadingTitle>Ficou com dúvidas? Não se preocupe</HeadingTitle>
            <HeadingDescription>
              Tudo que o que voce precisa de saber sobre o serviço e a cobrança
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <DoubtsAccordion />
      </ContainerWrapper>

      {/* Contact */}
      <ContainerWrapper className="flex items-center justify-center mb-6 bg-background-highlight-main border border-background-highlight-dark rounded-xl py-10">
        <div className="max-w-3xl flex flex-col items-center justify-center text-center">
          <Headphones className="text-primary h-12 w-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-6">Entre em contato</h2>
          <Text className="mb-8 leading-normal text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex
            facere tempora praesentium minima autem obcaecati nobis voluptas?
            Adipisci explicabo quam officiis quae, deserunt aperiam? Aperiam,
            nisi quisquam! Expedita, incidunt!
          </Text>

          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="text-base">
              Whatsapp
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button className="text-base" size="lg">
              Fale conosco
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ContainerWrapper>

      <SectionsDivider />

      {/* Form */}
      <ContainerWrapper
        id="make-request"
        className="grid grid-cols-2 gap-12 pt-6"
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
            Preencha o formulário ou ligar para +55 32 99110-0990
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
        <div>
          <RequestForm />
        </div>
      </ContainerWrapper>
    </>
  )
}
