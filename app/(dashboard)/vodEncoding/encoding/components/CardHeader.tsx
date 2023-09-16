import { Text, Group, Button, Menu } from '@mantine/core';
import {
  IconPlayerStopFilled,
  IconTrashFilled,
  IconFilterFilled,
  IconRefresh,
  IconSettings,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconArrowsLeftRight,
  IconTrash,
} from '@tabler/icons-react';

const CardHeader = () => {
  return (
    <Group position='apart'>
      <Text weight={500}>Encodings</Text>
      <Group>
        <Button disabled leftIcon={<IconPlayerStopFilled />}>
          Stop
        </Button>
        <Button disabled leftIcon={<IconTrashFilled />}>
          Delete
        </Button>

        <Menu shadow='md' width={200}>
          <Menu.Target>
            <Button variant='outline' leftIcon={<IconFilterFilled />}>
              Filter
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
            <Menu.Item icon={<IconMessageCircle size={14} />}>
              Messages
            </Menu.Item>
            <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
            <Menu.Item
              icon={<IconSearch size={14} />}
              rightSection={
                <Text size='xs' color='dimmed'>
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
              Transfer my data
            </Menu.Item>
            <Menu.Item color='red' icon={<IconTrash size={14} />}>
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Button variant='outline' leftIcon={<IconRefresh />}>
          Refresh
        </Button>
      </Group>
    </Group>
  );
};

export default CardHeader;
