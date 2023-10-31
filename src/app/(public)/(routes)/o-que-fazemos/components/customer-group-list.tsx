import exampleImage from '@/assets/img/photos/developers-office.jpeg'
import { StaticImageData } from 'next/image'
import { CustomerGroup } from './customer-group'

export interface CustomerGroupProps {
  imageOnLeft?: boolean
  coverImageUrl: StaticImageData
  name: string
  description: string
  benefits: string[]
}

const customerGroups: CustomerGroupProps[] = [
  {
    name: 'Advogados',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero at, quaerat, molestias officiis ducimus aut accusantium quo ratione neque, incidunt necessitatibus accusamus sed? Voluptate alias consequuntur praesentium possimus incidunt corrupti.',
    coverImageUrl: exampleImage,
    benefits: ['test1', 'test2', 'test3', 'test4'],
  },
  {
    imageOnLeft: true,
    name: 'Advogados',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero at, quaerat, molestias officiis ducimus aut accusantium quo ratione neque, incidunt necessitatibus accusamus sed? Voluptate alias consequuntur praesentium possimus incidunt corrupti.',
    coverImageUrl: exampleImage,
    benefits: ['test1', 'test2', 'test3', 'test4'],
  },
  {
    name: 'Advogados',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero at, quaerat, molestias officiis ducimus aut accusantium quo ratione neque, incidunt necessitatibus accusamus sed? Voluptate alias consequuntur praesentium possimus incidunt corrupti.',
    coverImageUrl: exampleImage,
    benefits: ['test1', 'test2', 'test3', 'test4'],
  },
]
export function CustomerGroupList() {
  return (
    <div className="flex flex-col gap-8">
      {customerGroups.map(
        ({ imageOnLeft, coverImageUrl, name, description, benefits }) => (
          <CustomerGroup
            key={name}
            name={name}
            description={description}
            benefits={benefits}
            imageOnLeft={imageOnLeft}
            coverImageUrl={coverImageUrl}
          />
        ),
      )}
    </div>
  )
}
