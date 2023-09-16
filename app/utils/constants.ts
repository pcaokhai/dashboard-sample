import {
  IconBrandSnowflake,
  IconAsterisk,
  IconGauge,
  IconLiveView,
  IconShieldLockFilled,
  IconAffiliate,
  IconAlertCircle,
} from '@tabler/icons-react';

export const sideBarLinkGroup = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Streams',
    icon: IconBrandSnowflake,
    link: '/',
  },
  {
    label: 'VOD Encoding',
    icon: IconAsterisk,
    link: '/vodEncoding',
    links: [
      { label: 'Encoding', link: '/vodEncoding/encoding' },
      { label: 'Watch Folder', link: '/' },
      { label: 'Inputs', link: '/' },
    ],
  },
  {
    label: 'Live Encoding',
    icon: IconLiveView,
    link: '/',
    links: [
      { label: 'Encoding', link: '/' },
      { label: 'Configuration', link: '/' },
      { label: 'Inputs', link: '/' },
    ],
  },
  {
    label: 'Security',
    icon: IconShieldLockFilled,
    link: '/',
  },
];

export const cardData = [
  {
    span: 12,
    card: {
      icon: IconAffiliate,
      iconColor: '#f76707',
      title: 'Title 1',
      link: '/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    span: 6,
    card: {
      icon: IconAlertCircle,
      iconColor: '#d63939',
      title: 'Title 2',
      link: '/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    span: 6,
    card: {
      icon: IconAffiliate,
      iconColor: '#d6336c',
      title: 'Title 3',
      link: '/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    span: 6,
    card: {
      icon: IconAffiliate,
      iconColor: '#2fb344',
      title: 'Title 4',
      link: '/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
  },
  {
    span: 6,
    card: {
      icon: IconAffiliate,
      iconColor: '#17a2b8',
      title: 'Title 5',
      link: '/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
  },
];

export const embeddedTableData = [
  {
    stream: 'Video #0',
    codec: 'H264',
  },
  {
    stream: 'Audio #0	',
    codec: 'MP3',
  },
];