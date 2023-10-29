/**
 * External
 */
import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react'

/**
 * Internal
 */
import { Button } from '@/components/ui/button'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import gustavoDiasImage from '@/assets/img/team/gustavo-dias-profile.jpeg'
import felipeBignotoImage from '@/assets/img/team/felipe-bignoto-profile.jpeg'
import { TeamMember } from './components/team-member'
import exampleImage from '@/assets/img/photos/developers-office.jpeg'
import { TextHighlight } from '@/components/text-highlight'
import heroImage from '@/assets/img/heros/about.svg'
import { RedirectLink } from '@/components/redirect-link'
import { PurpleFilter } from '@/components/purple-filter'
import { ValueItemList } from './components/value-list'

export default function About() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper className="flex items-center min-h-screen">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={heroImage}
              alt="Time de uma Start Up trabalhando em conjunto"
              priority
              quality={100}
            />
          </div>

          <div className="flex flex-col justify-center">
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

            <div className="mt-12">
              <h1 className="font-bold m-0 text-5xl/snug">
                Solucionamos problemas com{' '}
                <TextHighlight>Tecnologia</TextHighlight>
              </h1>
            </div>

            <Text className="mt-8">
              Como uma startup em ascensão, nossa plataforma oferece soluções
              tecnológicas personalizadas e inovadoras para vencer desafios e
              impulsionar seu sucesso. Com uma paixão por inovação e uma
              abordagem ágil, estamos prontos para liderar a revolução
              tecnológica ao seu lado.
            </Text>

            <div className="mt-16">
              <RedirectLink url="#description">
                <div className="flex items-center gap-4">
                  <div>
                    <ArrowDown className="h-6 w-6 text-primary" />
                  </div>

                  <span className="font-medium">Leia mais</span>
                </div>
              </RedirectLink>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      {/* Description */}
      <ContainerWrapper
        id="description"
        className=" bg-background-highlight-main rounded-xl shadow-sm border border-background-highlight-dark"
      >
        <div className="max-w-2xl mx-auto">
          <Text className="text-center text-xl">
            Somos uma software house dedicada a{' '}
            <span className="font-semibold">
              criar soluções acessíveis que resolvem problemas da vida real
            </span>
            . Nossa missão é tornar a tecnologia mais inclusiva, desenvolvendo
            softwares inovadores que atendam às necessidades da população de
            forma acessível e eficaz.
          </Text>
        </div>
      </ContainerWrapper>

      {/* Vision */}
      <ContainerWrapper className="grid grid-cols-2 gap-12">
        <div className="relative rounded-xl">
          <PurpleFilter className="rounded-xl aspect-video" />
          <Image
            src={exampleImage}
            alt=""
            className="aspect-video rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div>
            <HeadingWrapper className="mb-4">
              <HeadingAnnotation annotation="Visão" />
              <HeadingTitle>Nossa visão</HeadingTitle>
            </HeadingWrapper>

            <Text>
              Nossa visão é ser líderes na transformação digital, capacitando
              empresas a abraçar a inovação de maneira acessível, impulsionando
              o crescimento e a competitividade. Queremos ser o parceiro
              estratégico que as empresas confiam para alcançar o sucesso no
              mundo digital.
            </Text>
          </div>

          <RedirectLink url="#vision">
            <button className="flex items-center gap-4">
              <div>
                <ArrowDown className="h-6 w-6 text-primary" />
              </div>

              <span className="font-medium">Missão</span>
            </button>{' '}
          </RedirectLink>
        </div>
      </ContainerWrapper>

      {/* Mission */}
      <ContainerWrapper className="grid grid-cols-2 gap-12" id="vision">
        <div className="flex flex-col justify-center gap-8">
          <div>
            <HeadingWrapper className="mb-4">
              <HeadingAnnotation annotation="Missão" />
              <HeadingTitle>Nossa missão</HeadingTitle>
            </HeadingWrapper>

            <Text>
              Nossa missão é criar soluções de software personalizadas que
              atendam às necessidades específicas das empresas, promovendo a
              inclusão digital e fortalecendo a eficiência e a competitividade.
              Buscamos ser o parceiro que capacita empresas de todos os tamanhos
              a alcançarem crescimento e sucesso no ambiente digital.
            </Text>
          </div>

          <RedirectLink url="#team">
            <button className="flex items-center gap-4">
              <div>
                <ArrowDown className="h-6 w-6 text-primary" />
              </div>

              <span className="font-medium">Equipe</span>
            </button>{' '}
          </RedirectLink>
        </div>

        <div className="relative rounded-xl">
          <PurpleFilter className="rounded-xl aspect-video" />
          <Image
            src={exampleImage}
            alt=""
            className="aspect-video rounded-xl"
          />
        </div>
      </ContainerWrapper>

      {/* Values */}
      <ContainerWrapper id="team">
        <HeadingWrapper className="text-center items-center max-w-3xl mx-auto">
          <HeadingAnnotation annotation="Valores" />
          <HeadingContentWrapper>
            <HeadingTitle>
              Somos uma equipe ambiciosa e inteligente com uma missão
              compartilhada
            </HeadingTitle>
            <HeadingDescription>
              Nossos valores compartilhados nos mantêm conectados e nos guiam
              como uma equipe.
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <ValueItemList />
      </ContainerWrapper>

      {/* Depositions */}

      {/* Team */}
      <ContainerWrapper className="grid grid-cols-2 gap-12">
        <div className="max-w-lg">
          <HeadingWrapper className="mb-0">
            <HeadingAnnotation annotation="Equipe" />
            <HeadingTitle>Conheça nossa equipe</HeadingTitle>
          </HeadingWrapper>

          <Text className="mt-4 mb-8">
            Nossa equipe, embora ainda compacta, é repleta de paixão e
            habilidades. Com a assinatura de desenvolvimento da nossa startup,
            sua equipe terá acesso direto à nossa expertise. Vamos começar essa
            jornada juntos.
          </Text>

          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="text-base">
              O que fazemos
            </Button>
            <Button size="lg" className="text-base">
              Trabalhe conosco <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <TeamMember
            avatar={gustavoDiasImage}
            name="Gustavo Dias"
            role="Fundador & CEO"
            description="Desenvolvedor Full Stack React, Node e Elixir."
            linkedinUrl="/"
            githubUrl="/"
          />
          <TeamMember
            avatar={felipeBignotoImage}
            name="Felipe Bignoto"
            role="Desenvolvedor"
            description="Desenvolvedor Front End React."
            linkedinUrl="/"
            githubUrl="/"
          />
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-background-highlight-main border-t border-background-highlight-dark">
        <ContainerWrapper>
          <div className="max-w-2xl mx-auto flex flex-col text-center items-center">
            <h2 className="text-4xl font-semibold">Conecte-se conosco</h2>
            <Text className="mt-4 mb-8">
              Estamos ansiosos para ouvir sobre suas ideias, projetos e
              desafios. Entre em contato com nossa equipe para iniciar uma
              conversa que pode levar sua startup tecnológica a novos patamares.
              Juntos, vamos moldar o futuro da inovação.
            </Text>

            <div className="flex items-center gap-4">
              <Button size="lg" variant="outline" className="text-base">
                WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </Button>

              <Button size="lg" className="text-base">
                Contate-nos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </ContainerWrapper>
      </section>
    </>
  )
}
