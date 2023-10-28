/**
 * External
 */
import Image from 'next/image'
import {
  ArrowDown,
  ArrowRight,
  Clock,
  Code2,
  MapPin,
  MessagesSquare,
} from 'lucide-react'

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
import { ValueItem } from './components/value-item'

export default function About() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper className="flex items-center min-h-screen">
        <div className="grid grid-cols-2">
          <div>
            <Image src={heroImage} alt="" />
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

            <Text size="md" variant="lowOpacity" className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              in enim laboriosam reiciendis possimus sint blanditiis fugit,
              pariatur tempore, nemo numquam amet deleniti. Quo, nihil ratione
              nulla eum pariatur atque?
            </Text>

            <div className="mt-16">
              <RedirectLink url="/">
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
      <ContainerWrapper className="py-10 lg:py-10 bg-background-highlight-main rounded-xl shadow-sm border border-background-highlight-dark">
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
        <div>
          <Image src={exampleImage} alt="" />
        </div>

        <div className="flex flex-col justify-center">
          <HeadingWrapper>
            <HeadingAnnotation annotation="Visão" />
            <HeadingTitle>Nossa visão</HeadingTitle>
          </HeadingWrapper>

          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            deleniti obcaecati quibusdam minima praesentium animi necessitatibus
            recusandae explicabo, quo exercitationem cupiditate perferendis!
            Ipsa quasi aperiam labore tempora sequi odit delectus.
          </Text>
        </div>
      </ContainerWrapper>

      {/* Mission */}
      <ContainerWrapper className="grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <HeadingWrapper>
            <HeadingAnnotation annotation="Missão" />
            <HeadingTitle>Nossa missão</HeadingTitle>
          </HeadingWrapper>

          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            deleniti obcaecati quibusdam minima praesentium animi necessitatibus
            recusandae explicabo, quo exercitationem cupiditate perferendis!
            Ipsa quasi aperiam labore tempora sequi odit delectus.
          </Text>
        </div>

        <div>
          <Image src={exampleImage} alt="" />
        </div>
      </ContainerWrapper>

      {/* Values */}
      <ContainerWrapper>
        <HeadingWrapper className="text-center items-center max-w-3xl mx-auto">
          <HeadingAnnotation annotation="Nossos valores" />
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

        <div className="grid grid-cols-3 gap-8">
          <ValueItem
            icon={MessagesSquare}
            title="Conectar com clientes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptatum harum aliquam ipsum illo porro unde, saepe sit temporibus dicta, enim accusantium sequi ipsam, quod minima exercitationem et culpa."
          />
          <ValueItem
            icon={MessagesSquare}
            title="Conectar com clientes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptatum harum aliquam ipsum illo porro unde, saepe sit temporibus dicta, enim accusantium sequi ipsam, quod minima exercitationem et culpa."
          />
          <ValueItem
            icon={MessagesSquare}
            title="Conectar com clientes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptatum harum aliquam ipsum illo porro unde, saepe sit temporibus dicta, enim accusantium sequi ipsam, quod minima exercitationem et culpa."
          />
          <ValueItem
            icon={MessagesSquare}
            title="Conectar com clientes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptatum harum aliquam ipsum illo porro unde, saepe sit temporibus dicta, enim accusantium sequi ipsam, quod minima exercitationem et culpa."
          />
          <ValueItem
            icon={MessagesSquare}
            title="Conectar com clientes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptatum harum aliquam ipsum illo porro unde, saepe sit temporibus dicta, enim accusantium sequi ipsam, quod minima exercitationem et culpa."
          />
          <ValueItem
            icon={MessagesSquare}
            title="Conectar com clientes"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptatum harum aliquam ipsum illo porro unde, saepe sit temporibus dicta, enim accusantium sequi ipsam, quod minima exercitationem et culpa."
          />
        </div>
      </ContainerWrapper>

      {/* Depositions */}

      {/* Team */}
      <ContainerWrapper className="grid grid-cols-2 gap-12">
        <div className="max-w-lg">
          <HeadingWrapper>
            <HeadingAnnotation annotation="Nosso time" />
            <HeadingContentWrapper>
              <HeadingTitle>Conheça nossa equipe</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi laudantium a ipsam exercitationem totam perferendis
                suscipit! Nesciunt perferendis optio aliquid corporis vitae
                quod. Perspiciatis quasi laudantium placeat cum id debitis!
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <div className="flex gap-4">
            <Button variant="outline">Sobre nos</Button>
            <Button>Posiçoes abertas</Button>
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

      {/* Positions */}
      <ContainerWrapper>
        <HeadingWrapper className="text-center items-center max-w-3xl mx-auto">
          <HeadingAnnotation annotation="Venha trabalhar conosco" />
          <HeadingContentWrapper>
            <HeadingTitle>Posições abertas para a equipe</HeadingTitle>
            <HeadingDescription>
              Nossa equipe está contratando e nossos membros têm aprendido muito
              conosco. Junte-se a nós!
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-primary">Desenvolvimento de Software</span>
              <strong>Desenvolvedor Front End</strong>
              <p>
                Estamos procurando um Desenvolvedor React para nossa equipe.
              </p>

              <div className="flex items-center">
                <div className="flex items-center">
                  <MapPin />
                  Remoto
                </div>

                <div className="flex items-center">
                  <Clock />
                  Horário flexível
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <span>Entrar em contato</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-background-highlight-main border-t border-background-highlight-dark">
        <ContainerWrapper>
          <div className="max-w-2xl mx-auto flex flex-col text-center items-center">
            <h2 className="text-4xl font-semibold">Quer trabalhar conosco?</h2>
            <Text className="mt-4 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              praesentium reiciendis illum voluptatibus libero amet alias nobis
              itaque, fugiat, eum molestias sit temporibus officiis vero
              possimus? Sed minima laboriosam facere!
            </Text>
            <Button size="lg" className="text-base">
              Contate-nos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ContainerWrapper>
      </section>
    </>
  )
}
