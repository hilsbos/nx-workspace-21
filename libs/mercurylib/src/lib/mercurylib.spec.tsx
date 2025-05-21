import { render } from '@testing-library/react';

import Mercurylib from './mercurylib';

describe('Mercurylib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mercurylib />);
    expect(baseElement).toBeTruthy();
  });
});
