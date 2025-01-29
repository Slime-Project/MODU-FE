import { useRouter } from 'next/navigation';

import IconBtn from '@/shared/ui/TopBar/common/IconBtn';

export default function BackBtn({ className = '' }: { className?: string }) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return <IconBtn onClick={goBack} className={className} src="/svgs/arrow-back.svg" alt="back" />;
}
