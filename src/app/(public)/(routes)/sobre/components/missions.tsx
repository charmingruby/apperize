import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LucideIcon, HeartHandshake } from 'lucide-react'

interface Mission {
  icon: LucideIcon
  title: string
  description: string
}

const missions: Mission[] = [
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam quidem placeat voluptate dolore ducimus dolorem rem eos ratione repudiandae in adipisci, animi omnis saepe inventore tenetur et, cumque dicta.',
    icon: HeartHandshake,
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam quidem placeat voluptate dolore ducimus dolorem rem eos ratione repudiandae in adipisci, animi omnis saepe inventore tenetur et, cumque dicta.',
    icon: HeartHandshake,
  },
  {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam quidem placeat voluptate dolore ducimus dolorem rem eos ratione repudiandae in adipisci, animi omnis saepe inventore tenetur et, cumque dicta.',
    icon: HeartHandshake,
  },
]
export function Missions() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {missions.map(({ icon: Icon, title, description }) => (
        <Card key={title} className="flex flex-col items-center">
          <CardHeader>
            <div className="bg-background-highlight-dark w-fit p-2 border-4 border-background-highlight-main rounded-full">
              <Icon className="w-10 h-10 text-primary" />
            </div>

            <CardTitle className="text-primary font-semibold text-xl block">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
