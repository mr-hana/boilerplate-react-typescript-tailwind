import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = args => <Button>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = { children: 'button' }