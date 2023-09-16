import {
  Button,
  Group,
  Paper,
  ScrollArea,
  Text,
  createStyles,
  rem,
} from '@mantine/core';
import ListItem from './list/ListItem';

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
}));

const LeftCard = () => {
  const { classes } = useStyles();

  return (
    <Paper shadow='xs' radius='xs' p='sm'>
      <Group className={classes.header} my={5}>
        <Text p={2}>Encoding Subtasks</Text>
      </Group>
      <ScrollArea h={300}>
        <ListItem
          title='Input file download'
          finishedAt='09/15/2023 11:20:46 AM'
          ops1={['File Size', '583.77 MB']}
          ops2={['Download', '1.56 Gbit/s']}
          time='3s'
        />
        <ListItem
          title='Input file analysis'
          finishedAt='09/15/2023 11:20:47 AM'
          time='1s'
        />
        <ListItem
          title='Per-Title analysis'
          finishedAt='09/15/2023 11:20:47 AM'
          time='3m 19s'
        />
        <ListItem
          title='Encoding'
          finishedAt='09/15/2023 11:20:46 AM'
          ops1={['Frames Encoded', '101112']}
          ops2={['Frames per Second', '1348']}
          ops3={['Bytes Encoded', '730.82 MB']}
          ops4={['Realtime Factor', '9.36']}
          time='2m 24s'
        />
      </ScrollArea>
    </Paper>
  );
};

export default LeftCard;
