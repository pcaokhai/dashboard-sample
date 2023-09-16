import { Table, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  table: {
    backgroundColor: '#34aadc',
  },
}));

interface RData {
  stream: string;
  codec: string;
}

interface ETableProps {
  data: RData[];
}

const EmbeddedTable: React.FC<ETableProps> = ({ data }) => {
  const { classes } = useStyles();

  const rows = data.map((row, i) => (
    <tr key={i}>
      <td>{row.stream}</td>
      <td>{row.codec}</td>
    </tr>
  ));
  return (
    <Table className={classes.table}>
      <thead>
        <tr>
          <th>Stream</th>
          <th>Codec</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default EmbeddedTable;
