import { createMemoStyles, MantineTheme } from '../../theme';

interface KbdStylesProps {
  theme: MantineTheme;
}

export default createMemoStyles({
  kbd: ({ theme }: KbdStylesProps) => ({
    lineHeight: theme.lineHeight,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: [3, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
    }`,
    borderBottom: `3px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
    }`,
  }),
});
