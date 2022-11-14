import { faker } from '@faker-js/faker';

import { BaseRepositoryMock } from '@app/common/domain/__mocks__/base.repository';

import { SearchInput } from '@app/common/search.input';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Search<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/search/search-<%= fileName %>.input';
import { Search<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/search/search-<%= fileName %>.use-case';

type UseCaseSUT = {
  usecase: Search<%= className %>UseCase;
  repositoryMock: jest.Mocked<I<%= className %>Repository>;
};

describe('Search<%= className %>UseCase', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const repository = new BaseRepositoryMock();

    sut = {
      repositoryMock: repository,
      usecase: new Search<%= className %>UseCase(repository),
    };
  });

  describe('execute', () => {
    it.each([
      [
        {
          q: {},
          offset: faker.datatype.number(),
          limit: faker.datatype.number(),
          order: { direction: faker.helpers.arrayElement(['ASC', 'DESC']) },
        },
        {
          q: {},
          offset: faker.datatype.number(),
          limit: faker.datatype.number(),
          order: {
            field: 'name',
            direction: faker.helpers.arrayElement(['ASC', 'DESC']),
          },
        },
      ],
    ])(
      'should call "I<%= className %>Repository.findMany"',
      async (search: SearchInput<Search<%= className %>Input>) => {
        sut.repositoryMock.findMany.mockResolvedValue([[], 0]);

        await sut.usecase.execute(search);

        expect(sut.repositoryMock.findMany).toHaveBeenNthCalledWith(1, {
          where: { ...search.q },
          skip: search.offset,
          take: search.limit,
          order: {
            [search.order.field ?? 'createAt']: search.order.direction,
          },
        });
      },
    );
  });
});
