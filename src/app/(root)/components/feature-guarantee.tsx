import { CheckCircle2 } from 'lucide-react'

interface FeatureGuaranteeProps {
  text: string
}

export function FeatureGuarantee({ text }: FeatureGuaranteeProps) {
  return (
    <div className="flex gap-2 items-center">
      <CheckCircle2 className="text-primary h-6" />
      <div className="text-lg font-medium">{text}</div>
    </div>
  )
}
