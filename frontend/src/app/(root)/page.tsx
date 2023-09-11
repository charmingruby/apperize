import { Button } from '@/components/ui/button'
import { ArrowRight, Lightbulb } from 'lucide-react'
import { ValueCard } from './components/value-card'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-8">
            <h1 className="m-0 font-bold text-5xl text-center">
              Transforme sua ideia em um{' '}
              <span className="text-primary">Software</span>.
            </h1>
            <p className="text-muted-foreground text-center leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              reiciendis obcaecati quas rerum ullam quis impedit. Sapiente sequi
              adipisci temporibus velit, animi ab autem dolor, quo, similique
              nihil tempora amet!
            </p>
          </div>
          <div className="flex gap-4">
            <Button>Faça seu pedido</Button>
            <Button variant="outline" className="flex items-center gap-1">
              <span>Produtos</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="container">
        <div className="mb-12 grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <div className="w-fit space-y-4 mb-6 ">
              <span className="text-primary uppercase tracking-widest font-semibold block">
                Plataforma para o cliente
              </span>
              <div className="w-1/6 h-0.5 bg-primary" />
            </div>
            <strong className="leading-relaxed text-4xl font-semibold">
              Traga sua ideia e nós a tornaremos{' '}
              <strong className="font-bold text-primary underline underline-offset-8  ">
                realidade
              </strong>
              .
            </strong>
          </div>
          <div className="flex justify-end items-end">
            <Button>Fale conosco</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={0}
          />
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={1}
          />
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={2}
          />
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={3}
          />
        </div>
      </section>

      {/* Featured */}
      <section>
        <div></div>
        <div></div>
      </section>

      {/* Features */}
      <section></section>

      {/* Conclusion */}
      <section></section>

      {/* CTA */}
      <section></section>
    </>
  )
}
