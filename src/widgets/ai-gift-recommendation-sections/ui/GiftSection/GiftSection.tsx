import { ChangeEvent, useEffect, useState } from 'react';

import { AI_GIFT_RECOMMENDATION_HASHES } from '@/entities/ai-gift-recommendation';
import { Character } from '@/entities/ai-gift-recommendation/types';
import changeHash from '@/shared/lib/utils/window';
import BottomBtn from '@/shared/ui/BottomBtn';
import { Emoji } from '@/shared/ui/emojis';
import { NumberInput } from '@/shared/ui/Input';
import {
  FieldsContainer,
  FieldWrap,
  SectionTitle
} from '@/widgets/ai-gift-recommendation-sections/ui/common';
import CardInput from '@/widgets/ai-gift-recommendation-sections/ui/GiftSection/CardInput';

const characters: { value: Character; emoji: Emoji }[] = [
  {
    value: '재미있는',
    emoji: 'zanyFace'
  },
  {
    value: '로맨틱한',
    emoji: 'loveLetter'
  },
  {
    value: '실용적인',
    emoji: 'robot'
  },
  {
    value: '심플한',
    emoji: 'gemStone'
  }
];

const hasInput = (value: string) => value !== '';
const hasSelection = <T extends string>(value: T | null) => value !== null;
const checkNextBtnDisabled = (minPrice: string, maxPrice: string, character: Character | null) =>
  !(hasInput(minPrice) && hasInput(maxPrice) && hasSelection(character));

export default function GiftSection({
  updateMinPrice,
  updateMaxPrice,
  updateCharacter,
  minPrice,
  maxPrice,
  character
}: {
  updateMinPrice: (price: string) => void;
  updateMaxPrice: (price: string) => void;
  updateCharacter: (character: Character) => void;
  minPrice: string;
  maxPrice: string;
  character: Character | null;
}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(checkNextBtnDisabled(minPrice, maxPrice, character));
  }, [minPrice, maxPrice, character]);

  const createPriceInputChangeHandler =
    (updateValue: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.validity.rangeOverflow) {
        updateValue(e.currentTarget.value);
      }
    };
  const swapMinMax = () => {
    const maxPriceCopy = maxPrice;
    updateMaxPrice(minPrice);
    updateMinPrice(maxPriceCopy);
  };
  const handleClick = () => {
    if (minPrice > maxPrice) {
      swapMinMax();
    }

    changeHash(AI_GIFT_RECOMMENDATION_HASHES[2]);
  };

  return (
    <section>
      <SectionTitle title="어떤 선물을 추천해 드릴까요?" />
      <FieldsContainer>
        <FieldWrap title="가격대">
          <div className="flex items-center text-xs">
            <NumberInput
              label="최소 가격"
              className="mr-1 w-14 text-center"
              size="xs"
              placeholder="10000"
              value={minPrice}
              max={9999999}
              min={0}
              onChange={createPriceInputChangeHandler(updateMinPrice)}
              required
            />
            원<span className="mx-2">~</span>
            <NumberInput
              label="최대 가격"
              className="mr-1 w-14 text-center"
              size="xs"
              placeholder="10000"
              value={maxPrice}
              max={9999999}
              min={0}
              onChange={createPriceInputChangeHandler(updateMaxPrice)}
              required
            />
            원
          </div>
        </FieldWrap>
        <FieldWrap title="선물 특성">
          <ul className="grid grid-cols-2 gap-4">
            {characters.map(({ value, emoji }) => (
              <li key={value}>
                <CardInput
                  name="선물 특성"
                  label={`${value} 선물`}
                  value={value}
                  emoji={emoji}
                  checked={character === value}
                  onChange={() => updateCharacter(value)}
                />
              </li>
            ))}
          </ul>
        </FieldWrap>
      </FieldsContainer>
      <BottomBtn disabled={disabled} onClick={handleClick}>
        다음
      </BottomBtn>
    </section>
  );
}
