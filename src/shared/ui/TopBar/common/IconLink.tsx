import Link from 'next/link';

import Icon from './Icon';

export default function IconLink({
  href,
  className = '',
  src,
  alt
}: {
  href: string;
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <Link href={href} className={`w-auto shrink-0 p-1.5 ${className}`}>
      <Icon src={src} alt={alt} />
    </Link>
  );
}
