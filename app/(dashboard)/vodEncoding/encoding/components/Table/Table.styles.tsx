import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },

  links: {
    ontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.blue[5],

    '&:hover': {
      color: theme.colors.blue[7],
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
}));
