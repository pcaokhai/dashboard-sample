'use client';

import { useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
} from '@mantine/core';
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons-react';
import { useStyles } from './Table.styles';
import Link from 'next/link';
import TRow from './TRow';

interface RowData {
  name: string;
  country: string;
  email: string;
  gender: string;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position='apart'>
          <Text fw={500} fz='sm'>
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size='0.9rem' stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return data;
  }

  return [...data].sort((a, b) => {
    if (payload.reversed) {
      return b[sortBy].localeCompare(a[sortBy]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });
}

export function TableSort({ data }: TableSortProps) {
  const { classes } = useStyles();
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed }));
  };

  const rows = sortedData.map((row, i) => <TRow {...row} id={i + 1} key={i} />);

  return (
    <ScrollArea>
      <Table
        horizontalSpacing='md'
        verticalSpacing='xs'
        miw={700}
        sx={{ tableLayout: 'fixed' }}
      >
        <thead>
          <tr>
            <Th
              sorted={sortBy === 'name'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('name')}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === 'country'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('country')}
            >
              Country
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === 'gender'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('gender')}
            >
              Gender
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align='center'>
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
