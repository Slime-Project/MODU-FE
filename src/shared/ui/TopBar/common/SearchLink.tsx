import IconLink from './IconLink';

export default function SearchLink({ className = '' }: { className?: string }) {
  return <IconLink href="/search" className={className} src="/svgs/search.svg" alt="search" />;
}
