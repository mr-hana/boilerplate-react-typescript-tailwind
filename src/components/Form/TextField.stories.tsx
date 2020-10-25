import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField } from 'components/Form/TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: Story<{ value: string }> = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = { value: 'input value' }