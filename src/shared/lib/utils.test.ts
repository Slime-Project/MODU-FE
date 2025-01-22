import changeHash from '@/shared/lib/utils';

describe('utils', () => {
  describe('changeHash', () => {
    it('change url hash', () => {
      changeHash('new');
      expect(window.location.hash).toEqual('#new');
    });
  });
});
