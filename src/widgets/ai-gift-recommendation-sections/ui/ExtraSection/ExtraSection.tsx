import { TextInput } from '@/shared/ui/Input';
import { SectionTitle } from '@/widgets/ai-gift-recommendation-sections/ui/common';

export default function ExtraSection({
  updateDescription,
  description
}: {
  updateDescription: (value: string) => void;
  description: string;
}) {
  return (
    <section>
      <SectionTitle title="딱 맞는 선물을 추천받기 위해 AI 에게 더 알려주세요! (선택)" />
      <TextInput
        label="추가 설명"
        className="mt-8"
        size="xs"
        placeholder="ex. 집들이 선물을 추천해줘!"
        value={description}
        maxLength={24}
        onChange={e => updateDescription(e.currentTarget.value)}
      />
    </section>
  );
}
