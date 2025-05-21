import { render } from '@testing-library/react';

import MarsTable from './MarsTable';

describe('MarsTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarsTable />);
    expect(baseElement).toBeTruthy();
  });
});
