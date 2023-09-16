import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '&:hover': {
      boxShadow: theme.shadows.md,
      cursor: 'pointer',
    },
  },

  inner: {
    display: 'flex',
    alignItems: 'center',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  desc_title: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing.md,

    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
