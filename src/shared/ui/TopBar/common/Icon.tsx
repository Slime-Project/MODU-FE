import Image from 'next/image';

export default function Icon({ src, alt }: { src: string; alt: string }) {
  return <Image className="aspect-square w-5" width={20} height={20} src={src} alt={alt} />;
}
