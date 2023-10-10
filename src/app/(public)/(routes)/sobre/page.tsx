/* External */
import { ArrowRight, Check, Code2 } from 'lucide-react'
import Image from 'next/image'

/* Internal */
import { Title } from '@/components/title'
import { Text } from '@/components/ui/text'
import founderImg from '@/assets/gustavo-dias-profile.jpeg'
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
import heroImg from '@/assets/about-hero.png'

export default function About() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper className="min-h-screen flex items-center gap-8">
        {/* Content */}
        <div className=" grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto corporis possimus facere odit similique omnis
                  repellat! Dolorum accusamus nulla aspernatur quos beatae omnis
                  recusandae possimus quidem ipsam, laborum quisquam ut!
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <div className="bg-background-highlight-dark w-6 h-6 rounded-full flex items-center justify-center">
                <Check className="text-primary h-4 w-4" />
              </div>
              <p className="text-sm w-full leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore, accusantium porro quia beatae iste quas officiis harum
                tenetur ipsa adipisci animi iusto quod maiores nisi soluta et
                exercitationem voluptates unde.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-background-highlight-dark w-6 h-6 rounded-full flex items-center justify-center">
                <Check className="text-primary h-4 w-4" />
              </div>
              <p className="text-sm w-full leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore, accusantium porro quia beatae iste quas officiis harum
                tenetur ipsa adipisci animi iusto quod maiores nisi soluta et
                exercitationem voluptates unde.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-background-highlight-dark w-6 h-6 rounded-full flex items-center justify-center">
                <Check className="text-primary h-4 w-4" />
              </div>
              <p className="text-sm w-full leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore, accusantium porro quia beatae iste quas officiis harum
                tenetur ipsa adipisci animi iusto quod maiores nisi soluta et
                exercitationem voluptates unde.
              </p>
            </div>
          </div>
        </ContainerWrapper>
      </section>

      {/* Pitch */}
      <ContainerWrapper>
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <HeadingWrapper className="items-center">
            <HeadingAnnotation annotation="Apresentação" />
            <HeadingTitle>A ideia por tras da Apperize</HeadingTitle>
          </HeadingWrapper>

          <div className="flex flex-col items-center gap-8">
            {/* Pitch text */}
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              quidem sit. Nostrum, aliquam libero blanditiis dolores qui
              explicabo eos, earum aliquid, tempore dolorem cumque assumenda
              quam dolor eveniet accusamus modi.
            </Text>

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

            <div className="mt-8 flex gap-4">
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
