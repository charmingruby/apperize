import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TabletSmartphone, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import loginImage from '@/assets/example-hero-image.jpg'

export default function Login() {
  return (
    <div className="lg:h-screen grid grid-cols-2">
      <section className="max-w-md mx-auto w-full flex flex-col justify-center">
        {/* Intro */}
        <div className=" mb-12">
          {/* Logo */}
          <TabletSmartphone className="text-primary h-8 w-8 mb-8" />

          {/* Title */}
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold m-0">Entrar na sua conta</h1>

            {/* Sign up */}
            <span className="text-muted-foreground">
              Não possui conta?{' '}
              <Link
                prefetch={false}
                href="/registrar"
                className="text-primary font-semibold"
              >
                Criar uma conta
              </Link>
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="w-full">
          <div className="flex flex-col gap-6 mb-8">
            <div className="space-y-3">
              <Label htmlFor="emailAddress" className="text-base">
                Email
              </Label>
              <Input id="emailAddress" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-base">
                Senha
              </Label>
              <Input id="password" />
            </div>

            <div className="flex gap-2 items-center">
              <Checkbox />
              <Label>Lembrar de mim</Label>
            </div>
          </div>

          <Button className="w-full">Entrar</Button>
        </div>
      </section>
      <section>
        <div className=" relative w-full h-full">
          <div className="absolute bg-primary w-full h-full opacity-50 z-20" />
          <div className="absolute w-full h-full flex flex-col items-center justify-center z-30">
            <div className="max-w-lg flex gap-6">
              <div className="bg-background-highlight-dark p-2 h-fit rounded-full shadow-lg">
                <TrendingUp className="text-primary" />
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-semibold text-primary-foreground">
                  Modernize seu negócio
                </h2>
                <p className="leading-relaxed text-lg text-primary-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium dolorum illo qui fugit dicta molestias voluptatem
                  quae voluptates, cum animi autem necessitatibus ipsam soluta
                  reiciendis, quasi aspernatur saepe! Voluptatibus, eligendi!
                </p>
              </div>
            </div>
          </div>
          <Image
            src={loginImage}
            alt="Pessoa trabalhando em desenvolvimento"
            className="w-full h-full object-cover blur-sm"
          ></Image>
        </div>
      </section>
    </div>
  )
}
