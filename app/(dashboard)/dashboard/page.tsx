'use client';

import { Divider, Grid, Text } from '@mantine/core';
import { DashBoardCard } from '../../components/DashboardCard/DashBoardCard';
import { cardData } from '../../utils/constants';

export default function Home() {
  return (
    <>
      <Text fz='xl'>Title</Text>
      <Divider size='sm' variant='solid' my={20} />
      <Grid>
        {cardData.map((data) => (
          <Grid.Col md={data.span} key={data.card.iconColor}>
            <DashBoardCard {...data.card} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
