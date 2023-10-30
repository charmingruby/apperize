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
        <div className="flex items-center gap-4">
          <div>
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>

          <span className="font-medium">{label}</span>
        </div>
      </RedirectLink>
    </div>
  )
}
