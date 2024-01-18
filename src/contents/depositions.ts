import { StaticImageData } from 'next/image'
import customer1 from '@/assets/img/depositions/romulo.jpeg'
import customer2 from '@/assets/img/depositions/anelise.jpeg'
import customer3 from '@/assets/img/depositions/paulo.jpeg'
import customer4 from '@/assets/img/depositions/foto dentista.jpeg'

export interface Deposition {
  deposition: string
  avatarUrl: StaticImageData
  establishment: string
  name: string
}

export const depositions: Deposition[] = [
  {
    avatarUrl: customer3,
    deposition:
      'Agradeço ao Gustavo e Felipe pelo excelente trabalho prestado na elaboração do nosso site e do nosso blog, e principalmente pela paciência durante as reuniões para explicar os detalhes de cada etapa! 🚀🚀🚀',
    name: 'Paulo Renato',
    establishment: 'Consulmagno e Assis',
  },
  {
    avatarUrl: customer1,
    deposition:
      'Estou muito realizado com os serviços da Apperize. Recebi um suporte incrível na criação do Websites Institucional da minha empresa de Consultoria. Toda a equipe é muito atenciosa, ágil e conseguiram personalizar 100% meu site!',
    name: 'Rômulo Valle',
    establishment: 'Consultoria Digital RV',
  },
  {
    avatarUrl: customer2,
    deposition:
      'Parabéns pelo excelente trabalho realizado! Todos os prazos e condições cumpridos!! Sem contar que atraímos mais clientes, depois da divulgação de nossa página! Parceria de sucesso!!!',
    establishment: 'Fina Flor Boutique',
    name: 'Anelise Dias',
  },

  {
    avatarUrl: customer4,
    deposition:
      'Bom dia Gustavo. Super obrigado pelo nosso site! Ficou maravilhoso! Toda diretoria adorou o resultado e confesso que superou nossas expectativas.Gratidão e parabéns pelo seu trabalho!👏👏👏',
    name: 'Alysson Oriá',
    establishment: 'Instituto Líder',
  },
]
