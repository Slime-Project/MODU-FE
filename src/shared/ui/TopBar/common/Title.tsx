export default function Title({ title }: { title: string }) {
  return <h2 className="absolute right-1/2 h-5 translate-x-2/4 text-base leading-none">{title}</h2>;
}
