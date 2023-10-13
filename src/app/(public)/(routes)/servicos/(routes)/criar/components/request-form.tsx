import { Label } from '@/components/ui/label'
import { InputAnnotation } from '../../../components/input-annotation'
import { Input } from '@/components/ui/input'

export function RequestForm() {
  return (
    <div className="grid grid-cols-2 gap-12">
      {/* Name */}
      <div className="space-y-4">
        <Label>
          <InputAnnotation>Qual seu nome completo?</InputAnnotation>
        </Label>
        <Input placeholder="Nome" />
      </div>
      <div></div>
    </div>
  )
}
