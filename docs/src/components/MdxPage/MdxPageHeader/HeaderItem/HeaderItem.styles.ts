import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    item: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 20,

      '& + &': {
        marginTop: theme.spacing.xs,
      },
    },

    label: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      width: 100,
      height: 20,
      lineHeight: '20px',

      '@media (max-width: 500px)': {
        display: 'none',
      },
    },
  }),
  { theming }
);
