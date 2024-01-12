import { ServiceItem } from './service-item'
import { ElementType } from 'react'
import { AtSign, Building, User } from 'lucide-react'

export interface Service {
  description: string
  icon: ElementType
}

export const serviceList: Service[] = [
  {
    description: 'Websites para marcas',
    icon: AtSign,
  },
  {
    description: 'Websites institucionais',
    icon: Building,
  },
  {
    description: 'Websites pessoais',
    icon: User,
  },
]

export function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-fit">
      {serviceList.map(({ description, icon }) => {
        return (
          <ServiceItem
            key={description}
            description={description}
            icon={icon}
          />
        )
      })}
    </div>
  )
}
