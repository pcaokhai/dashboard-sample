"use client"

import {
  Menu,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useStyles } from './UserMenu.styles';

interface UserMenuProps {
  name: string;
  image: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ name, image }) => {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Menu
      width={260}
      position='bottom-end'
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
        >
          <Group spacing={7}>
            <Avatar src={image} alt={name} radius='xl' size={20} />
            <Text className={classes.name} weight={500} size='sm' sx={{ lineHeight: 1 }} mr={3}>
              {name}
            </Text>
            <IconChevronDown size={rem(12)} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      {/* dropdown */}
      <Menu.Dropdown>
        <Menu.Item
          icon={
            <IconHeart size='0.9rem' color={theme.colors.red[6]} stroke={1.5} />
          }
        >
          Liked posts
        </Menu.Item>
        <Menu.Item
          icon={
            <IconStar
              size='0.9rem'
              color={theme.colors.yellow[6]}
              stroke={1.5}
            />
          }
        >
          Saved posts
        </Menu.Item>
        <Menu.Item
          icon={
            <IconMessage
              size='0.9rem'
              color={theme.colors.blue[6]}
              stroke={1.5}
            />
          }
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size='0.9rem' stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Item icon={<IconSwitchHorizontal size='0.9rem' stroke={1.5} />}>
          Change account
        </Menu.Item>
        <Menu.Item icon={<IconLogout size='0.9rem' stroke={1.5} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
