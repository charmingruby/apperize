import { BadgeInfo, Home, MessageSquare } from 'lucide-react'
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
    label: 'O que fazemos',
  },
  {
    icon: MessageSquare,
    url: '/contato',
    label: 'Trabalhos',
  },
  {
    icon: MessageSquare,
    url: '/contato',
    label: 'Casos de uso',
  },

  {
    icon: MessageSquare,
    url: '/contato',
    label: 'Depoimentos',
  },
]
