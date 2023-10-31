import Image from 'next/image'
import { CustomerGroupProps } from './customer-group-list'
import { PurpleFilter } from '@/components/purple-filter'

export function CustomerGroup({ coverImageUrl, name }: CustomerGroupProps) {
  return (
    <div className="gap-12 w-full">
      <div className="relative w-full">
        <PurpleFilter className="rounded-xl aspect-video" />
        <Image
          src={coverImageUrl}
          alt={`Imagem de um grupo de ${name}`}
          className="aspect-video rounded-xl w-full"
        />
        <strong className="absolute bottom-4 left-4 text-xl text-white z-30">
          {name}
        </strong>
      </div>
    </div>
  )
}
