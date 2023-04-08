import type { Meta, Story } from '@storybook/react';
import React from 'react';

import Typography from '.';
import type { TypographyProps } from './types';

export default {
  component: Typography,
  title: 'General/Typography',
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {};
