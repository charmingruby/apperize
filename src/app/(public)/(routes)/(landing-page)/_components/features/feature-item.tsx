import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Feature } from './index'

export function FeatureItem({ title, description, icon: Icon }: Feature) {
  return (
    <Card className="flex flex-col gap-2">
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
  )
}
