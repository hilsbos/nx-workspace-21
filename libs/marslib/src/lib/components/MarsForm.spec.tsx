import { render } from '@testing-library/react';

import MarsForm from './MarsForm';

describe('MarsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarsForm />);
    expect(baseElement).toBeTruthy();
  });
});
