interface TitleProps {
  title: string
  underline?: boolean
}

export function Title({ title, underline = true }: TitleProps) {
  return (
    <div className="w-fit space-y-4 mb-4 ">
      <span className="text-primary tracking-widest font-semibold block leading-snug">
        {title}
      </span>
      {underline && <div className="w-1/6 h-0.5 bg-primary" />}
    </div>
  )
}
