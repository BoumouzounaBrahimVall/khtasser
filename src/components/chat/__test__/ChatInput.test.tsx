// ChatInput.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChatContext } from '../ChatContext';
import ChatInput from '../ChatInput';


test('renders chat input correctly', () => {
  const mockAddMessage = jest.fn();
  const mockHandleInputChange = jest.fn();
  const mockIsLoading = false;
  const mockMessage = 'Hello';

  const { getByPlaceholderText, getByLabelText } = render(
    <ChatContext.Provider
      value={{
        addMessage: mockAddMessage,
        handleInputChange: mockHandleInputChange,
        isLoading: mockIsLoading,
        message: mockMessage,
      }}
    >
      <ChatInput />
    </ChatContext.Provider>
  );

  const textarea = getByPlaceholderText('Enter your question...');
  const sendButton = getByLabelText('send message');

  expect(textarea).toBeInTheDocument();
  expect(sendButton).toBeInTheDocument();

  fireEvent.change(textarea, { target: { value: 'New message' } });
  expect(mockHandleInputChange).toHaveBeenCalledTimes(1);

  fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: false });
  expect(mockAddMessage).toHaveBeenCalledTimes(1);

  fireEvent.click(sendButton);
  expect(mockAddMessage).toHaveBeenCalledTimes(2);
});


test('calls addMessage when Enter key is pressed without Shift', () => {
    const mockAddMessage = jest.fn();
    const mockHandleInputChange = jest.fn();
    const mockIsLoading = false;
    const mockMessage = 'Hello';
  
    const { getByPlaceholderText } = render(
      <ChatContext.Provider
        value={{
          addMessage: mockAddMessage,
          handleInputChange: mockHandleInputChange,
          isLoading: mockIsLoading,
          message: mockMessage,
        }}
      >
        <ChatInput />
      </ChatContext.Provider>
    );
  
    const textarea = getByPlaceholderText('Enter your question...');
  
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: false });
    expect(mockAddMessage).toHaveBeenCalledTimes(1);
  });
  
  test('does not call addMessage when Enter key is pressed with Shift', () => {
    const mockAddMessage = jest.fn();
    const mockHandleInputChange = jest.fn();
    const mockIsLoading = false;
    const mockMessage = 'Hello';
  
    const { getByPlaceholderText } = render(
      <ChatContext.Provider
        value={{
          addMessage: mockAddMessage,
          handleInputChange: mockHandleInputChange,
          isLoading: mockIsLoading,
          message: mockMessage,
        }}
      >
        <ChatInput />
      </ChatContext.Provider>
    );
  
    const textarea = getByPlaceholderText('Enter your question...');
  
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: true });
    expect(mockAddMessage).not.toHaveBeenCalled();
  });
  
  test('calls addMessage when send button is clicked', () => {
    const mockAddMessage = jest.fn();
    const mockHandleInputChange = jest.fn();
    const mockIsLoading = false;
    const mockMessage = 'Hello';
  
    const { getByLabelText } = render(
      <ChatContext.Provider
        value={{
          addMessage: mockAddMessage,
          handleInputChange: mockHandleInputChange,
          isLoading: mockIsLoading,
          message: mockMessage,
        }}
      >
        <ChatInput />
      </ChatContext.Provider>
    );
  
    const sendButton = getByLabelText('send message');
    fireEvent.click(sendButton);
    expect(mockAddMessage).toHaveBeenCalledTimes(1);
  });
  
  test('calls handleInputChange when textarea value changes', () => {
    const mockAddMessage = jest.fn();
    const mockHandleInputChange = jest.fn();
    const mockIsLoading = false;
    const mockMessage = 'New message';
  
    const { getByPlaceholderText } = render(
      <ChatContext.Provider
        value={{
          addMessage: mockAddMessage,
          handleInputChange: mockHandleInputChange,
          isLoading: mockIsLoading,
          message: mockMessage,
        }}
      >
        <ChatInput />
      </ChatContext.Provider>
    );
  
    const textarea = getByPlaceholderText('Enter your question...');
  
    fireEvent.change(textarea, { target: { value: 'New message' } });
    expect(mockHandleInputChange).toHaveBeenCalledTimes(0);
    expect(textarea.value).toBe('New message');
  });
  
  test('disables the send button when isLoading is true', () => {
    const mockAddMessage = jest.fn();
    const mockHandleInputChange = jest.fn();
    const mockIsLoading = true;
    const mockMessage = 'Hello';
  
    const { getByLabelText } = render(
      <ChatContext.Provider
        value={{
          addMessage: mockAddMessage,
          handleInputChange: mockHandleInputChange,
          isLoading: mockIsLoading,
          message: mockMessage,
        }}
      >
        <ChatInput />
      </ChatContext.Provider>
    );
  
    const sendButton = getByLabelText('send message');
    expect(sendButton).toBeDisabled();
  });