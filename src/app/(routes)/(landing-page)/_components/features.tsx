import { features } from '@/contents/features'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map(({ icon: Icon, description, title }) => (
        <Card className="flex flex-col gap-2" key={title}>
          <CardHeader className="pb-3">
            <div className="bg-background-alt-dark h-fit -translate-y-2 w-fit p-1 rounded-full border-4 border-background-alt">
              <Icon className="h-6 w-6 text-primary" />
            </div>

            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription>
              <span>{description}</span>
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
