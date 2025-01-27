import { ApiEndpoints } from '@/services';
import { getAuthors } from '@/services/api/authors';
import { getCategories } from '@/services/api/categories';
import { getPosts } from '@/services/api/posts';
import { useAppSelector } from '@/store';
import { Author, Category } from '@/types';
import { useQuery } from '@tanstack/react-query';

const buildFilterList = (list: Author[] | Category[] | undefined) => {
  if (!list) {
    return [];
  }

  return list
    .map(({ id, name }) => ({ id, name }))
    .sort(({ name: nameA }, { name: nameB }) =>
      nameA.toUpperCase().localeCompare(nameB.toUpperCase())
    );
};

const hasFilter = (filter: { [key: string]: boolean }) => {
  const list = Object.keys(filter).map((key) => filter[key]);

  return list.some((item) => item);
};

export const useHomePage = () => {
  const { data: posts, isPending: isPostsPending } = useQuery({
    queryKey: [ApiEndpoints.Posts],
    queryFn: getPosts,
  });

  const { data: categories, isPending: isCategoriesPending } = useQuery({
    queryKey: [ApiEndpoints.Categories],
    queryFn: getCategories,
  });

  const { data: authors, isPending: isAuthorsPending } = useQuery({
    queryKey: [ApiEndpoints.Authors],
    queryFn: getAuthors,
  });

  const filters = useAppSelector((state) => state.filters);

  let postsFiltered = posts;
  if (hasFilter(filters.authors)) {
    postsFiltered = posts?.filter((post) => filters.authors[post.authorId]);
  }

  if (hasFilter(filters.categories)) {
    postsFiltered = postsFiltered?.filter((post) =>
      post.categories.some((category) => filters.categories[category.id])
    );
  }

  return {
    categories: buildFilterList(categories),
    authors: buildFilterList(authors),
    posts: postsFiltered || [],
    isPending: isPostsPending || isCategoriesPending || isAuthorsPending,
  };
};
