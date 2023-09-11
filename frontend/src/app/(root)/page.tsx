import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { ArrowRight, Lightbulb } from 'lucide-react'

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
        <div className="mb-12">
          <span className="text-primary uppercase tracking-widest font-semibold mb-6 block">
            Plataforma do cliente
          </span>
          <p className="leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            illum aliquam deserunt quas ut fuga praesentium quia sapiente, ad
            aliquid perferendis, voluptatibus dolores modi repellat adipisci
            voluptas rem harum expedita.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <div>
                <Lightbulb />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <Lightbulb />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <Lightbulb />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <Lightbulb />
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured */}
      <section></section>

      {/* Features */}
      <section></section>

      {/* Conclusion */}
      <section></section>

      {/* CTA */}
      <section></section>
    </>
  )
}
