import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import site from '@/assets/site.png'
import crm from '@/assets/crm.png'
import brand from '@/assets/brand.png'
import { ServiceItem } from './service-item'

export interface Service {
  image: StaticImport
  name: string
  description: string
}

export const serviceList: Service[] = [
  {
    image: site,
    name: 'Sites',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse accusantium temporibus, unde commodi quia ab soluta cumque doloribus autem iusto earum doloremque voluptatum eius cupiditate dolore maiores illum possimus.',
  },
  {
    image: crm,
    name: 'Sistemas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse accusantium temporibus, unde commodi quia ab soluta cumque doloribus autem iusto earum doloremque voluptatum eius cupiditate dolore maiores illum possimus.',
  },
  {
    image: brand,
    name: 'Marca',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse accusantium temporibus, unde commodi quia ab soluta cumque doloribus autem iusto earum doloremque voluptatum eius cupiditate dolore maiores illum possimus.',
  },
]

export function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 h-fit">
      {serviceList.map(({ name, description, image }) => {
        return (
          <ServiceItem
            key={name}
            description={description}
            name={name}
            image={image}
          />
        )
      })}
    </div>
  )
}
