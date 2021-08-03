import React from 'react';
import Card from '.';

export default {
  component: Card,
  title: 'SharedComponents/Card',
};

export const Base = () => (
  <Card>
    <div>Test card content</div>
  </Card>
);
