import { ContainerWrapper } from '@/components/ui/container-wrapper'
import {
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { FieldsProgressBar } from './components/fields-progress-bar'
import { RequestForm } from './components/request-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

        <FieldsProgressBar amountOfFields={10} fieldsFilled={6} />

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">oi</TabsContent>
          <TabsContent value="password">p</TabsContent>
        </Tabs>

        <RequestForm />
      </ContainerWrapper>
    </>
  )
}
