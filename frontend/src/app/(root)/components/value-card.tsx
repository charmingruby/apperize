import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ElementType } from 'react'
import clsx from 'clsx'

interface ValueCardProps {
  icon: ElementType
  title: string
  description: string
  position: number
}

export function ValueCard({
  icon: Icon,
  title,
  description,
  position,
}: ValueCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="bg-border w-fit p-2 rounded-full mb-2">
          <Icon className="text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="w-full h-1.5 bg-border relative rounded-full">
          <div
            className={clsx(`absloute h-1.5 bg-primary rounded-full`, {
              'w-1/4': position === 0,
              'w-1/2': position === 1,
              'w-3/4': position === 2,
              'w-full': position === 3,
            })}
          />
        </div>
      </CardFooter>
    </Card>
  )
}
