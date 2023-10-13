import { Label } from '@/components/ui/label'
import { InputAnnotation } from '../../../components/input-annotation'
import { Input } from '@/components/ui/input'

export function PersonalRequestForm() {
  return (
    <div className="grid grid-cols-2 gap-12 w-full">
      <div>
        {/* Name */}
        <div className="space-y-4">
          <Label>
            <InputAnnotation>Qual seu nome completo?</InputAnnotation>
          </Label>
          <Input placeholder="Nome" />
        </div>
      </div>

      <div>
        {/* Name */}
        <div className="space-y-4">
          <Label>
            <InputAnnotation>Faça upload da logo</InputAnnotation>
          </Label>
          <div className="border p-8"></div>
        </div>
      </div>
    </div>
  )
}
