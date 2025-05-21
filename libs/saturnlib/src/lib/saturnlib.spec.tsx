import { render } from '@testing-library/react';

import Saturnlib from './saturnlib';

describe('Saturnlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Saturnlib />);
    expect(baseElement).toBeTruthy();
  });
});
