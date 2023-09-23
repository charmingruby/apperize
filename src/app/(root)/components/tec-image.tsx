import Image from 'next/image'

export interface TecImageProps {
  url: string
  alt: string
}

export function TecImage({ url, alt }: TecImageProps) {
  return (
    <Image
      src={url}
      alt={alt}
      width={72}
      height={72}
      className="w-16 h-16"
      draggable={false}
    />
  )
}
