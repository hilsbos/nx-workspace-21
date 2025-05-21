import { render } from '@testing-library/react';

import Marslib from './marslib';

describe('Marslib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Marslib />);
    expect(baseElement).toBeTruthy();
  });
});
