import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export function RequestForm() {
  return (
    <Card className="bg-background-highlight-main">
      <CardHeader>
        <CardTitle className="text-center">Fale conosco</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Qual seu nome?</Label>
              <Input placeholder="Nome" />
            </div>

            <div>
              <Label>Qual seu email?</Label>
              <Input placeholder="E-mail" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Qual seu nome?</Label>
              <Input placeholder="Nome" />
            </div>

            <div>
              <Label>Qual seu email?</Label>
              <Input placeholder="E-mail" />
            </div>
          </div>

          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Textarea placeholder="Conte os problemas que enfrenta" />
          </div>

          <div className="flex justify-end">
            <Button>Enviar pedido</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
