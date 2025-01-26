import calculatePercentage from '@/shared/lib/utils/math';

describe('math utils', () => {
  describe('calculatePercentage', () => {
    it('should return correct percentage', () => {
      expect(calculatePercentage(1, 2)).toEqual(50);
    });
  });
});
