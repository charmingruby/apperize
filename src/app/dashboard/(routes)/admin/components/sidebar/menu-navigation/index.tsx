import {
  Home,
  LayoutDashboard,
  Megaphone,
  Package,
  Users,
  Wallet,
} from 'lucide-react'
import { DropdownNavItem, NavItem } from './nav-item'

export function MenuNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem url="/" icon={Home} title="Home" />
      <NavItem url="/" icon={LayoutDashboard} title="Dashboard" />
      <DropdownNavItem url="/" icon={Users} title="Clientes" items={[]} />
      <DropdownNavItem url="/" icon={Package} title="Pedidos" items={[]} />
      <NavItem url="/" icon={Wallet} title="Finanças" />
      <NavItem url="/" icon={Megaphone} title="Changelogs" />
    </nav>
  )
}
