import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TabletSmartphone } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="lg:h-screen grid grid-cols-2">
      <section className="max-w-md mx-auto w-full flex flex-col justify-center">
        {/* Intro */}
        <div>
          {/* Logo */}
          <TabletSmartphone />

          {/* Title */}
          <div>
            <h1>Entrar na sua conta</h1>

            <span>
              Não possui conta?{' '}
              <Link prefetch={false} href="/">
                Criar uma conta
              </Link>
            </span>
          </div>

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
