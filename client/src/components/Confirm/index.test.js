import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Confirm from './index';
import userEvent from '@testing-library/user-event';

describe('Confirm:', () => {
  it('should render popup', () => {
    const props = {
      msg: 'Message',
      onClose: jest.fn(),
      open: true,
    };

    const { getByText } = render(<Confirm {...props} />);

    const btn = getByText(/OK/i);
    const msg = getByText(props.msg);

    userEvent.click(btn);

    expect(btn).toBeInTheDocument();
    expect(msg).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
