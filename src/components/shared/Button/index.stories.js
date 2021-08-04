import React from 'react';
import Button from '.';

export default {
  title: 'SharedComponents/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  label: 'test label',
};
