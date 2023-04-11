import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import InputText from '.';

import { ThemeProvider } from 'styled-components';

import appThemes from '../../styles/theme';

afterEach(cleanup);

describe('Input type text component', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render an input type text correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value=''
          onChange={onChange}
        />
      </ThemeProvider>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render an input type text correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value=''
          onChange={onChange}
        />
      </ThemeProvider>
    );
    expect(getByText('Test')).toHaveTextContent('Test');
  });

  it('should call onChange function when adding a new text', () => {
    const testValue = 'Test Value';
    const { getByDisplayValue } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value={testValue}
          onChange={onChange}
        />
      </ThemeProvider>
    );
    const inputElement = getByDisplayValue(testValue);
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should render an error message correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value='Value'
          errorMessage='This is a error message.'
        />
      </ThemeProvider>
    );
    const errorMessage = getByTestId('inputTextErrorMessage');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should render an error icon correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value='Value'
          errorMessage='This is a error message.'
        />
      </ThemeProvider>
    );
    const errorMessage = getByTestId('inputTextErrorIcon');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should render a help message correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value='Value'
          helpMessage='This is a hint text to help user.'
        />
      </ThemeProvider>
    );
    const errorMessage = getByTestId('inputTextHelpMessage');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should not render a help message when there is a error message', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={appThemes.light}>
        <InputText
          label='Test'
          id='1'
          name='text-input'
          type='text'
          value='Value'
          errorMessage='This is a error message.'
          helpMessage='This is a hint text to help user.'
        />
      </ThemeProvider>
    );
    const helpMessage = queryByTestId('inputTextHelpMessage');

    expect(helpMessage).toBeNull();
  });
});
