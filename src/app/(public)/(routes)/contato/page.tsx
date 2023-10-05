'use client'

import { Text } from '@/components/ui/text'
import { EmailForm } from './components/email-form'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building, Globe2 } from 'lucide-react'
import { Card, CardHeader } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <>
      <section className="w-full bg-primary-gradient pt-16">
        <div className="py-12 container">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="text-primary-foreground text-5xl font-bold">
              Fale conosco
            </h2>
            <Text variant="primaryForeground" size="sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              quaerat repudiandae incidunt perferendis voluptate in, est quod
              temporibus unde libero adipisci, nesciunt asperiores non sit, amet
              corrupti earum itaque tempore?
            </Text>
          </div>
        </div>
      </section>

      <section className="container py-16 pb-8 ">
        <Title title="Respondemos rapidamente" />
        <h2 className="text-4xl font-bold mb-8">Entrar em contato</h2>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Email form */}
          <div className="flex flex-col justify-center z-20 md:pr-8">
            <EmailForm />
          </div>

          <div className="border-l flex pl-8">
            <h2>Precisa de apresentaçao?</h2>
          </div>
        </div>
      </section>

      {/* Medias */}

      {/* Options */}
      <section className="border-t py-16">
        <div className="container">
          <Title title="Atentendimento" />
          <h2></h2>

          <div className="grid grid-cols-2 gap-12">
            {/* Local */}
            <Card>
              <CardHeader>
                <Building />
              </CardHeader>
            </Card>

            {/* Remote */}
            <Card>
              <Globe2 />
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-gradient py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-5xl font-semibold text-primary-foreground mb-8">
              Quer estar a frente dos concorrentes?
            </h2>

            <Text variant="primaryForeground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo,
              quidem optio corrupti ad cum suscipit, maiores natus, doloribus
              voluptatem vitae non fugiat laudantium perspiciatis placeat
              consequatur. Excepturi, nulla ipsum.
            </Text>

            <Button variant="secondary" className="gap-1 mt-6">
              Fazer pedido
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
