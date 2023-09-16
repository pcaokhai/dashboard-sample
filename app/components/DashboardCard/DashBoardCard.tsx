import { Card, Text } from '@mantine/core';
import { useStyles } from './DashboardCard.styles';

interface CardProps {
  icon: React.FC<any>;
  iconColor: string;
  title: string;
  link: string;
  desc: string;
}

export function DashBoardCard({
  icon: Icon,
  iconColor,
  title,
  link,
  desc,
}: CardProps) {
  const { classes, theme } = useStyles();

  const handleClick = () => {
    // TODO
  };

  return (
    <Card
      withBorder
      p='xl'
      radius='md'
      className={classes.card}
      onClick={handleClick}
    >
      <div className={classes.inner}>
        <div>
          <Icon size={50} color={iconColor} />
        </div>
        <div className={classes.desc_title}>
          <Text fz='lg' fw='600'>
            {title}
          </Text>
          <Text fw='200'>{desc}</Text>
        </div>
      </div>
    </Card>
  );
}
