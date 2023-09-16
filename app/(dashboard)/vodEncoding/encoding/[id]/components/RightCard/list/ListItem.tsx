import { Progress, Text, createStyles } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import Info from './info';

const useStyles = createStyles((theme) => ({
  listItem: {
    display: 'flex',
    padding: theme.spacing.xs,
    // backgroundColor: theme.colors.blue[1],
  },

  rightChild: {
    marginLeft: theme.spacing.xs,
    width: '100%',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface ListItemProps {
  title: string;
  finishedAt: string;
  ops1?: string[];
  ops2?: string[];
  ops3?: string[];
  ops4?: string[];
  time: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  finishedAt,
  ops1,
  ops2,
  ops3,
  ops4,
  time,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.listItem}>
      <div>
        <IconCircleCheck color='green' />
      </div>
      <div className={classes.rightChild}>
        <div className={classes.inner}>
          <Text fz='sm' fw="bold">{title}</Text>
          <Text fz='md'>
            FINISHED at
            <Text span fz='sm' fw='bold'>
              {` `}
              {finishedAt}
            </Text>
          </Text>
          {ops1 && <Info label={ops1[0]} data={ops1[1]} />}
          {ops2 && <Info label={ops2[0]} data={ops2[1]} />}
          {ops3 && <Info label={ops3[0]} data={ops3[1]} />}
          {ops4 && <Info label={ops4[0]} data={ops4[1]} />}
          <Progress radius='md' size='lg' value={100} mt={20} />
          <Text fz='sm' ta='right'>
            {time}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
