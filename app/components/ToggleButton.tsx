import { Text, Group, UnstyledButton, createStyles, rem } from '@mantine/core';
import { IconCircle, IconCircleCheck } from '@tabler/icons-react';
import React, { useState } from 'react';

const useStyles = createStyles((theme) => ({
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

interface ToggleButtonProps {
  label: string;
  icon: React.FC<any>;
  iconColor: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, icon: Icon, iconColor }) => {
  const [active, setActive] = useState(true);
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton
      onClick={() => setActive((s) => !s)}
      className={cx(classes.button, { [classes.active]: active })}
    >
      <Group>
        {/* <IconInfoCircle size={15} color='#5ac8fa' /> */}
        <Icon size={15} color={iconColor}/>
        <Text>{label}</Text>
        {active ? (
          <IconCircleCheck color='green' size={15} />
        ) : (
          <IconCircle size={15} color='#CDEEFF' />
        )}
      </Group>
    </UnstyledButton>
  );
};

export default ToggleButton;
