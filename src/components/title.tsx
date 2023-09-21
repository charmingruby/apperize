interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="w-fit space-y-4 mb-6 ">
      <span className="text-primary uppercase tracking-widest font-semibold block">
        {title}
      </span>
      <div className="w-1/6 h-0.5 bg-primary" />
    </div>
  )
}
