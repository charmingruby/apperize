import { ChevronDown } from 'lucide-react'
import { TaskStatusDemo } from './status'
import { TaskCategoryDemo } from './category'

// interface TaskReportProps {}

export function TaskReportDemo() {
  return (
    <div className="flex w-full p-3">
      <div className="flex items-center col-span-1 mr-4">
        <ChevronDown className="text-primary h-5 w-5" />
        <span>1</span>
      </div>

      <div className="col-span-7 flex items-center flex-1">
        <span className="truncate ">Layout da página inicial</span>
      </div>

      <div className="col-span-2 mr-4">
        <TaskCategoryDemo categoryName="UI" />
      </div>

      <div className="col-span-2 flex items-center justify-end">
        <TaskStatusDemo status="Pendente" />
      </div>
    </div>
  )
}
