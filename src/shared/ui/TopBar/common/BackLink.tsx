import IconLink from './IconLink';

export default function BackLink({ className = '' }: { className?: string }) {
  return <IconLink href="/back" className={className} src="/svgs/arrow-back.svg" alt="back" />;
}
