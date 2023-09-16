import { Group, Text } from '@mantine/core';
import React from 'react';

interface InfoProps {
  label: string;
  data: string;
}

const Info: React.FC<InfoProps> = ({ label, data }) => {
  return (
    <Group position='apart'>
      <Text fz='md'>{label}</Text>
      <Text fz='md' fw='bold'>
        {data}
      </Text>
    </Group>
  );
};

export default Info;
