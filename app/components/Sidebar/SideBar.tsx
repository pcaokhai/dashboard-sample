import {
  Navbar,
  ScrollArea,
} from '@mantine/core';
import { LinksGroup } from './components/LinkGroup';
import { useStyles } from './SideBar.styles';
import {sideBarLinkGroup} from '../../utils/constants'

export function SideBar(){
  const { classes } = useStyles();
  const links = sideBarLinkGroup.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar height={800} width={{ sm: 300 }} p='md' className={classes.navbar}>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

    </Navbar>
  );
}
