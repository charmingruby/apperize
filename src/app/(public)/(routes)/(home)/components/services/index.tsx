import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import site from '@/assets/img/services/site.png'
import crm from '@/assets/img/services/crm.png'
import brand from '@/assets/img/services/brand.png'
import { ServiceItem } from './service-item'
import { ElementType } from 'react'
import { AppWindow, AtSign, LayoutPanelLeft } from 'lucide-react'

export interface Service {
  image: StaticImport
  name: string
  description: string
  icon: ElementType
  badgeContent: string
}

export const serviceList: Service[] = [
  {
    image: site,
    name: 'Sites',
    description:
      'Oferecemos serviços de design de sites de alta qualidade que são visualmente atraentes e altamente funcionais. Nossa equipe de especialistas em design e desenvolvimento garantirá que seu site atenda às suas necessidades específicas.',
    badgeContent: 'Personalize com os conteúdos que quiser',
    icon: AppWindow,
  },
  {
    image: crm,
    name: 'Sistemas',
    description:
      'Nossos sistemas são projetados para otimizar a gestão de sua empresa, proporcionando controle total sobre seus processos. Simplifique operações e tome decisões informadas com nossas soluções eficazes.',
    badgeContent: 'Tenha controle total da sua empresa',
    icon: LayoutPanelLeft,
  },
  {
    image: brand,
    name: 'Identidades de Marcas',
    description:
      ' Fortaleça a identidade de sua marca e destaque-se da concorrência com nossos serviços de branding. Nossa equipe criativa ajudará a transmitir a personalidade e os valores da sua marca de forma memorável.',
    badgeContent: 'Impulsione sua marca',
    icon: AtSign,
  },
]

export function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 h-fit">
      {serviceList.map(({ name, description, image, badgeContent, icon }) => {
        return (
          <ServiceItem
            key={name}
            description={description}
            name={name}
            image={image}
            badgeContent={badgeContent}
            icon={icon}
          />
        )
      })}
    </div>
  )
}
