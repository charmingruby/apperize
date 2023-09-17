interface TaskCategoryProps {
  categoryName: string
}

export function TaskCategoryDemo({ categoryName }: TaskCategoryProps) {
  return (
    <div className="w-fit px-3 py-1.5 rounded-md shadow-sm border-2 bg-accent">
      <span className="font-medium text-sm">{categoryName}</span>
    </div>
  )
}
