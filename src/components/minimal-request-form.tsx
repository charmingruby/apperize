'use client'

import { Card, CardContent } from './ui/card'
import { Input, InputRoot } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { formatPhone } from '@/utils/format-phone'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function MinimalRequestForm() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhone(evt.target.value))
  }

  return (
    <Card className="bg-background-alt border-t-4 border-t-primary">
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

          {/* Needing */}
          <InputRoot>
            <Label>Qual produto precisa?</Label>

            <Select>
              <SelectTrigger className="border-border">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </InputRoot>

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
