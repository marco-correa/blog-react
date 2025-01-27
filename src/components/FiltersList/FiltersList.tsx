import { Typography } from '../Typography';
import { Container, Item, List } from './FiltersList.styles';
import { Colors } from '@/styles/tokens';

interface List {
  id: string;
  name: string;
}

interface FiltersListProps {
  listKey: 'categories' | 'authors';
  label: string;
  list: List[];
  selectionList: { [key: string]: boolean };
  handleOnClick: (
    listKey: 'categories' | 'authors',
    id: string,
    newSelectionState: boolean
  ) => void;
}

export const FiltersList: React.FC<FiltersListProps> = ({
  listKey,
  label,
  list,
  selectionList,
  handleOnClick,
}) => {
  return (
    <Container>
      <Typography>
        <strong>{label}</strong>
      </Typography>

      <List>
        {list.map(({ id, name }) => (
          <Item
            key={id}
            $selected={!!selectionList[id]}
            onClick={() => {
              handleOnClick(listKey, id, !selectionList[id]);
            }}
          >
            <Typography variant="body-small" color={Colors.Inherit}>
              {name}
            </Typography>
          </Item>
        ))}
      </List>
    </Container>
  );
};
