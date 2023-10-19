import { ContainerWrapper } from './ui/container-wrapper'
import { Separator } from './ui/separator'

export function SectionsDivider() {
  return (
    <ContainerWrapper className="w-full px-0 py-12">
      <Separator className="w-full" />
    </ContainerWrapper>
  )
}
