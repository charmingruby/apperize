import { Github, Linkedin } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { MemberSocialLink } from './member-social-link'

interface TeamMemberProps {
  avatar: StaticImport
  name: string
  role: string
  description: string
  linkedinUrl: string
  githubUrl: string
}
export function TeamMember({
  avatar,
  linkedinUrl,
  githubUrl,
  name,
  role,
  description,
}: TeamMemberProps) {
  return (
    <div className="flex flex-col border rounded-md p-8 shadow-sm">
      <div className="border-2 border-primary rounded-full p-1 w-fit">
        <Image
          src={avatar}
          alt={`Foto de perfil ${role}: ${name}`}
          className="h-24 w-24 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-0.5 my-4">
        <strong className="text-lg font-semibold">{name}</strong>
        <small className="text-sm font-medium text-primary">{role}</small>
      </div>

      <span className="text-muted-foreground text-sm mb-4">{description}</span>

      <div className="flex gap-2 items-center mt-auto">
        <MemberSocialLink icon={Linkedin} url={linkedinUrl} />
        <MemberSocialLink icon={Github} url={githubUrl} />
      </div>
    </div>
  )
}
