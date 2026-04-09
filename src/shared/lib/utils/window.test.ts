import changeHash from './window';

describe('window utils', () => {
  describe('changeHash', () => {
    it('change url hash', () => {
      changeHash('new');
      expect(window.location.hash).toEqual('#new');
    });
  });
});
