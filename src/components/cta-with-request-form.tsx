import { HelpCircle, TabletSmartphone } from 'lucide-react'
import { ContainerWrapper } from './ui/container-wrapper'
import { HeadingTitle } from './ui/heading'
import Link from 'next/link'
import { MinimalRequestForm } from './minimal-request-form'

export function CTAWithRequestForm() {
  return (
    <ContainerWrapper
      id="make-request"
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12  pt-0 lg:pt-0"
    >
      <div className="flex flex-col justify-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <TabletSmartphone className="text-primary h-9 w-9" />

          <strong className="text-4xl font-semibold font-alt tracking-wider">
            <span className="text-primary">App</span>
            erize
          </strong>
        </div>

        {/* Slogan */}
        <HeadingTitle className="mt-12 text-4xl max-w-md">
          Resolva os problemas de maneira digital
        </HeadingTitle>

        {/* Form or phone number */}
        <span className="mt-2 mb-8 text-base text-muted-foreground">
          Preencha o formulário
          <span className="block">ou ligar para +55 32 99110-0990</span>
        </span>

        <div className="flex items-center gap-2">
          <div className="bg-background-highlight-dark rounded-full p-1.5">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>

          <span className="font-medium">
            Alguma duvida?{' '}
            <Link
              prefetch={false}
              href="/"
              className="text-muted-foreground hover:text-primary hover:underline transition-all"
            >
              Entre em contato
            </Link>
          </span>
        </div>
      </div>

      <div className="col-span-2">
        <MinimalRequestForm />
      </div>
    </ContainerWrapper>
  )
}
