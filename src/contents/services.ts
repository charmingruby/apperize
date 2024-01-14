import { AtSign, Building, User } from 'lucide-react'
import { ElementType } from 'react'

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
