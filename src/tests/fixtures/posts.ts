import { Post } from '@/types';
import { faker } from '@faker-js/faker';

export const createPostFixture = (): Post => ({
  id: faker.string.uuid(),
  title: faker.lorem.words({ min: 4, max: 6 }),
  content: faker.lorem.sentences({ min: 10, max: 20 }),
  thumbnail_url: faker.image.urlPicsumPhotos(),
  authorId: faker.string.uuid(),
  createdAt: faker.date.anytime().toString(),
  updatedAt: faker.date.anytime().toString(),
  categories: [
    {
      id: faker.string.uuid(),
      name: faker.lorem.words({ min: 1, max: 3 }),
      createdAt: faker.date.anytime().toString(),
      updatedAt: faker.date.anytime().toString(),
      postId: faker.string.uuid(),
    },
    {
      id: faker.string.uuid(),
      name: faker.lorem.words({ min: 1, max: 3 }),
      createdAt: faker.date.anytime().toString(),
      updatedAt: faker.date.anytime().toString(),
      postId: faker.string.uuid(),
    },
  ],
  author: {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    profilePicture: faker.image.urlPicsumPhotos(),
    createdAt: faker.date.anytime().toString(),
    updatedAt: faker.date.anytime().toString(),
  },
});

export const singlePostFixture = {
  ...createPostFixture(),
};

export const postsFixture = [
  { ...createPostFixture() },
  { ...createPostFixture() },
  { ...createPostFixture() },
  { ...createPostFixture() },
  { ...createPostFixture() },
];
