import { fireEvent, render } from '@testing-library/react';

import SearchTopBar from './SearchTopBar';

// Header 제외 모의
jest.mock('./common', () => ({
  ...jest.requireActual('./common'),
  IconBtn: jest.fn(),
  LanguageBtn: jest.fn(),
  BackBtn: jest.fn()
}));

describe('SearchTopBar Component', () => {
  it('calls onSubmit handler when the form is submitted', () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<SearchTopBar onSubmit={onSubmit} />);
    fireEvent.submit(getByRole('form'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
