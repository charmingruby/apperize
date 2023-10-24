/**
 * External
 */
import { ArrowRight, Phone, Mail, MapPin, Cog } from 'lucide-react'

/**
 * Internal
 */
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { TextHighlight } from '@/components/text-highlight'
import { EmailForm } from './components/email-form'
import { ContactItem } from './components/contact-item'
import { RedirectLink } from '@/components/redirect-link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ContactBoard } from './components/contact-board'

export default function ContactPage() {
  return (
    <>
      <ContainerWrapper>
        <HeadingWrapper className="flex pt-6 items-center text-center">
          <HeadingContentWrapper>
            <HeadingTitle>
              Fale <TextHighlight>Conosco</TextHighlight>
            </HeadingTitle>
            <HeadingDescription>
              Nossa equipe está sempre aqui para falar com você
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <ContactBoard />
      </ContainerWrapper>

      <ContainerWrapper className="h-screen flex items-center">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <HeadingWrapper className="flex pt-6">
              <HeadingContentWrapper>
                <HeadingTitle>
                  Fale <TextHighlight>Conosco</TextHighlight>
                </HeadingTitle>
                <HeadingDescription>
                  Nossa equipe está sempre aqui para falar com você
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>

            {/* Contact means */}
            <div className="">
              {/* Email */}
              <ContactItem icon={Mail} content="gustavodiasa2121@gmail.com" />

              {/* Location */}
              <ContactItem icon={Phone} content="gustavodiasa2121@gmail.com" />

              {/* Phone number */}
              <ContactItem icon={MapPin} content="gustavodiasa2121@gmail.com" />
            </div>
          </div>

          <div>
            <EmailForm />
          </div>
        </div>
      </ContainerWrapper>

      {/* CTA */}
      <section className="bg-background-highlight-main border-t">
        <ContainerWrapper className="flex flex-col items-center text-center ">
          <h2>Faça seu pedido personalizado</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            odio, quaerat provident culpa ab.
          </p>

          <RedirectLink url="/">
            <Button>
              <span>Fazer pedido</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </RedirectLink>

          <Separator />

          <div className="flex items-center justify-between w-full pt-4">
            <div className="flex items-center gap-1">
              <Cog className="text-primary h-4 w-4" />
              <small className="font-medium text-sm">
                Suporte 100% humanizado
              </small>
            </div>
            <div className="flex items-center gap-1">
              <Cog className="text-primary h-4 w-4" />
              <small className="font-medium text-sm">
                Suporte 100% humanizado
              </small>
            </div>{' '}
            <div className="flex items-center gap-1">
              <Cog className="text-primary h-4 w-4" />
              <small className="font-medium text-sm">
                Suporte 100% humanizado
              </small>
            </div>
          </div>
        </ContainerWrapper>
      </section>
    </>
  )
}
