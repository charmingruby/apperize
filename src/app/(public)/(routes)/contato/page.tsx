'use client'

import { EmailForm } from './components/email-form'

export default function ContactPage() {
  return (
    <>
      {/* Form */}
      <section className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content */}
          <div></div>
          {/* Email form */}
          <div>
            <EmailForm />
          </div>
        </div>
      </section>

      {/* Options */}
      <section></section>

      {/* CTA */}
      <section></section>
    </>
  )
}
