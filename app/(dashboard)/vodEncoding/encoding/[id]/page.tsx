'use client';

import { Grid, Paper, Space, Tabs, Title, rem } from '@mantine/core';
import UpperCard from './components/LeftCard/UpperCard';
import RightCard from './components/RightCard/RightCard';
import LowerCard from './components/LeftCard/LowerCard';
import LeftCard from './components/LeftCard/LeftCard';

interface IParams {
  id: number;
}

const EncodingDetails = ({ params }: { params: IParams }) => {
  return (
    <Tabs defaultValue='status'>
      <Tabs.List>
        <Tabs.Tab value='status'>Status</Tabs.Tab>
        <Tabs.Tab value='streams'>Streams</Tabs.Tab>
        <Tabs.Tab value='manfests'>Manifests</Tabs.Tab>
        <Tabs.Tab value='notifications'>Notifications</Tabs.Tab>
        <Tabs.Tab value='billdetails'>Bill Details</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='status'>
        <Grid mt={10} gutter='xs'>
          <Grid.Col md={6}>
            <LeftCard />
          </Grid.Col>
          <Grid.Col md={6}>
            <RightCard />
          </Grid.Col>
        </Grid>
      </Tabs.Panel>

      <Tabs.Panel value='streams' pt='xs'>
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value='manfests' pt='xs'>
        Settings tab content
      </Tabs.Panel>
      <Tabs.Panel value='notifications' pt='xs'>
        Settings tab content
      </Tabs.Panel>
      <Tabs.Panel value='billdetails' pt='xs'>
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
};

export default EncodingDetails;
