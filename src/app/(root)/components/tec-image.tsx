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
      className="md:w-16 md:h-16 w-12 h-12"
      draggable={false}
    />
  )
}
