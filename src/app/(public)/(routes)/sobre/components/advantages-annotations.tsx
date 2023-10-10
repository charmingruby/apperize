import { TrendingUp } from 'lucide-react'

export function AdvantagesAnnotation() {
  return (
    <div className="border-l pl-2 flex justify-end items-center min-w-[8rem] gap-2">
      <div className="flex flex-col  text-emerald-500 w-full gap-2">
        <small className="font-medium">Eficiência</small>
        <small className="font-medium">Automação</small>
        <small className="font-medium">Lucratividade</small>
      </div>

      <TrendingUp className="text-emerald-400" />
    </div>
  )
}
