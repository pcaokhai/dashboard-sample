import { useRouter } from 'next/navigation';
import { useStyles } from './Table.styles';
import { useCallback } from 'react';

interface TRowProps {
  id: number;
  name: string;
  country: string;
  email: string;
  gender: string;
}
const TRow: React.FC<TRowProps> = ({ id, name, country, email, gender }) => {
  const { classes } = useStyles();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/vodEncoding/encoding/${id}`);
  }, [router, id]);

  return (
    <tr key={id} onClick={handleClick}>
      <td className={classes.links}>{name}</td>
      <td>{country}</td>

      <td>{email}</td>
      <td>{gender}</td>
    </tr>
  );
};

export default TRow;
