import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header.js';

describe('Testing the header component', () => {
  it('displays a title on initial render', async () => {
    render(<Header />);

    expect(screen.getByText('RESTy')).toBeInTheDocument();
  });

});
