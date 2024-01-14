import { LucideIcon, Gavel, Book, Stethoscope, ShoppingBag } from 'lucide-react'

export interface UseCase {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const useCases: UseCase[] = [
  {
    icon: Gavel,
    title: 'Advocacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
    color: 'rgba(241, 166, 106,',
  },
  {
    icon: Book,
    title: 'Educação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
    color: 'rgba(47, 82, 224,',
  },
  {
    icon: Stethoscope,
    title: 'Saúde',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
    color: 'rgba(51, 170, 51,',
  },
  {
    icon: ShoppingBag,
    title: 'Comercial',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est dignissimos exercitationem quibusdam reprehenderit, officiis, asperiores magnam, doloremque aliquam dolorem minus. Ipsum ipsam cum, itaque nisi consectetur quaerat libero illo?',
    color: 'rgba(255, 94, 91,',
  },
]
