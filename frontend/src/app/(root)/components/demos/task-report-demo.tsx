import { TaskStatus } from '@/components/task-status'
import { ChevronDown } from 'lucide-react'

// interface TaskReportProps {}

export function TaskReportDemo() {
  return (
    <>
      {/* 1x */}
      <div className="flex items-center col-span-1">
        <ChevronDown className="text-primary h-5 w-5" />
        <span>1</span>
      </div>

      {/* 4x */}
      <div className="col-span-4 flex items-center">
        <span className="truncate ">Layout da página inicial</span>
      </div>

      {/* 2x */}
      <div className="flex items-center justify-center gap-1 col-span-2">
        <span>💅</span>
        <span>UI</span>
      </div>

      {/* 2x */}
      <div className="col-span-2 flex items-center justify-end">
        <TaskStatus status="Pendente" />
      </div>
    </>
  )
}
