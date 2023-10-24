import { RedirectLink } from '@/components/redirect-link'
import { contactDomainEmail } from '@/site/contact'
import { ArrowUpRight, LucideIcon, Mail } from 'lucide-react'

interface ContactInfo {
  icon: LucideIcon
  name: string
  description: string
  contact: string
  url?: string
}

const contactList: ContactInfo[] = [
  {
    icon: Mail,
    name: 'Email',
    description: 'Nos envie um email',
    contact: contactDomainEmail,
    url: '/',
  },
  {
    icon: Mail,
    name: 'Email',
    description: 'Nos envie um email',
    contact: contactDomainEmail,
  },
  {
    icon: Mail,
    name: 'Email',
    description: 'Nos envie um email',
    contact: contactDomainEmail,
  },
]

export function ContactBoard() {
  return (
    <div className="border flex flex-col lg:flex-row justify-between items-center w-full rounded-md shadow-sm">
      {contactList.map(
        ({ icon: Icon, name, description, contact, url }, idx) => {
          const isTheMiddleItem = Math.floor(contactList.length / 2) === idx

          return (
            <div
              className={`flex flex-col w-full h-full items-center text-center p-4 ${
                isTheMiddleItem ? 'border-y lg:border-x lg:border-y-0' : ''
              }`}
              key={name}
            >
              <div className="bg-background-highlight-dark border-4 border-background-highlight-main p-3 rounded-full">
                <Icon className="text-primary" />
              </div>

              <div className="flex flex-col py-4">
                <strong className="text-primary text-lg font-semibold">
                  {name}
                </strong>
                <small className="text-sm text-muted-foreground">
                  {description}
                </small>
              </div>

              {url ? (
                <RedirectLink url={url}>
                  <div className="text-primary flex items-center gap-1">
                    <span className="font-medium">{contact}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </RedirectLink>
              ) : (
                <div className="text-primary">
                  <span className="font-medium">{contact}</span>
                </div>
              )}
            </div>
          )
        },
      )}
    </div>
  )
}
