import serviceImg from '@/assets/img/services/brand.png'
import Image from 'next/image'

export function RecentWorks() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        <div className="border border-border rounded shadow-sm h-64 relative">
          <Image
            src={serviceImg}
            alt=""
            className="rounded absolute h-full w-full"
          />
        </div>
        <span className="font-medium font-alt text-lg">texto descritivo</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-border rounded shadow-sm h-64 relative">
          <Image
            src={serviceImg}
            alt=""
            className="rounded absolute h-full w-full"
          />
        </div>
        <span className="font-medium font-alt text-lg">texto descritivo</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-border rounded shadow-sm h-64 relative">
          <Image
            src={serviceImg}
            alt=""
            className="rounded absolute h-full w-full"
          />
        </div>
        <span className="font-medium font-alt text-lg">texto descritivo</span>
      </div>
    </div>
  )
}
