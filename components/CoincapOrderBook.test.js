import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CoincapOrderBook from './CoincapOrderBook';

describe('CoincapOrderBook', () => {
  test('renders Order Book label', () => {
    render(<CoincapOrderBook />);
    const orderBookLabel = screen.getByText('Order Book');
    expect(orderBookLabel).toBeDefined();
  });

  test('renders Bid and Ask labels', () => {
    render(<CoincapOrderBook />);
    const bidLabel = screen.getByText('Bid');
    const askLabel = screen.getByText('Ask');
    expect(bidLabel).toBeDefined();
    expect(askLabel).toBeDefined();
  });

  test('renders some bid and ask prices', () => {
    render(<CoincapOrderBook />);
    const bidPrice = screen.getByText('42.629');
    const askPrice = screen.getByText('4.86679');
    expect(bidPrice).toBeDefined();
    expect(askPrice).toBeDefined();
  });
});
