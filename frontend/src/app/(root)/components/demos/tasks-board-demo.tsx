import { TaskReportDemo } from './task-report-demo'

export function TasksBoardDemo() {
  return (
    <div className="">
      <div className="grid grid-cols-9">
        <TaskReportDemo />
        <TaskReportDemo />
        <TaskReportDemo />
        <TaskReportDemo />
        <TaskReportDemo />
      </div>
    </div>
  )
}
