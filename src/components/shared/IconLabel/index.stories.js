import React from 'react';
import IconLabel from '.';
import Users from '../../icons/Users';

export default {
  title: 'SharedComponents/IconLabel',
  component: IconLabel,
  argTypes: {
    icon: {
      control: { type: 'node' },
    },
  },
};

const Template = (args) => <IconLabel icon={<Users />} {...args} />;

export const Base = Template.bind({});

Base.args = {
  label: 'test label',
};

export const LongLabel = Template.bind({});

LongLabel.args = {
  isEllipsis: true,
  label:
    'Very loooooooooooong labelllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
};
