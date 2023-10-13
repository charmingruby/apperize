import { TabletSmartphone } from 'lucide-react'

export function Logo() {
  return (
    <strong className="flex items-center gap-1">
      <div>
        <TabletSmartphone className="text-primary" />
      </div>
      <span className="font-semibold font-alt text-xl">
        <span className="text-primary"> App</span>
        erize
      </span>
    </strong>
  )
}
