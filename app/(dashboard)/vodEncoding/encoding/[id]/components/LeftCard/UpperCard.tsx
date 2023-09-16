import { Button, Grid, Group, Paper, Space, Stack, Text } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import EmbeddedTable from '../EmbeddedTable';

import { embeddedTableData } from '@/app/utils/constants';

const UpperCard = () => {
  return (
    <Paper shadow='xs' radius='xs' p='sm'>
      <Group position='apart'>
        <Text>Input</Text>
        <Button variant='default' size='xs'>
          All Streams <IconArrowNarrowRight />
        </Button>
      </Group>
      <Space h='xs' />
      <Grid>
        <Grid.Col md={6}>
          <Stack>
            <div>
              <Text fw={200} fz={13}>
                Path
              </Text>
              <Text>/tears_of_steel_1080p.mov</Text>
            </div>
            <div>
              <Text fw={200} fz={13}>
                Duration
              </Text>
              <Text>12m 14s 167ms</Text>
            </div>
            <div>
              <Text fw={200} fz={13}>
                Size
              </Text>
              <Text>583.77 MB</Text>
            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col md={6}>
          <EmbeddedTable data={embeddedTableData} />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default UpperCard;
