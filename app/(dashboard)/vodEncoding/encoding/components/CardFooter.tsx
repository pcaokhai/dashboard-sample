import { Button, Group } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const CardFooter = () => {
  return (
    <Group position='right'>
      <Button disabled size='xs'>
        <IconChevronLeft />
      </Button>
      <Button disabled size='xs'>
        <IconChevronRight />
      </Button>
    </Group>
  );
};

export default CardFooter;
