import {
  Home,
  LayoutDashboard,
  Megaphone,
  Package,
  Users,
  Wallet,
} from 'lucide-react'
import { NavItem } from './nav-item'

export function MenuNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem url="/" icon={Home} title="Home" />
      <NavItem url="/" icon={LayoutDashboard} title="Dashboard" />
      <NavItem url="/" icon={Users} title="Clientes" />
      <NavItem url="/" icon={Package} title="Pedidos" />
      <NavItem url="/" icon={Wallet} title="Finanças" />
      <NavItem url="/" icon={Megaphone} title="Changelogs" />
    </nav>
  )
}
