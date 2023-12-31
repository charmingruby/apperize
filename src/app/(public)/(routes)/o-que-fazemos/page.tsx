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
      <ContainerWrapper></ContainerWrapper>

      {/* Services */}
      {/* Web */}
      <ContainerWrapper>
        <div>
          <HeadingWrapper>
            <HeadingAnnotation annotation="Serviços que fazemos" />
            <HeadingContentWrapper>
              <HeadingTitle></HeadingTitle>
            </HeadingContentWrapper>
          </HeadingWrapper>
        </div>
      </ContainerWrapper>

      {/* APIs */}
      <section className="bg-background-highlight-main border-y border-background-highlight-dark">
        <ContainerWrapper></ContainerWrapper>
      </section>

      {/* How it works */}
      <section className="">
        <ContainerWrapper></ContainerWrapper>
      </section>

      {/* Popular features */}
      <ContainerWrapper></ContainerWrapper>

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
      <ContainerWrapper></ContainerWrapper>

      {/* The big reason to buy your product */}
      <ContainerWrapper></ContainerWrapper>

      {/* CTA */}
      <CTAWithRequestForm />
    </>
  )
}
