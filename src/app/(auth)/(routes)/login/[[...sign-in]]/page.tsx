import { SignIn } from '@clerk/nextjs'
import { TrendingUp } from 'lucide-react'
import Image from 'next/image'
import loginImage from '@/assets/example-hero-image.jpg'
import { PurpleFilter } from '@/components/purple-filter'
import { Logo } from '@/app/(auth)/components/logo'

export default function Page() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <Logo />
        <SignIn signUpUrl="/registrar" />
      </div>

      <section className="hidden lg:flex">
        <div className=" relative w-full h-full">
          <PurpleFilter />
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
          />
        </div>
      </section>
    </div>
  )
}
