'use client';

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  main: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return <div className={classes.main}>{children}</div>;
};

export default AuthLayout;
