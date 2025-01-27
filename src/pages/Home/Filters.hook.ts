import { filtersActions, useAppDispatch, useAppSelector } from '@/store';
import { useEffect, useState } from 'react';

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const [filtersSelected, setFiltersSelected] = useState<{
    categories: {
      [key: string]: boolean;
    };
    authors: {
      [key: string]: boolean;
    };
  }>({
    categories: {},
    authors: {},
  });

  useEffect(() => {
    setFiltersSelected(filters);
  }, [filters]);

  const handleOnToogleSelection = (
    listKey: 'categories' | 'authors',
    id: string,
    newSelectionState: boolean
  ) => {
    setFiltersSelected((state) => ({
      ...state,
      [listKey]: {
        ...state[listKey],
        [id]: newSelectionState,
      },
    }));
  };

  const handleApplyFilters = () => {
    dispatch(filtersActions.changeFilters(filtersSelected));
  };

  return {
    categoriesSelected: filtersSelected.categories,
    authorsSelected: filtersSelected.authors,
    handleOnToogleSelection,
    handleApplyFilters,
  };
};
