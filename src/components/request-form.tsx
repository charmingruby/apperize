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
              <Label>Qual o nome da empresa?</Label>
              <Input placeholder="Nome" />
            </div>

            <div>
              <Label>Qual seu cargo?</Label>
              <Input placeholder="E-mail" />
            </div>
          </div>

          <div>
            <Label>Qual o seu problema?</Label>
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
