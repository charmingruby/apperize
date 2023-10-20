import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ElementType } from 'react'

interface ValueItemProps {
  icon: ElementType
  title: string
  description: string
  percentage: number
}

export function ValueItem({
  icon: Icon,
  title,
  description,
  percentage,
}: ValueItemProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="bg-background-highlight-dark border-4 border-background-highlight-main w-fit p-2 rounded-full mb-2">
          <Icon className="text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="w-full flex items-center gap-2">
          <div className="w-full h-1.5 bg-border relative rounded-full">
            <div
              className="absloute h-1.5 bg-primary rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
          <small className="text-primary">{percentage}%</small>
        </div>
      </CardFooter>
    </Card>
  )
}
