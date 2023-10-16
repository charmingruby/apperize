import { Label } from '@/components/ui/label'
import { InputAnnotation } from './input-annotation'
import { Input } from '@/components/ui/input'
import { InputRoot } from '@/components/ui/input-root'
import { Textarea } from '@/components/ui/textarea'

export function PersonalRequestForm() {
  return (
    <div className="grid grid-cols-2 gap-12 w-full">
      {/* Left / Top */}
      <div>
        {/* Personal details */}
        <div className="space-y-8">
          <h3>Dados pessoais</h3>
          <div className="space-y-4">
            {/* Name */}
            <InputRoot>
              <Label>
                <InputAnnotation>Qual seu nome completo?</InputAnnotation>
              </Label>
              <Input placeholder="Nome" />
            </InputRoot>

            {/* Phone number */}
            <InputRoot>
              <Label>
                <InputAnnotation>Qual seu número de telefone?</InputAnnotation>
              </Label>
              <Input placeholder="(32) 99110-0990" />
            </InputRoot>

            {/* Problem */}
            <InputRoot>
              <Label>
                <InputAnnotation>Qual o problema que enfrenta?</InputAnnotation>
              </Label>
              <Textarea placeholder="Problema" />
            </InputRoot>
          </div>
        </div>
      </div>

      {/* Right / Bottom */}
      <div>
        {/* Brand details */}
        <div className="space-y-8">
          <h3>Detalhes da sua marca</h3>
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
      </div>
    </div>
  )
}
