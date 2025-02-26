import React from 'react';
import { Tabs, Tab } from '../Tabs';

const code = `
<Tabs variant="outline">
  <Tab label="First">First tab content</Tab>
  <Tab label="Second">Second tab content</Tab>
  <Tab label="Third">Third tab content</Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs variant="outline">
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}

export const outline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
