/* External */

/* Internal */
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { CustomerGroupList } from './components/customer-group-list'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { CTAWithRequestForm } from '@/components/cta-with-request-form'

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <ContainerWrapper></ContainerWrapper>

      {/* Main feature and benefit */}

      {/* What we do */}
      {/* Websites */}
      <section className="bg-background-highlight-main border-t border-background-highlight-dark">
        <ContainerWrapper></ContainerWrapper>
      </section>
      {/* API */}
      <section className="bg-background-highlight-main border-b border-background-highlight-dark">
        <ContainerWrapper></ContainerWrapper>
      </section>

      {/* Popular features */}

      {/* How it works */}

      {/* Customer types */}
      <ContainerWrapper>
        <div className="w-1/2">
          <HeadingWrapper>
            <HeadingAnnotation annotation="Quem ajudamos?" />
            <HeadingContentWrapper>
              <HeadingTitle>Setores de nossos clientes</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quas sapiente asperiores numquam quidem labore. Aliquid, veniam.
                Dicta, sequi sint accusantium blanditiis at doloremque id a
                aliquam? Hic, non accusantium!
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>
        </div>

        <CustomerGroupList />
      </ContainerWrapper>

      {/* Highlights a unique resource, how makes the life better */}

      {/* The big reason to buy your product */}

      {/* CTA */}
      <CTAWithRequestForm />
    </>
  )
}
