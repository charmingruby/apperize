import { StaticImageData } from 'next/image'
import liderImg from '@/assets/img/recent-works/lider.png'
import consulmagnoassisImg from '@/assets/img/recent-works/consulmagno-assis.png'
import ymirImg from '@/assets/img/recent-works/ymir.png'

export interface RecentWork {
  image: StaticImageData
  demoUrl?: string
  description: string
}

export const recentWorks: RecentWork[] = [
  {
    image: consulmagnoassisImg,
    description: 'Escritório de Advocacia',
    demoUrl: 'https://www.consulmagnoeassis.com.br/',
  },
  {
    image: ymirImg,
    description: 'Plataforma de Projetos',
  },
  {
    image: liderImg,
    description: 'Instituição de Odontologia',
    demoUrl: 'https://liderinstituto.com.br/',
  },
]
