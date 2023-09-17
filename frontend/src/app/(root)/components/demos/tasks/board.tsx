import { TaskReportDemo } from './report'

export function TasksBoardDemo() {
  return (
    <div className="flex flex-col divide-y-2 divide-y-border overflow-auto border rounded-md h-fit">
      <TaskReportDemo />
      <TaskReportDemo />
      <TaskReportDemo />
      <TaskReportDemo />
      <TaskReportDemo />
    </div>
  )
}
