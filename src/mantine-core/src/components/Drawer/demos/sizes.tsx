import React, { useState } from 'react';
import { Drawer, Button, Group } from '../../../index';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<number | string>('top');
  const open = (s: typeof size) => {
    setSize(s);
    setOpened(true);
  };

  const controls = (['xs', 'sm', 'md', 'lg', 'xl', 'full', 800, '25%'] as const).map((s) => (
    <Button variant="outline" onClick={() => open(s)} key={s}>
      {typeof s === 'string' ? s : `${s}px`}
    </Button>
  ));

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)} padding="md" size={size}>
        Press escape to close the drawer
      </Drawer>

      <Group position="center">{controls}</Group>
    </>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
