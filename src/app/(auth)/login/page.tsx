import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Login() {
  return (
    <div className="lg:h-screen grid grid-cols-2">
      <section className="max-w-md mx-auto w-full">
        {/* Intro */}
        <div>
          {/* Logo */}
          {/* Title */}
          {/* Sign up */}
        </div>

        {/* Form */}
        <div className="w-full">
          <div>
            <div>
              <Label htmlFor="emailAddress">Email</Label>
              <Input id="emailAddress" />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" />
            </div>

            <div className="flex gap-2 items-center">
              <Checkbox />
              <Label>Lembrar de mim</Label>
            </div>
          </div>

          <Button className="w-full">Entrar</Button>
        </div>
      </section>
      <section className="bg-primary">image</section>
    </div>
  )
}
