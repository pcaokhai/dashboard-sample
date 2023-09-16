'use client';

import { Card } from '@mantine/core';
import React from 'react';
import attr from '../../../table-data.json';
import { TableSort } from './components/Table/Table';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';

const Encoding = () => {
  return (
    <>
      <Card shadow='sm' padding='lg' radius='md' withBorder>
        <Card.Section inheritPadding py='xs'>
          <CardHeader />
        </Card.Section>
        <Card.Section my={20}>
          <TableSort data={attr.props.data} />
        </Card.Section>
        <Card.Section inheritPadding py='xs'>
          <CardFooter />
        </Card.Section>
      </Card>
    </>
  );
};

export default Encoding;
