import { Button } from '@/components/ui/button'
import { ArrowRight, RefreshCcw } from 'lucide-react'
import { FeatureItem } from './components/feature-item'
import { ValuesList } from './components/values-list'
import { FeatureGuarantee } from './components/feature-guarantee'
import Image from 'next/image'
import tasksFeedback from '@/assets/tasks-feedback.svg'
import communication from '@/assets/communication.svg'
import quality from '@/assets/quality.svg'
import { Text } from '@/components/ui/text'
import { Card } from '@/components/ui/card'
import { Title } from '@/components/title'

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
      <section className="container py-20">
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-3">
            <div className="w-fit space-y-4 mb-6 ">
              <span className="text-primary uppercase tracking-widest font-semibold block">
                Plataforma feita para o cliente
              </span>
              <div className="w-1/6 h-0.5 bg-primary" />
            </div>
            <strong className="leading-relaxed text-4xl font-semibold">
              Traga sua ideia e nós a tornaremos realidade.
            </strong>
          </div>
          <div className="flex justify-end items-end">
            <Button>Fale conosco</Button>
          </div>
        </div>
        <ValuesList />
      </section>

      {/* Task */}
      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Content */}
          <div className="flex justify-center flex-col">
            <Title title="Visualização do progresso" />

            <strong className="font-semibold text-3xl">
              Tenha acesso ao andamento do seu projeto
            </strong>

            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam
              similique dolorum. Obcaecati accusamus porro quia, ex asperiores,
              officia pariatur magnam esse doloribus dolorum voluptates quam hic
              est blanditiis sequi!
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-2">
              <FeatureGuarantee text="Controle do serviço" />
              <FeatureGuarantee text="Feedbacks constantes" />
              <FeatureGuarantee text="Sugerir mudanças no serviço" />
              <FeatureGuarantee text="Dashboard do serviço" />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Image src={tasksFeedback} alt="Tasks illustrations" />
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center">
            <Image
              src={communication}
              alt="Customer choosing design"
              className="w-[36rem]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <Title title="Visualização do progresso" />

            <strong className="font-semibold text-3xl">
              Tenha acesso ao andamento do seu projeto
            </strong>

            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam
              similique dolorum. Obcaecati accusamus porro quia, ex asperiores,
              officia pariatur magnam esse doloribus dolorum voluptates quam hic
              est blanditiis sequi!
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-2">
              <FeatureGuarantee text="Controle do serviço" />
              <FeatureGuarantee text="Feedbacks constantes" />
              <FeatureGuarantee text="Sugerir mudanças no serviço" />
              <FeatureGuarantee text="Dashboard do serviço" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        {/* Presentation */}
        <div className="mx-auto text-center mb-16 flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">
            Funcionalidades para melhorar sua{' '}
            <strong className="text-primary">experiência</strong>
          </h2>
          <p className="text-muted-foreground text-lg">
            Algumas de nossas funcionalidades que vao ajudar te integrar na
            criação do seu serviço.
          </p>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background-highlight-main">
        <div className="container py-8 grid grid-cols-2 gap-12">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="text-3xl  font-semibold">
              <span className="bg-background-highlight-dark text-primary">
                Qualidade
              </span>{' '}
              por padrão
            </span>

            <span className="block text-muted-foreground mt-4 text-xl font-medium">
              Acreditamos que podemos alavancar seus negocios
            </span>

            {/* How we can help */}
            <div className="flex flex-col my-8 gap-4 text-base text-muted-foreground">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, aliquid. Incidunt, voluptate qui nulla ullam porro
                iusto dolore id sequi laudantium ab autem odit unde mollitia.
                Pariatur quos voluptate suscipit.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, aliquid. Incidunt, voluptate qui nulla ullam porro
                iusto dolore id sequi laudantium ab autem odit unde mollitia.
                Pariatur quos voluptate suscipit.
              </Text>
            </div>

            <Button className="w-fit flex items-center gap-1">
              <span>Sobre a Wisp</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="flex items-center justify-end">
            <Image
              src={quality}
              alt="Imagem de qualidade"
              className="w-[32rem]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 flex flex-col">
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center gap-8 mb-12">
          <span className="text-primary uppercase tracking-widest font-semibold block">
            Venha se modernizar conosco
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Card>card para pedir</Card>
          <Card>card de produtos</Card>
        </div>
      </section>
    </>
  )
}
