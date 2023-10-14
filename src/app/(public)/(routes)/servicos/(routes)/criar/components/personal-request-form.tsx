import { Label } from '@/components/ui/label'
import { InputAnnotation } from './input-annotation'
import { Input } from '@/components/ui/input'
import { InputRoot } from '@/components/ui/input-root'
import { Textarea } from '@/components/ui/textarea'

export function PersonalRequestForm() {
  return (
    <div className="grid grid-cols-2 gap-12 w-full">
      {/* Left / Top */}
      <div className="space-y-8">
        {/* Name */}
        <InputRoot>
          <Label>
            <InputAnnotation>Qual seu nome completo?</InputAnnotation>
          </Label>
          <Input placeholder="Nome" />
        </InputRoot>

        <InputRoot>
          <Label>
            <InputAnnotation>Qual o problema que enfrenta?</InputAnnotation>
          </Label>
          <Textarea placeholder="Problema" />
        </InputRoot>
      </div>

      {/* Right / Bottom */}
      <div>
        {/* Name */}
        <InputRoot>
          <Label>
            <InputAnnotation>Faça upload da logo</InputAnnotation>
          </Label>
          <div className="border p-8"></div>
        </InputRoot>
      </div>
    </div>
  )
}
