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

      {/* Popular features */}

      {/* Customer types */}
      <ContainerWrapper>
        <HeadingWrapper>
          <HeadingAnnotation annotation="" />
          <HeadingContentWrapper>
            <HeadingTitle></HeadingTitle>
            <HeadingDescription></HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

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
