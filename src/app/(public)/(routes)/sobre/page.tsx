import { Text } from '@/components/ui/text'
import { ArrowDown, Code2, Phone } from 'lucide-react'
import Link from 'next/link'
import heroImage from '@/assets/about-hero-image.svg'
import Image from 'next/image'
import { Title } from '@/components/title'
import { TimelineEvent } from './components/timeline-event'
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

      {/* Banner */}
      <section className="border-y border-border bg-background-highlight-main ">
        <div className="py-20 container flex justify-center">
          <div className="max-w-2xl text-center leading-relaxed">
            <p className="text-2xl">
              Em nossa software house, criamos um ambiente exclusivo para
              profissionais talentosos da tecnologia,{' '}
              <strong>
                com o objetivo de modernizar empresas por meio de soluções
                inovadoras
              </strong>
              . Promovemos uma jornada contínua de aprendizado e conexão com
              oportunidades de mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 container">
        <div className="flex flex-col">
          <div className="max-w-2xl w-full">
            <Title title="Nossao missão" />
            <h2 className="text-2xl text-primary font-semibold">
              Levando a tecnologia cada vez mais proxima da sua empresa
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="max-w-2xl w-full">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              corporis excepturi sequi veniam dolorum eos voluptates provident
              perferendis quod obcaecati libero labore, molestias mollitia iusto
            </Text>
            ad est voluptatibus aspernatur tempore!
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 container">
        {/* Title */}
        <h2>Nossa historia</h2>

        {/* Timeline */}
        <div>
          <TimelineEvent />
          <TimelineEvent />
          <TimelineEvent />
        </div>

        {/* Timeline segment */}
      </section>

      {/* Pitch */}
      <section></section>

      {/* Depositions (future) */}

      {/* CTA */}
      <section className="py-20 bg-primary-gradient">
        <div className="container grid grid-cols-2">
          <div>
            <h2>Entre em contato com a gente</h2>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              non pariatur voluptatum porro, autem beatae. Vel eum optio
              inventore cupiditate quia aliquam atque sint commodi, in libero
              vitae perspiciatis!
            </Text>
          </div>

          <div>
            <div>
              <strong>Nos mande uma mensagem</strong>

              <div>
                <Phone />
                <span>(32) 99110-0990</span>
              </div>
            </div>

            <Button variant="outline">Serviços</Button>
          </div>
        </div>
      </section>
    </>
  )
}