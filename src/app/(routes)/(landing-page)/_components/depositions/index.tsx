import { Separator } from '@/components/ui/separator'
import { DepositionItem } from './deposition-item'
import { depositions } from '@/contents/depositions'

export function Depositions() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full">
      <div className="mt-12 space-y-6">
        <DepositionItem {...depositions[0]} />
        <Separator />
        <DepositionItem {...depositions[1]} />
      </div>

      <div className="block lg:hidden my-6">
        <Separator />
      </div>

      <div className="space-y-6">
        <DepositionItem {...depositions[2]} />
        <Separator />
        <DepositionItem {...depositions[3]} />
      </div>
    </div>
  )
}
