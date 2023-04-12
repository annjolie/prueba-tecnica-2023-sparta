import type { Meta, Story } from '@storybook/react';
import React from 'react';
import Checkbox from '.';
import type { CheckboxProps } from './types';

export default {
  args: {
    disabled: false,
    label: 'Checkbox'
  },
  component: Checkbox,
  title: 'Form/Checkbox'
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  disabled: false,
  onChange: () => alert('onChange')
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'default',
  disabled: false,
  checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'default',
  disabled: true
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  id: 'default',
  disabled: true,
  checked: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  id: 'default',
  checked: true,
  indeterminate: true
};
