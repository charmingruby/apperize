import { RedirectLink } from '@/components/redirect-link'
import { ArrowDown } from 'lucide-react'

interface NextSectionButtonProps {
  label: string
  nextSectionId: string
}

export function NextSectionButton({
  label,
  nextSectionId,
}: NextSectionButtonProps) {
  return (
    <div className="mt-0 lg:mt-16">
      <RedirectLink url={nextSectionId}>
        <div className="flex items-center gap-2 hover:bg-gray-50 transition-colors w-fit px-4 py-2">
          <div className="bg-background-highlight-dark p-1 rounded-full border-4 border-background-highlight-main">
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>

          <span className="font-medium">{label}</span>
        </div>
      </RedirectLink>
    </div>
  )
}
