import { CheckCircle } from 'lucide-react'

interface BudgetRequestTopicProps {
  topic: string
}

export function BudgetRequestTopic({ topic }: BudgetRequestTopicProps) {
  return (
    <div className="flex gap-2">
      <CheckCircle className="text-primary h-4 w-4" />
      <span className="text-foreground font-medium text-base/4 flex-1">
        {topic}
      </span>
    </div>
  )
}
