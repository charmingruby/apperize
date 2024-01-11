interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="w-fit space-y-4 mb-4 ">
      <span className="text-primary text-sm tracking-widest font-medium block leading-snug">
        {title.toUpperCase()}
      </span>
    </div>
  )
}
