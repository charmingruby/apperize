import { CustomerForm } from './components/customer-form'
import { EnterpriseForm } from './components/enterprise-form'

export default function Register() {
  return (
    <div>
      {/* Forms */}
      <section>
        <CustomerForm />
        <EnterpriseForm />
      </section>

      {/* Illustration */}
      <section></section>
    </div>
  )
}
