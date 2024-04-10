import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ToastContextProvider, ToastContext } from './ToastProvider'; // Adjust the import path as necessary

describe('ToastContextProvider', () => {
  test('displays a success toast', async () => {
    const TestComponent = () => {
      const { addToast } = React.useContext(ToastContext);

      return <button onClick={() => addToast({ message: 'Success Message', type: 'success' })}>Add Success Toast</button>;
    };

    render(
      <ToastContextProvider>
        <TestComponent />
      </ToastContextProvider>
    );

    fireEvent.click(screen.getByText('Add Success Toast'));
    expect(await screen.findByText('Success Message')).toBeTruthy();
  });

  test('displays an error toast', async () => {
    const TestComponent = () => {
      const { addToast } = React.useContext(ToastContext);

      return <button onClick={() => addToast({ message: 'Error Message', type: 'error' })}>Add Error Toast</button>;
    };

    render(
      <ToastContextProvider>
        <TestComponent />
      </ToastContextProvider>
    );

    fireEvent.click(screen.getByText('Add Error Toast'));
    expect(await screen.findByText('Error Message')).toBeTruthy();
  });

  test('displays an info toast', async () => {
    const TestComponent = () => {
      const { addToast } = React.useContext(ToastContext);

      return <button onClick={() => addToast({ message: 'Info Message', type: 'info' })}>Add Info Toast</button>;
    };

    render(
      <ToastContextProvider>
        <TestComponent />
      </ToastContextProvider>
    );

    fireEvent.click(screen.getByText('Add Info Toast'));
    expect(await screen.findByText('Info Message')).toBeTruthy();
  });
});
