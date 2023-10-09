import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Linkedin, LucideIcon, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

interface MeanOfContact {
  icon: LucideIcon
  title: string
  description: string
  buttonLabel: string
  url: string
}

const meansOfContact: MeanOfContact[] = [
  {
    icon: Phone,
    title: 'Nos ligue',
    description: 'Segunda à Sexta',
    buttonLabel: '(32) 99110-0990',
    url: '/',
  },
  {
    icon: MapPin,
    title: 'Onde residimos',
    description: 'Juiz de Fora, MG',
    buttonLabel: 'Ver no mapa',
    url: '/',
  },
  {
    icon: Mail,
    title: 'Envie um email',
    description: 'Mande qualquer coisa',
    buttonLabel: 'gustavodiasa2121@gmail.com',
    url: '/',
  },
  {
    icon: Linkedin,
    title: 'Contato profissional',
    description: 'Vamos nos conectar',
    buttonLabel: '/gustavo-diasa21',
    url: '/',
  },
]

export function MeansOfContact() {
  return (
    <div className="grid grid-cols-4 gap-6 w-full h-fit">
      {meansOfContact.map(
        ({ icon: Icon, title, description, buttonLabel, url }) => (
          <Card className="h-fit" key="title">
            <CardHeader>
              <div className="p-2 w-fit bg-background-highlight-dark border-4 border-background-highlight-main rounded-full">
                <Icon className="text-primary" />
              </div>
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="flex flex-col">
                <span className="font-medium font-lg">{title}</span>
                <span className="text-sm text-muted-foreground">
                  {description}
                </span>
              </div>

              <Button variant="ghost" className="border">
                <Link href={url} prefetch={false}>
                  {buttonLabel}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ),
      )}
    </div>
  )
}
