/* External */
import { ArrowRight, Code2, Quote } from 'lucide-react'
import Image from 'next/image'

/* Internal */
import { Title } from '@/components/title'
import { Text } from '@/components/ui/text'
import founderImg from '@/assets/img/team/gustavo-dias-profile.jpeg'
import { Missions } from './components/missions'
import { Button } from '@/components/ui/button'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { TextHighlight } from '@/components/text-highlight'
import { AdvantagesAnnotation } from './components/advantages-annotations'
import heroImg from '@/assets/img/heros/about.png'
import { Differentials } from './components/differentials'

export default function About() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper className="min-h-screen flex items-center gap-8">
        {/* Content */}
        <div className=" grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="border border-border shadow-md rounded-md bg-background-highlight-dark text-primary w-fit p-2">
                <Code2 className="h-8 w-8" />
              </div>

              <div className="flex flex-col text-lg">
                <span className="leading-tight">Somos uma</span>
                <strong className="leading-tight">Software House</strong>
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col gap-1 mt-16">
              <h1 className="m-0 text-4xl flex flex-col gap-2 font-semibold">
                Transformamos necessidades em{' '}
                <span className="text-primary">soluções tecnológicas</span>
              </h1>
            </div>

            {/* Text */}
            <div className="mt-8 mb-4">
              <Text className="leading-relaxed text-lg text-muted-foreground">
                Nossa equipe dedicada e experiente está pronta para transformar
                suas visões em soluções de software sob medida que atendam às
                suas necessidades específicas. Com foco no cliente, trabalhamos
                em parceria para entregar produtos digitais excepcionais que
                impulsionam o sucesso dos nossos clientes.
              </Text>
            </div>

            {/* Button */}
            <Button className="w-fit gap-1">
              Fazer pedido
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Image */}
          <div className="rounded-md flex items-center overflow-hidden">
            <Image
              src={heroImg}
              alt=""
              className="rounded-md w-full h-full object-cover"
              quality={100}
            />
          </div>
        </div>
      </ContainerWrapper>

      {/* What */}
      <ContainerWrapper>
        <Title title="O que estamos construindo?" underline={false} />

        <div className="grid grid-cols-2 gap-12 mb-12">
          {/* Heading */}
          <HeadingWrapper className="mb-0">
            <HeadingContentWrapper>
              <HeadingTitle>
                O que a <TextHighlight>Apperize</TextHighlight> busca?
              </HeadingTitle>
              <HeadingDescription>
                busca desenvolver soluções tecnológicas personalizadas para
                atender às necessidades específicas de seus clientes, fornecendo
                expertise em design, programação e implementação de software.
                Ela busca colaborar de perto com os clientes para entender suas
                metas e desafios, transformando essas informações em software de
                alta qualidade, eficiente e seguro. Três problemas comuns que
                uma software house pode resolver incluem:
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          {/* Topics */}
          <div className="flex justify-end w-full items-center">
            <div className=" border-l w-full h-full flex items-center">
              <div className="h-px w-full bg-border" />
            </div>

            <AdvantagesAnnotation />
          </div>
        </div>

        <Missions />
      </ContainerWrapper>

      {/* How */}
      <section className="border-y bg-background-highlight-main">
        <ContainerWrapper className="grid grid-cols-2 gap-12">
          <div>
            <HeadingWrapper>
              <HeadingAnnotation annotation="Como funcionamos" />
              <HeadingContentWrapper>
                <HeadingTitle>Pensado para o cliente</HeadingTitle>
                <HeadingDescription>
                  Para garantir a satisfação do cliente, nossa equipe se
                  compromete a compreender profundamente as necessidades e
                  objetivos de cada cliente por meio de comunicação aberta,
                  feedback constante e colaboração ativa, tornando o cliente
                  parte integral do processo de criação.
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>
          </div>

          <Differentials />
        </ContainerWrapper>
      </section>

      {/* Pitch */}
      <ContainerWrapper>
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <HeadingWrapper className="items-center">
            <HeadingAnnotation annotation="Apresentação" />
            <HeadingTitle>O propósito da Apperize</HeadingTitle>
          </HeadingWrapper>

          <div className="flex flex-col items-center gap-8">
            <div className="space-y-4">
              {/* Openning quote */}
              <div>
                <Quote className="text-primary h-5 w-5" />
              </div>

              {/* Pitch text */}
              <Text className="italic">
                Nossa missão é desenvolver uma plataforma na qual as pessoas
                possam compartilhar seus desafios, e nós os abordamos por meio
                de soluções tecnológicas. Reconhecemos que esse processo demanda
                tempo, por isso, valorizamos o fornecimento de feedback contínuo
                aos nossos clientes, mantendo-os atualizados regularmente sobre
                o progresso de seus projetos.
              </Text>

              {/* Closing quote */}
              <div className="flex justify-end">
                <Quote className="text-primary h-5 w-5" />
              </div>
            </div>

            {/* Assign */}
            <div className="flex items-center gap-2">
              <Image
                src={founderImg}
                alt="Fundador da Apperize, Gustavo Dias"
                className="w-10 h-10 rounded-full"
              />

              <div className="h-12 w-px bg-border" />

              <div className="flex flex-col text-start">
                <small className="text-sm font-medium">Gustavo Dias</small>
                <small className="text-muted-foreground">
                  Fundador da Apperize
                </small>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="border-t bg-primary-gradient">
        <ContainerWrapper className="flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <HeadingTitle className="text-primary-foreground">
              Escolha a melhor oportunidade para sua empresa
            </HeadingTitle>

            <div className="mt-8 flex gap-6">
              <Button variant="secondary">Fazer pedido</Button>
              <Button
                variant="ghost"
                className="border border-border text-secondary"
              >
                Entrar em contato
              </Button>
            </div>
          </div>
        </ContainerWrapper>
      </section>
    </>
  )
}
