import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { OptionsTabs } from './components/options-tabs'

export default function CreateService() {
  return (
    <>
      <ContainerWrapper>
        <HeadingWrapper className="w-1/2 mb-0">
          <HeadingContentWrapper>
            <HeadingTitle>Fazer pedido</HeadingTitle>
            <HeadingDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              facilis voluptatum fugiat eveniet, omnis veniam suscipit
              temporibus cumque voluptatem vero rerum. Quo optio dolore
              perspiciatis laudantium saepe voluptate! Dicta, veniam.
            </HeadingDescription>
          </HeadingContentWrapper>
        </HeadingWrapper>

        <OptionsTabs />
      </ContainerWrapper>
    </>
  )
}
