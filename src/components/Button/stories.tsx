import type { Meta, Story } from '@storybook/react';
import React from 'react';
import '../../styles/font.css';

import Button from '.';
import type { ButtonProps } from './types';

export default {
  component: Button,
  title: 'General/Button',
  args: {
    label: 'Button',
    onclick: () => {
      alert('Button clicked');
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
