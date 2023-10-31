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

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}

      {/* Main feature and benefit */}

      {/* How it works */}

      {/* What we do */}

      {/* Popular features */}

      {/* Customer types */}
      <ContainerWrapper>
        <div className="max-w-2xl">
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
      <section>
        <ContainerWrapper></ContainerWrapper>
      </section>
    </>
  )
}
