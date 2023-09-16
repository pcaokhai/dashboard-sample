'use client';

import { AppShell } from '@mantine/core';
import { NavBar, SideBar } from './index';

interface ShellProps {
  children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <AppShell
      padding='md'
      navbar={<SideBar />}
      header={<NavBar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Shell;
