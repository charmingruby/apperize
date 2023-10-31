import { Text } from '@/components/ui/text'
import Image from 'next/image'
import { CustomerGroupProps } from './customer-group-list'
import { PurpleFilter } from '@/components/purple-filter'

export function CustomerGroup({
  imageOnLeft = false,
  coverImageUrl,
  name,
  description,
  benefits,
}: CustomerGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div
        className={`${imageOnLeft ? 'lg:order-last' : 'lg:order-first'}
      relative
      `}
      >
        <PurpleFilter className="rounded-xl aspect-video" />
        <Image
          src={coverImageUrl}
          alt={`Imagem de um grupo de ${name}`}
          className="aspect-video rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-center">
        <strong>{name}</strong>
        <Text>{description}</Text>

        <div className="grid grid-cols-2">
          {benefits.map((value) => (
            <div key={value}>{value}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
