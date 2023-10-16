import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  CheckCircle2,
  LayoutDashboard,
  LucideIcon,
  PanelTop,
  ShieldCheck,
} from 'lucide-react'

interface ExampleService {
  icon: LucideIcon
  title: string
  items: string[]
}

const exampleServices: ExampleService[] = [
  {
    title: 'Sites',
    icon: PanelTop,
    items: ['Páginas atrativas', 'Marketing da sua marca'],
  },
  {
    title: 'Dashboards',
    icon: LayoutDashboard,
    items: ['Gráficos estatísticos', 'Gerenciamento total do seu produto'],
  },
  {
    title: 'Sistemas',
    icon: ShieldCheck,
    items: ['Gerenciamento interno da sua empresa', 'Controle de recursos'],
  },
]

export function ExampleServices() {
  return (
    <div className="flex flex-col justify-center gap-8 w-full">
      {exampleServices.map(({ icon: Icon, title, items }) => (
        <Card key={title} className="flex items-center">
          <CardHeader className="flex flex-row items-center">
            <div className="border-4 border-background-highlight-main rounded-full p-2 w-fit bg-background-highlight-dark">
              <Icon className="text-primary h-6 w-6" />
            </div>
            <CardTitle className="block">{title}</CardTitle>
          </CardHeader>

          <div className="h-full w-px bg-border" />

          <CardContent className="space-y-2 p-2">
            {items.map((item) => (
              <div className="flex items-center gap-1" key={item}>
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span className="font-medium text-muted-foreground">
                  {item}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
