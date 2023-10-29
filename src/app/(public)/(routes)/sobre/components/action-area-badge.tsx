import { Code2 } from 'lucide-react'

export function ActionAreaBadge() {
  return (
    <div className="flex items-center gap-2">
      <div className="border border-border shadow-md rounded-md bg-background-highlight-dark text-primary w-fit p-2">
        <Code2 className="h-8 w-8" />
      </div>

      <div className="flex flex-col text-xl lg:text-lg">
        <span className="leading-tight">Somos uma</span>
        <strong className="leading-tight">Software House</strong>
      </div>
    </div>
  )
}
