import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  AtSign,
  BookMarked,
  Check,
  ChevronRight,
  Computer,
  Layout,
  Quote,
} from 'lucide-react'
import { FeatureItem } from './components/feature-item'
import { ValuesList } from './components/values-list'
import Image from 'next/image'
import quality from '@/assets/quality.svg'
import { Text } from '@/components/ui/text'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Title } from '@/components/title'
import { ProductCategory } from './components/product-category'
import { TecList } from './components/tec-list'
import exampleImage from '@/assets/gustavo-dias-profile.jpeg'
import { Services } from './components/services'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-20 lg:pt-0 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">
          <div className="w-fit border p-1 rounded-full px-4 py-2 flex items-center gap-2">
            <small className="text-sm  text-muted-foreground font-medium">
              Venha estreiar a plataforma
            </small>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h1 className="m-0 font-bold text-5xl text-center">
                Transforme sua ideia em um{' '}
              </h1>

              <h2 className="text-primary m-0 font-bold text-5xl text-center">
                Software
              </h2>
            </div>

            {/* Text */}
            <p className="text-muted-foreground text-center leading-relaxed text-lg">
              Transformamos ideias em realidade digital. Somos uma software
              house dedicada a criar soluções personalizadas e inovadoras para
              atender às necessidades únicas do seu negócio.
            </p>
          </div>

          {/* Button group */}
          <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-fit">
            <Button size="lg" className="text-base">
              Faça seu pedido
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Entrar em contato
            </Button>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="container pt-20">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
          <div className="lg:col-span-3">
            <HeadingWrapper className="mb-0">
              <HeadingAnnotation annotation="Plataforma feita para o cliente" />
              <HeadingContentWrapper>
                <HeadingTitle>
                  Traga seu problema e nós retornamos a solução
                </HeadingTitle>
                <HeadingDescription>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas unde, facere rerum dolor accusamus adipisci? Hic
                  excepturi laborum tempore nam consectetur vitae facere, ipsam
                  omnis, rerum, voluptatem quaerat. Deleniti, dolores.
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>
          </div>
          <div className="flex w-full md:justify-end items-end">
            <Button className=" w-full md:w-fit md">Fazer pedido</Button>
          </div>
        </div>
        <ValuesList />
      </section>

      {/* Services */}
      <section className="container pt-20">
        <div>
          <Title title="Com o que podemos te ajudar" />
          <strong className="text-4xl font-semibold leading-snug block">
            Nossos{' '}
            <span className="text-primary bg-background-highlight-dark">
              serviços
            </span>
          </strong>
        </div>

        <Services />
      </section>

      {/* USP */}
      <section className="container pt-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Presentation */}
          <div className="flex flex-col justify-center">
            <Title title="Por que confiar na Apperize?" />
            <strong className="text-4xl font-semibold leading-tight mb-8 block">
              Diferenciais que você encontra na{' '}
              <span className="text-primary bg-background-highlight-dark  ">
                Apperize
              </span>
            </strong>

            <Text className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
              blanditiis ex quam reiciendis commodi velit quia, incidunt esse
              enim, aliquid quisquam sequi. Obcaecati ad impedit repudiandae
              debitis aliquam veritatis.
            </Text>

            <Button size="lg" className="flex text-base w-full md:w-fit mt-12">
              <span> Buscar soluçao com nossa equipe</span>
            </Button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-8">
            <FeatureItem
              icon={Check}
              title="Entregas rápidas e funcionais (MVP)"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, natus sit similique pariatur quis mollitia reprehenderit molestiae vitae, quia saepe quibusdam, error rerum quisquam deserunt."
            />
            <FeatureItem
              icon={Check}
              title="Entregas rápidas e funcionais (MVP)"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, natus sit similique pariatur quis mollitia reprehenderit molestiae vitae, quia saepe quibusdam, error rerum quisquam deserunt."
            />
            <FeatureItem
              icon={Check}
              title="Entregas rápidas e funcionais (MVP)"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, natus sit similique pariatur quis mollitia reprehenderit molestiae vitae, quia saepe quibusdam, error rerum quisquam deserunt."
            />
          </div>
        </div>
      </section>

      {/* Techs */}
      <section className="container pt-20">
        <div className="mb-12 flex flex-col md:items-center">
          <div className="text-primary uppercase tracking-widest font-semibold block mb-6">
            Tecnologias que usamos
          </div>
          <h3 className="leading-snug text-4xl font-semibold block">
            Tecnologias selecionadas para entregar a melhor{' '}
            <strong className="bg-background-highlight-dark text-primary">
              performance
            </strong>
          </h3>
        </div>
        <TecList />
      </section>

      {/* Projects (future) */}

      {/* Depositions */}
      <section className="bg-primary-gradient mt-20">
        <div className="py-20 container grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground ">
          <div className="flex flex-col gap-6">
            <span className="uppercase tracking-widest font-semibold block">
              Depoimentos
            </span>
            <strong className="text-5xl font-semibold leading-tight mb-8 block">
              O que nossos clientes dizem sobre nós:
            </strong>
          </div>

          {/* Deposition */}
          <div className=" flex flex-col gap-8">
            <Quote />
            <div className="flex flex-col gap-4">
              <p className="text-base max-w-sm italic">
                {`"`}Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minus rem soluta deleniti cum, possimus doloribus iste sint
                sequi cumque beatae molestiae corporis nam error nisi deserunt,
                perspiciatis officia ex nobis?{`"`}
              </p>

              <div className="flex items-center gap-2">
                <div className="p-1 border-2 border-border rounded-full h-16 w-16">
                  <Image
                    src={exampleImage}
                    alt="Example deposition image"
                    className="rounded-full"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  {/* Name */}
                  <strong className="text-lg">Gustavo Dias</strong>

                  {/* Role */}
                  <span className="block">
                    Fundador da <strong>Ymir</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Deposition */}
          <div className=" flex flex-col gap-8">
            <Quote />
            <div className="flex flex-col gap-4">
              <p className="text-base max-w-sm italic">
                {`"`}Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minus rem soluta deleniti cum, possimus doloribus iste sint
                sequi cumque beatae molestiae corporis nam error nisi deserunt,
                perspiciatis officia ex nobis?{`"`}
              </p>

              <div className="flex items-center gap-2">
                <div className="p-1 border-2 border-border rounded-full h-16 w-16">
                  <Image
                    src={exampleImage}
                    alt="Example deposition image"
                    className="rounded-full"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  {/* Name */}
                  <strong className="text-lg">Gustavo Dias</strong>

                  {/* Role */}
                  <span className="block">
                    Fundador da <strong>Ymir</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <Title title="Solicite seu orçamento" />
            <strong className="text-4xl font-semibold leading-tight block">
              Preparado para melhorar seu negocio com a{' '}
              <span className="bg-background-highlight-dark text-primary">
                Apperize
              </span>
              ?
            </strong>

            {/* How we can help */}
            <div className="flex flex-col gap-4 mt-8">
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

            <Button size="lg" className="flex w-full md:w-fit mt-12">
              <span className="text-base">
                Quero tirar minha ideia do papel
              </span>
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

      {/* Cases (future) */}

      {/* CTA */}
      <section className="bg-background-highlight-main border-t border-border">
        <div className="container py-20 flex flex-col">
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center gap-8 mb-12">
            <span className="text-primary uppercase tracking-widest font-semibold block">
              Venha se modernizar conosco
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-6 md:gap-12">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Faça seu pedido customizado</CardTitle>
              </CardHeader>
              <CardContent>
                <Card className=" bg-background-highlight-main py-8">
                  <div className="max-w-sm mx-auto text-center flex flex-col items-center gap-4">
                    <CardDescription>
                      Nos envie uma mensagem comunicando suas necessidade
                    </CardDescription>

                    <div className="flex gap-2">
                      <Button className="gap-1 w-fit">
                        <span>Fazer pedido</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>Veja todos nossos produtos</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>

            <div className="flex justify-center items-center">
              <span className="text-muted-foreground">ou</span>
            </div>

            <Card className="w-full flex flex-col">
              <CardHeader>
                <CardTitle>Produtos prontos</CardTitle>
                <CardDescription>
                  Como alternativa, use nossos produtos já prontos.
                </CardDescription>
              </CardHeader>

              <CardContent className="border-none flex w-full flex-1">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <ProductCategory icon={Computer} category="Sistemas" />
                  <ProductCategory icon={BookMarked} category="Blogs" />
                  <ProductCategory icon={Layout} category="Sites" />
                  <ProductCategory icon={AtSign} category="Marca" />
                </div>
              </CardContent>

              <CardFooter>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>Veja todos nossos produtos</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
