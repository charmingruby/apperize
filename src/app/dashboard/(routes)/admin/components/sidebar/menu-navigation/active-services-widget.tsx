export function ActiveServicesWidget() {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg bg-primary/10 px-4 py-5">
        <div className="space-y-1">
          <span className="font-medium block text-sm/5 text-primary">
            Serviços ativos
          </span>
          <p className="text-sm/5 text-primary/80">
            Total de 80% dos serviços finalizados
          </p>
        </div>

        <div className="h-2 rounded-full bg-primary/20">
          <div className="h-2 w-4/5 rounded-full bg-primary" />
        </div>

        <div>
          <button type="button" className="text-sm font-medium text-primary">
            Visualizar
          </button>
        </div>
      </div>
    </div>
  )
}
