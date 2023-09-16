import { Progress, Text, createStyles } from '@mantine/core';
import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  listItem: {
    display: 'flex',
    padding: theme.spacing.xs,
    alignItems: 'center'
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
  timestamp: string;
  info: string;
  warning?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  timestamp,
  info,
  warning = false,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.listItem}>
      <div>
        {!warning ? (
          <IconInfoCircle color='green' />
        ) : (
          <IconAlertTriangle color='#f08916' />
        )}
      </div>
      <div className={classes.rightChild}>
        <div className={classes.inner}>
          <Text fz='sm' fw='bold'>
            {timestamp}
          </Text>
          <Text fz='md'>{info}</Text>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
