import exampleImage from '@/assets/img/team/gustavo-dias-profile.jpeg'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={exampleImage}
        alt="User image"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-foreground/90">
          Gustavo Dias
        </span>
        <span className="text-sm text-muted-foreground truncate">
          gustavodiasa2121@gmail.com
        </span>
      </div>
      <Button variant="ghost" className="ml-auto p-2 group">
        <LogOut className="h-5 w-5 text-muted-foreground group-hover:text-destructive" />
      </Button>
    </div>
  )
}
