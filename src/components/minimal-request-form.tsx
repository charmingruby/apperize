'use client'

import { Card, CardContent } from './ui/card'
import { Input, InputRoot } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { formatPhone } from '@/utils/format-phone'

export function MinimalRequestForm() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhone(evt.target.value))
  }

  return (
    <Card className="bg-background-highlight-main border-t-4 border-t-primary">
      <CardContent className="pt-6">
        <form className="space-y-4">
          {/* Name and email */}
          <InputRoot>
            <Label>Qual seu nome?</Label>
            <Input placeholder="Nome" />
          </InputRoot>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Name */}
            <InputRoot>
              <Label>Qual seu telefone?</Label>
              <Input
                placeholder="Telefone"
                value={phoneNumber}
                maxLength={15}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handlePhoneChange}
              />
            </InputRoot>

            {/* Email */}
            <InputRoot>
              <Label>Qual seu email?</Label>
              <Input placeholder="E-mail" />
            </InputRoot>
          </div>

          {/* Role and enterprise name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Enterprise */}
            <InputRoot>
              <Label>Qual o nome da empresa?</Label>
              <Input placeholder="Nome da Empresa" />
            </InputRoot>

            {/* Role */}
            <InputRoot>
              <Label>Qual seu cargo?</Label>
              <Input placeholder="Cargo" />
            </InputRoot>
          </div>

          {/* Message */}
          <InputRoot>
            <Label>Qual o seu problema?</Label>
            <Textarea placeholder="Conte os problemas que enfrenta" />
          </InputRoot>

          <div className="flex w-full lg:justify-end">
            <Button size="lg" className="w-full lg:w-fit text-base">
              <span>Enviar pedido</span> <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
