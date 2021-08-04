import React from 'react';
import IconButton from '.';
import Close from '../../icons/Close';

export default {
  title: 'SharedComponents/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: { type: 'node' },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Base = Template.bind({});

Base.args = {
  icon: <Close />,
};
