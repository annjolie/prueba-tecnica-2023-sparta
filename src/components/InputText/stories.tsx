import type { Meta, Story } from '@storybook/react';
import React from 'react';

import InputText from '.';
import type { InputTextProps } from './types';

export default {
  component: InputText,
  title: 'Form/InputText',
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    id: '1',
    name: 'text-input',
    disabled: false,
    type: 'text'
  }
} as Meta;

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithHelper = Template.bind({});
WithHelper.args = {
  help: true,
  helpMessage: 'This is a hint text to help user.'
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  errorMessage: 'This is a error message.'
};
