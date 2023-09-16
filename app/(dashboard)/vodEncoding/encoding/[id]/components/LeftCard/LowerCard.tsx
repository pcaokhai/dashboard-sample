import ToggleButton from '@/app/components/ToggleButton';
import {
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from '@mantine/core';
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
  IconCircle,
} from '@tabler/icons-react';
import { useState } from 'react';
import ListItem from './ListItem';

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  scrollList: {
    '&:nth-child(even)': {
      backgroundColor: theme.colors.blue[5],
    },
  },

  innerLogo: {
    marginLeft: theme.spacing.xs,
  },

  button: {
    border: '1px solid #CDEEFF',
    borderRadius: rem(5),
    paddingTop: rem(3),
    paddingBottom: rem(3),
    paddingLeft: rem(15),
    paddingRight: rem(15),
  },

  active: {
    border: '1px solid #697586',
  },
}));

const LowerCard = () => {
  const [active, setActive] = useState(false);
  const { classes, cx } = useStyles();

  return (
    <Paper shadow='xs' radius='xs' p='sm' mt={15}>
      <Stack className={classes.header} my={5} spacing='xs'>
        <Text p={2}>Encoding Log</Text>
        <Group position='apart' my={10}>
          <ToggleButton
            label='INFO'
            icon={IconInfoCircle}
            iconColor='#5ac8fa'
          />
          <ToggleButton
            label='WARNING'
            icon={IconAlertTriangle}
            iconColor='#f08916'
          />
          <ToggleButton label='ERROR' icon={IconInfoCircle} iconColor='red' />
        </Group>
      </Stack>
      <ScrollArea h={200}>
        <ListItem
          timestamp='09/15/2023 11:27:00 AM'
          info='Encoding process finished.'
          warning
        />
        <ListItem
          timestamp='09/15/2023 11:27:00 AM'
          info='Encoding process finished.'
        />
        <ListItem
          timestamp='09/15/2023 11:27:00 AM'
          info='Encoding process finished.'
        />
        <ListItem
          timestamp='09/15/2023 11:27:00 AM'
          info='Encoding process finished.'
        />
        <ListItem
          timestamp='09/15/2023 11:27:00 AM'
          info='Encoding process finished.'
        />
        <ListItem
          timestamp='09/15/2023 11:27:00 AM'
          info='Encoding process finished.'
        />
      </ScrollArea>
    </Paper>
  );
};

export default LowerCard;
