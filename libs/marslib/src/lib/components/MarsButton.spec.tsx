import { render } from '@testing-library/react';

import MarsButton from './MarsButton';

describe('MarsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarsButton />);
    expect(baseElement).toBeTruthy();
  });
});
