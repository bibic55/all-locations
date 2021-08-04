import React from 'react';
import Modal from '.';

export default {
  title: 'SharedComponents/Modal',
  component: Modal,
  argTypes: {
    children: {
      control: { type: 'node' },
    },
  },
};

const Template = (args) => <Modal {...args} />;

export const Base = Template.bind({});

Base.args = {
  children: <div>Test modal content</div>,
  isOpen: true,
};
