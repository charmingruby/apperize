import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { MinimalRequestForm } from '@/components/minimal-request-form'

export default function MakeRequestPage() {
  return (
    <>
      <ContainerWrapper className="min-h-screen pt-20">
        <div className="mb-8 flex flex-col gap-4">
          <h1 className="my-0">
            <strong>Como podemos te ajudar?</strong>
          </h1>

          <small className="text-sm text-muted-foreground">
            Adorariamos ouvir um pouco sobre suas necessidades, respondendo com
            soluções.
          </small>
        </div>

        <MinimalRequestForm />
      </ContainerWrapper>
    </>
  )
}
