import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { Service } from '@/constants/services'
import Image from 'next/image'

export function ServiceItem({ description, name, image }: Service) {
  return (
    <div className="border border-border rounded-md shadow-md flex flex-col">
      <div className="h-48 w-full flex">
        <Image src={image} alt={name} className="object-cover rounded-t-md" />
      </div>
      <div className="flex flex-col gap-2 p-8">
        <strong className="text-2xl">{name}</strong>
        <Text className="text-muted-foreground">{description}</Text>
      </div>
    </div>
  )
}
