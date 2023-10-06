import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { ElementType } from 'react'

interface ServiceModelProps {
  icon: ElementType
  title: string
  description: string
}

export function ServiceModel({
  icon: Icon,
  title,
  description,
}: ServiceModelProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <div className="w-fit p-2 bg-background-highlight-dark border-4 border-background-highlight-main rounded-full">
          <Icon className="text-primary h-7 w-7" />
        </div>

        <CardTitle className="font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
