import { Text } from '@/components/ui/text'
import { ArrowDown, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="container py-36 min-h-screen grid grid-cols-2 gap-8">
        {/* Image */}
        <div></div>

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
        <div className="py-20 container flex justify-center">bannner</div>
      </section>

      {/* How we can help */}
      <section className="py-20 container"></section>

      {/* Deposition of founder */}

      {/* Depositions (future) */}

      {/* CTA */}
    </>
  )
}
