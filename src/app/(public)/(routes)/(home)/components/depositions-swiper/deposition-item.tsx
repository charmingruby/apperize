import exampleImage from '@/assets/img/team/gustavo-dias-profile.jpeg'
import Image from 'next/image'

interface DepositionItemProps {
  deposition: string
  avatarUrl: string
  role: string
  name: string
}

export function DepositionItem() {
  return (
    <div className=" flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <p className="text-base italic text-foreground/70">
          {`"`}Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          rem soluta deleniti cum, possimus doloribus iste sint sequi cumque
          beatae molestiae corporis nam error nisi deserunt, perspiciatis
          officia ex nobis?{`"`}
        </p>

        <div className="flex items-center gap-2">
          <div className="p-0.5 border-2 border-primary rounded-full h-16 w-16">
            <Image
              src={exampleImage}
              alt="Example deposition image"
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col">
            {/* Name */}
            <strong className="text-lg text-foreground/90">Gustavo Dias</strong>

            {/* Role */}
            <small className="block text-sm text-muted-foreground">
              Fundador do Ymir
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
