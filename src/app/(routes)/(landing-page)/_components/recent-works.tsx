import { recentWorks } from '@/contents/recent-works'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function RecentWorks() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {recentWorks.map(({ description, image, demoUrl }) => (
        <div key={description} className="flex flex-col gap-2">
          <div className="border border-border rounded shadow-sm h-48 relative">
            <Image
              src={image}
              alt=""
              className="rounded absolute h-full w-full object-cover"
            />
          </div>
          {demoUrl ? (
            <Link
              prefetch={false}
              href={demoUrl}
              className="flex items-center gap-1 hover:underline decoration-wavy decoration-primary"
            >
              <span className="font-medium font-alt text-lg">
                {description}
              </span>

              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="font-medium font-alt text-lg">{description}</span>
          )}
        </div>
      ))}
    </div>
  )
}
