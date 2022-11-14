import { faker } from '@faker-js/faker';

import {
  Get<%= className %>UseCase,
  Search<%= className %>Input,
  Search<%= className %>UseCase,
} from '@opr-api/<%= moduleName %>/application/use-case';
import { Search<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/search-<%= fileName %>.controller';
import { SearchInput } from '@app/common/search.input';

const Get<%= className %>UseCaseMock = Get<%= className %>UseCase as jest.Mock<Get<%= className %>UseCase>;
const Search<%= className %>UseCaseMock = Search<%= className %>UseCase as jest.Mock<Search<%= className %>UseCase>;

type UseCaseSUT = {
  controller: Search<%= className %>Controller;
  get<%= className %>UseCaseMock: jest.Mocked<Get<%= className %>UseCase>;
  search<%= className %>UseCaseMock: jest.Mocked<Search<%= className %>UseCase>;
};

jest.mock('@opr-api/<%= moduleName %>/application/use-case');

describe('Search<%= className %>Controller', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const get<%= className %>UseCaseMock =
      new Get<%= className %>UseCaseMock() as jest.Mocked<Get<%= className %>UseCase>;
    const search<%= className %>UseCaseMock =
      new Search<%= className %>UseCaseMock() as jest.Mocked<Search<%= className %>UseCase>;

    sut = {
      get<%= className %>UseCaseMock,
      search<%= className %>UseCaseMock,
      controller: new Search<%= className %>Controller(
        get<%= className %>UseCaseMock,
        search<%= className %>UseCaseMock,
      ),
    };
  });

  describe('getById', () => {
    it('given id should call "Get<%= className %>UseCase.execute" with it', async () => {
      const id = faker.datatype.uuid();

      await sut.controller.getById(id);

      expect(sut.get<%= className %>UseCaseMock.execute).toHaveBeenNthCalledWith(1, id);
    });
  });

  describe('search', () => {
    it('given SearchInput should call "Search<%= className %>UseCase.execute" with it', async () => {
      const input = {} as SearchInput<Search<%= className %>Input>;

      await sut.controller.search(input);

      expect(sut.search<%= className %>UseCaseMock.execute).toHaveBeenNthCalledWith(
        1,
        input,
      );
    });
  });
});
