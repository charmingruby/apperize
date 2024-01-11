import { Text } from '@/components/ui/text'
import Image from 'next/image'
import { Service } from '.'
import { ArrowRight } from 'lucide-react'

export function ServiceItem({
  description,
  name,
  image,
  badgeContent,
  icon: Icon,
}: Service) {
  const nameInSingular = name.toLowerCase().slice(0, -1)

  return (
    <div className="border border-border rounded-md shadow-md flex flex-col">
      {/* Header image */}
      <div className="h-48 w-full flex border-b border-border">
        <Image src={image} alt={name} className="object-cover rounded-t-md" />
      </div>

      {/* Content */}
      <div className="flex flex-col py-6 px-4">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-1 border border-primary rounded-full w-fit px-2.5 py-1">
          <Icon className="w-3.5 h-3.5 text-primary" />
          <small className="font-medium">{badgeContent}</small>
        </div>

        {/* Title */}
        <strong className="text-2xl mb-2">{name}</strong>

        {/* Description */}
        <Text variant="lowOpacity" size="md">
          {description}
        </Text>
      </div>

      {/* Link */}
      <a
        href="/"
        className="hover:bg-primary/90 flex outline-none bg-primary w-full mt-auto p-4 justify-center font-medium rounded-b-md items-center gap-1 text-primary-foreground hover:text-background-alt-dark hover:font-medium transition-all"
      >
        Solicitar {nameInSingular}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}
