import {
  Header,
  Autocomplete,
  Group,
  Burger,
  Text,
  Drawer,
  CloseButton,
  Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import UserMenu from './components/UserMenu';
import { useStyles } from './NavBar.styles';
import { LinksGroup } from '../Sidebar/components/LinkGroup';
import { sideBarLinkGroup } from '../../utils/constants';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export function NavBar() {
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const links = sideBarLinkGroup.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <>
      <Header height={56} className={classes.header} mb={120}>
        <div className={classes.inner}>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size='sm'
              className={classes.burger}
            />
            <Link href='/'>
              <MantineLogo className={classes.logo_dashboard} size={28} />
            </Link>
            <Text className={classes.logo_dashboard} fw={200} size={18} mt={4}>
              Dashboard
            </Text>
          </Group>

          <Group>
            <Autocomplete
              placeholder='Search'
              icon={<IconSearch size='1rem' stroke={1.5} />}
              data={[
                'React',
                'Angular',
                'Vue',
                'Next.js',
                'Riot.js',
                'Svelte',
                'Blitz.js',
              ]}
            />
          </Group>
          {/* <UserMenu
            image='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
            name='Harriette Spoonlicker'
          /> */}
          <UserButton afterSignOutUrl='/' />
        </div>

        <Drawer
          size='xs'
          opened={opened}
          onClose={close}
          overlayProps={{ opacity: 0.5, blur: 4 }}
          withCloseButton={false}
        >
          <Group position='apart'>
            <Group>
              <MantineLogo size={28} />
              <Text fw={200} size={18} mt={4}>
                Dashboard
              </Text>
            </Group>
            <CloseButton mr={-1} iconSize={18} onClick={close} />
          </Group>
          <Divider my='md' />
          {links}
        </Drawer>
      </Header>
    </>
  );
}
