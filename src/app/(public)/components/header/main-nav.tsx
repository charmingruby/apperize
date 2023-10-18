import { NavItem } from './nav-item'

export function MainNav() {
  return (
    <div className="hidden lg:flex gap-6">
      <NavItem label="Início" url="/" />
      <NavItem label="Sobre" url="/sobre" />
      <NavItem label="O que fazemos" url="/o-que-fazemos" />
      <NavItem label="Contato" url="/contato" />
    </div>
  )
}
