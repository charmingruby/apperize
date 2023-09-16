import { StatusOptions } from '@/constants/status'
import clsx from 'clsx'

interface TaskStatusProps {
  status: StatusOptions
}

export function TaskStatus({ status }: TaskStatusProps) {
  return (
    <div
      className={clsx('w-fit px-3 py-2 rounded-md shadow-sm border-2', {
        'bg-status-pending-dark border-status-pending-main':
          status === 'Pendente',
        'bg-status-in-progress-dark border-status-in-progress-main':
          status === 'Em progresso',
        'bg-status-done-dark border-status-done-main': status === 'Finalizado',
      })}
    >
      <span
        className={clsx('text-status-pending-main font-medium', {
          'text-status-pending-main': status === 'Pendente',
          'text-status-in-progress-main': status === 'Em progresso',
          'text-status-done-main': status === 'Finalizado',
        })}
      >
        {status}
      </span>
    </div>
  )
}
