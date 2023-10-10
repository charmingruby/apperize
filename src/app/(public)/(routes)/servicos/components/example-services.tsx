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
    <div className="grid grid-cols-3 gap-8">
      {exampleServices.map(({ icon: Icon, title, items }) => (
        <Card key={title}>
          <CardHeader>
            <div className="border-4 border-background-highlight-main rounded-full p-2 w-fit bg-background-highlight-dark mb-4">
              <Icon className="text-primary h-6 w-6" />
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-2">
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
