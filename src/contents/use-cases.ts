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
      'Desenvolvemos soluções digitais proporcionando presença online impactante, sistema de blog e funcionalidades que impulsionam a interatividade .',
    color: 'rgba(241, 166, 106,',
  },
  {
    icon: Book,
    title: 'Educação',
    description:
      'Atuamos no setor educacional, desenvolvendo websites exclusivos para instituições de ensino. Destacamos seus cursos de forma cativante, evidenciando seus diferenciais.',
    color: 'rgba(47, 82, 224,',
  },
  {
    icon: Stethoscope,
    title: 'Saúde',
    description:
      'Criamos sites de saúde que oferecem uma experiência completa para pacientes e interessados nos serviços.',
    color: 'rgba(51, 170, 51,',
  },
  {
    icon: ShoppingBag,
    title: 'Comercial',
    description:
      'Atuamos na área comercial, construindo websites que potencializam a presença online de empresas. Destacamos seus produtos, serviços e diferenciais.',
    color: 'rgba(255, 94, 91,',
  },
]
