import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { Label } from '@/components/ui/label'
import { InputAnnotation } from '../../components/input-annotation'
import { Input } from '@/components/ui/input'

export default function CreateService() {
  return (
    <>
      <ContainerWrapper>
        {/* Heading */}
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

        {/* Progress */}
        <div className="border rounded-full px-4 py-2 mt-12 mb-8">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: '10%' }}
          />
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <Label>
              <InputAnnotation>Qual seu nome completo?</InputAnnotation>
            </Label>
            <Input />
          </div>
          <div></div>
        </div>
      </ContainerWrapper>
    </>
  )
}
