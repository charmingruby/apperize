import { Service } from '.'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'

export function ServiceItem({ description, icon: Icon }: Service) {
  return (
    <Card
      key={description}
      className="flex flex-row items-center lg:items-start lg:flex-col"
    >
      <CardHeader className="py-3">
        <div className="bg-background-alt-dark border-4 border-background-alt p-2 w-fit rounded-full">
          <Icon className="text-primary" />
        </div>
      </CardHeader>

      <CardContent className="pl-0 pt-3 lg:pl-6 lg:pt-0 pb-3">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
