import { TabletSmartphone } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <TabletSmartphone className="text-primary h-6 w-6" />

      <strong className="text-2xl font-semibold font-alt tracking-wider">
        <span className="text-primary">App</span>
        erize
      </strong>
    </div>
  )
}
