import { render, fireEvent, waitFor } from '@testing-library/react';
import { ChatContext, ChatContextProvider } from '../ChatContext';


describe('ChatContextProvider', () => {


  test('displays child component', () => {
    const addMessage = jest.fn();
    const handleInputChange = jest.fn();
    const isLoading = false;
    const message = 'Hello';

    const { getByText } = render(
      <ChatContext.Provider
        value={{
          addMessage: addMessage,
          message: message,
          handleInputChange: handleInputChange,
          isLoading: isLoading,
        }}
      >
          <div>Child component</div>
     
      </ChatContext.Provider>
    );

    expect(getByText('Child component')).toBeInTheDocument();
  });


  test('displays child component', () => {
    const addMessage = jest.fn();
    const handleInputChange = jest.fn();
    const isLoading = false;
    const message = 'Hello';

    const { getByText } = render(
      <ChatContext.Provider
        value={{
          addMessage: addMessage,
          message: message,
          handleInputChange: handleInputChange,
          isLoading: isLoading,
        }}
      >
          <div>Child component</div>
     
      </ChatContext.Provider>
    );

    expect(getByText('Child component')).toBeInTheDocument();
  });



  test('displays child component', () => {
    const addMessage = jest.fn();
    const handleInputChange = jest.fn();
    const isLoading = false;
    const message = 'Hello';

    const { getByText } = render(
      <ChatContext.Provider
        value={{
          addMessage: addMessage,
          message: message,
          handleInputChange: handleInputChange,
          isLoading: isLoading,
        }}
      >
          <div>Child component</div>
     
      </ChatContext.Provider>
    );

    expect(getByText('Child component')).toBeInTheDocument();
  });


 
});