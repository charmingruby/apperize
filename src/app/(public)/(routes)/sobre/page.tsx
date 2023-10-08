/* External */
import { ArrowDown, Check, Code2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/* Internal */
import { Title } from '@/components/title'
import { Text } from '@/components/ui/text'
import founderImg from '@/assets/gustavo-dias-profile.jpeg'
import { Missions } from './components/missions'
import heroImage from '@/assets/about-hero-image.svg'
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

            <div>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, doloremque sapiente provident labore aliquam iste
                illum, vel aliquid nostrum expedita quisquam molestiae, maiores
                nulla tempore eveniet. Aperiam eum animi porro?
              </Text>

              <div className="mt-8">
                <div className="flex gap-4">
                  <div className="bg-background-highlight-dark w-6 h-6 rounded-full flex items-center justify-center">
                    <Check className="text-primary h-4 w-4" />
                  </div>
                  <p className="text-sm w-full leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolore, accusantium porro quia beatae iste quas officiis
                    harum tenetur ipsa adipisci animi iusto quod maiores nisi
                    soluta et exercitationem voluptates unde.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>image</div>
        </ContainerWrapper>
      </section>

      {/* Pitch */}
      <ContainerWrapper>
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <HeadingWrapper className="items-center">
            <HeadingAnnotation annotation="Apresentação" />
            <HeadingTitle>A ideia por tras da Apperize</HeadingTitle>
          </HeadingWrapper>

          <div className="flex flex-col items-center">
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
                className="w-16 h-16 rounded-full"
              />

              <div className="h-16 w-px bg-border" />

              <div className="flex flex-col">
                <div className="flex flex-col">
                  <small>Gustavo Dias</small>
                  <small>Idealizador</small>
                </div>
                <div className="h-px w-1/3 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="border-t bg-background-highlight-main">
        <ContainerWrapper className="grid grid-cols-2 gap-12">
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
        </ContainerWrapper>
      </section>
    </>
  )
}
