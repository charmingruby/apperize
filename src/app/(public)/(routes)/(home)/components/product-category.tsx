import { ElementType } from 'react'

interface ProductCategory {
  icon: ElementType
  category: string
}

export function ProductCategory({ category, icon: Icon }: ProductCategory) {
  return (
    <div className="border border-primary px-2 py-4 flex justify-center items-center rounded-md gap-1.5 cursor-pointer transition-colors hover:text-primary-foreground hover:bg-primary group">
      <Icon className="h-4 w-4 text-primary transition-colors group-hover:text-primary-foreground" />
      <span className="font-medium">{category}</span>
    </div>
  )
}
