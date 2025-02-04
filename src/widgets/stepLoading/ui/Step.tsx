import { CheckIcon } from '@/shared/assets/svgs';

export default function Step({ description, isDone }: { description: string; isDone: boolean }) {
  return (
    <div className="flex items-center">
      <CheckIcon className={`h-full w-7 ${isDone ? 'fill-primary-400' : 'fill-gray-300'}`} />
      <span className="ml-2 text-xs font-bold leading-none">{description}</span>
    </div>
  );
}
