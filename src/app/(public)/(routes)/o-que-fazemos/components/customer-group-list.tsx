import exampleImage from '@/assets/img/photos/developers-office.jpeg'
import { StaticImageData } from 'next/image'
import { CustomerGroup } from './customer-group'

export interface CustomerGroupProps {
  coverImageUrl: StaticImageData
  name: string
}

const customerGroups: CustomerGroupProps[] = [
  {
    name: 'Advogados',
    coverImageUrl: exampleImage,
  },
  {
    name: 'Advogados',
    coverImageUrl: exampleImage,
  },
  {
    name: 'Advogados',
    coverImageUrl: exampleImage,
  },
  {
    name: 'Advogados',
    coverImageUrl: exampleImage,
  },
  {
    name: 'Advogados',
    coverImageUrl: exampleImage,
  },
  {
    name: 'Advogados',
    coverImageUrl: exampleImage,
  },
]
export function CustomerGroupList() {
  return (
    <div className="grid grid-cols-3 gap-8 w-full">
      {customerGroups.map(({ coverImageUrl, name }) => (
        <CustomerGroup key={name} name={name} coverImageUrl={coverImageUrl} />
      ))}
    </div>
  )
}
