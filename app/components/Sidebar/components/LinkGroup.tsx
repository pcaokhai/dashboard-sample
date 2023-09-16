'use client';

import { useState } from 'react';
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { useStyles } from './LinkGroup.styles';
import Link from 'next/link';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  link: string;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const items = (hasLinks ? links : []).map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Link className={classes.link_removeStyles} href={link}>
          <Group position='apart' spacing={0}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon variant='light' size={30}>
                <Icon size='1.1rem' />
              </ThemeIcon>
              <Box ml='md'>{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size='1rem'
                stroke={1.5}
                style={{
                  transform: opened
                    ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                    : 'none',
                }}
              />
            )}
          </Group>
        </Link>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
