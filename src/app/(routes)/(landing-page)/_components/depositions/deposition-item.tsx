import { Deposition } from '@/contents/depositions'
import Image from 'next/image'

export function DepositionItem({
  avatarUrl,
  deposition,
  establishment,
  name,
}: Deposition) {
  return (
    <div className=" flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <p className="text-base italic text-foreground/70">
          {`"`}
          {deposition}
          {`"`}
        </p>

        <div className="flex items-center gap-2">
          <div className="p-0.5 border-2 border-primary rounded-full h-12 w-12">
            <Image
              src={avatarUrl}
              alt={name + 'avatar'}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col">
            {/* Name */}
            <strong className="text-base text-foreground/90">{name}</strong>

            {/* Establishment */}
            <small className="block text-sm text-muted-foreground">
              {establishment}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
