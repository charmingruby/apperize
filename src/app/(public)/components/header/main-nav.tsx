import { NavItem } from './nav-item'

export function MainNav() {
  return (
    <div className="hidden lg:flex gap-6">
      <NavItem label="Início" url="/" />
      <NavItem label="Pedidos" url="/pedidos" />
      <NavItem label="Sobre" url="/sobre" />
      <NavItem label="Contato" url="/contato" />
    </div>
  )
}
