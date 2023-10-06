/* External */
import { ArrowDown, Code2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/* Internal */
import { Title } from '@/components/title'
import { Text } from '@/components/ui/text'
import { Missions } from './components/missions'
import heroImage from '@/assets/about-hero-image.svg'
import ctaImage from '@/assets/about-cta-image.jpg'
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

export default function About() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper className="py-36 min-h-screen grid grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex items-center">
          <Image
            src={heroImage}
            alt="Pessoas melhorando sua empresa com marketing"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="flex items-center gap-4">
            <div className="border border-border shadow-md rounded-md bg-background-highlight-dark text-primary w-fit p-4">
              <Code2 className="h-10 w-10" />
            </div>

            <div className="flex flex-col text-2xl">
              <span>Somos uma</span>
              <strong>Software House</strong>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1 mt-16">
            <h1 className="m-0 text-4xl flex flex-col gap-2 font-semibold">
              Ajudamos nossos clientes
              <strong className="block text-primary">
                {' '}
                atraves da programação
              </strong>
            </h1>
          </div>

          {/* Text */}
          <div className="my-12">
            <Text className="leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nostrum deserunt, magni, minus assumenda omnis eos odio
              minima illo, rem possimus dignissimos laboriosam similique dicta
              harum consequuntur fugit. Aut, distinctio!
            </Text>
          </div>

          {/* Learn more */}
          <Link href="/" prefetch={false} className="flex items-center gap-4">
            <div className="bg-background-highlight-dark p-1 rounded-full border-4 border-background-highlight-main">
              <ArrowDown className="text-primary" />
            </div>

            <span className="text-lg font-medium">Saiba mais</span>
          </Link>
        </div>
      </ContainerWrapper>

      {/* Values */}
      <ContainerWrapper>
        <Title title="O que estamos construindo?" underline={false} />

        <div className="grid grid-cols-2 gap-12 mb-12">
          {/* Heading */}
          <HeadingWrapper className="mb-0">
            <HeadingContentWrapper>
              <HeadingTitle>
                Software <TextHighlight> sob demanda</TextHighlight>
              </HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                itaque labore commodi suscipit, sunt nostrum dolor veniam
                cupiditate ex libero aliquid, perspiciatis autem nulla deserunt
                omnis minus voluptatem quod ipsa.
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          {/* Topics */}
          <div className="flex justify-end w-full items-center gap-8">
            <div className=" border-l w-full h-16 flex items-center">
              <div className="h-px w-full bg-border" />
            </div>

            <div className="flex flex-col items-end min-w-[6rem] gap-2">
              <small className="font-medium text-muted-foreground">
                Landing pages
              </small>
              <small className="font-medium text-muted-foreground">
                Landing pages
              </small>
              <small className="font-medium text-muted-foreground">
                Landing pages
              </small>
            </div>
          </div>
        </div>

        <Missions />
      </ContainerWrapper>

      {/* Founded on what */}
      <section className="border-y bg-background-highlight-main">
        <ContainerWrapper className="grid grid-cols-2 gap-12">
          <div>
            <HeadingWrapper>
              <HeadingAnnotation annotation="Feito para o cliente" />
              <HeadingTitle>Pensado para o cliente</HeadingTitle>
            </HeadingWrapper>
          </div>

          <div>image</div>
        </ContainerWrapper>
      </section>

      {/* Moment */}
      <ContainerWrapper>moment</ContainerWrapper>

      {/* CTA */}
      <ContainerWrapper>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <Image
              src={ctaImage}
              alt="Programadores em uma empresa"
              className="rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center">
            <HeadingWrapper>
              <HeadingAnnotation annotation="Modernização" />
              <HeadingTitle>Title</HeadingTitle>
            </HeadingWrapper>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut
              quisquam nobis numquam natus labore est perspiciatis illum facilis
              officia nemo illo harum veniam non magnam corrupti praesentium
              optio? Voluptates.
            </Text>

            <Button className="mt-8 w-fit">Entre em contato</Button>
          </div>
        </div>
      </ContainerWrapper>
    </>
  )
}
