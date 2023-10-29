import { cn } from '@/libs/shadcn'

interface PurpleFilterProps {
  className?: string
}

export function PurpleFilter({ className }: PurpleFilterProps) {
  return (
    <div
      className={cn('absolute bg-primary w-full opacity-50 z-20', className)}
    />
  )
}
