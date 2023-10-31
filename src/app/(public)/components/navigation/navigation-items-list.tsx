import { BadgeInfo, Home, MessageSquare, Rocket } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItem {
  icon: ElementType
  label: string
  url: string
}

export const navItemsList: NavItem[] = [
  {
    icon: Home,
    url: '/',
    label: 'Início',
  },
  {
    icon: BadgeInfo,
    url: '/sobre',
    label: 'Sobre',
  },
  {
    icon: Rocket,
    url: '/o-que-fazemos',
    label: 'O que fazemos?',
  },
  {
    icon: MessageSquare,
    url: '/contato',
    label: 'Contato',
  },
]
