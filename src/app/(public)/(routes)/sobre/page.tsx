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

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="container py-36 min-h-screen grid grid-cols-2 gap-8">
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
      </section>

      {/* Purpose */}
      <section className="py-20 container ">
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col ">
            <Title title="O que estamos construindo?" underline={false} />
            <Text className="font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque
              placeat debitis aut accusamus quae amet aliquid. Ullam voluptatum
              non quasi quos amet veritatis magnam? Nam consequuntur iure
              voluptatem repellendus?s
            </Text>
          </div>

          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>

        <Missions />
      </section>

      {/* Founded on what */}
      <section className="py-20 border-y bg-background-highlight-main">
        <div>Fundado pelo cliente</div>
      </section>

      {/* Moment */}

      {/* Customer */}

      {/* CTA */}
      <section className="container py-20 grid grid-cols-2 gap-12">
        <div>
          <Image
            src={ctaImage}
            alt="Programadores em uma empresa"
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Title title="Modernização" />
          <h2 className="text-2xl">Title</h2>
          <Text className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut
            quisquam nobis numquam natus labore est perspiciatis illum facilis
            officia nemo illo harum veniam non magnam corrupti praesentium
            optio? Voluptates.
          </Text>

          <Button className="mt-8 w-fit">Entre em contato</Button>
        </div>
      </section>
    </>
  )
}
