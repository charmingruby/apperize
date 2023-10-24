import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input, InputRoot } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { products } from './products'
import { MessageSquare } from 'lucide-react'

export function RequestForm() {
  return (
    <Card className="bg-background-highlight-main">
      <CardHeader className="bg-primary rounded-t-md py-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-primary-foreground" />
          <CardTitle className="text-primary-foreground text-center">
            Fale conosco
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="space-y-4">
          {/* Name and email */}
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <InputRoot>
              <Label>Qual seu nome?</Label>
              <Input placeholder="Nome" />
            </InputRoot>

            {/* Email */}
            <InputRoot>
              <Label>Qual seu email?</Label>
              <Input placeholder="E-mail" />
            </InputRoot>
          </div>

          {/* Role and enterprise name */}
          <div className="grid grid-cols-2 gap-4">
            {/* Enterprise */}
            <InputRoot>
              <Label>Qual o nome da empresa?</Label>
              <Input placeholder="Nome" />
            </InputRoot>

            {/* Role */}
            <InputRoot>
              <Label>Qual seu cargo?</Label>
              <Input placeholder="E-mail" />
            </InputRoot>
          </div>

          {/* Product type */}
          <InputRoot>
            <Label>Qual o tipo de serviço?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Escolha um produto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Produtos</SelectLabel>
                  {products.map(({ label, value }) => (
                    <SelectItem value={value} key={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </InputRoot>

          {/* Message */}
          <InputRoot>
            <Label>Qual o seu problema?</Label>
            <Textarea placeholder="Conte os problemas que enfrenta" />
          </InputRoot>

          <div className="flex justify-end">
            <Button>Enviar pedido</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
