interface FieldsProgressBarProps {
  amountOfFields: number
  fieldsFilled: number
}

export function FieldsProgressBar({
  fieldsFilled,
  amountOfFields,
}: FieldsProgressBarProps) {
  const filledFieldsPercentage =
    ((fieldsFilled / amountOfFields) * 100).toString() + '%'

  return (
    <div className="mt-12 mb-8">
      <span className="text-muted-foreground text-xs font-medium mb-2 block">
        {fieldsFilled} de {amountOfFields} campos obrigatórios
      </span>

      <div>
        <div className="border rounded-full px-2 py-2">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${filledFieldsPercentage}` }}
          />
        </div>
      </div>
    </div>
  )
}
