import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Navbar from '.';
import type { NavbarProps } from './types';

export default {
  component: Navbar,
  title: 'General/Navbar',
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
