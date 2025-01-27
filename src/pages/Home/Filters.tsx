import { SystemIcon } from '@/components/SystemIcon';
import { Container, TitleWrapper } from './Filters.styles';
import { Typography } from '@/components/Typography';
import { FiltersList } from '@/components/FiltersList';
import { Button } from '@/components/Button';
import { useFilters } from './Filters.hook';

interface List {
  id: string;
  name: string;
}

interface FiltersProps {
  categories: List[];
  authors: List[];
}
export const Filters: React.FC<FiltersProps> = ({ categories, authors }) => {
  const {
    categoriesSelected,
    authorsSelected,
    handleOnToogleSelection,
    handleApplyFilters,
  } = useFilters();

  return (
    <Container>
      <TitleWrapper>
        <SystemIcon type="tune" />
        <Typography variant="heading-3">Filters</Typography>
      </TitleWrapper>

      <FiltersList
        listKey="categories"
        label="Category"
        list={categories}
        selectionList={categoriesSelected}
        handleOnClick={handleOnToogleSelection}
      />
      <FiltersList
        listKey="authors"
        label="Author"
        list={authors}
        selectionList={authorsSelected}
        handleOnClick={handleOnToogleSelection}
      />

      <Button onClick={handleApplyFilters}>Apply filters</Button>
    </Container>
  );
};
