import { faker } from '@faker-js/faker';

import { BaseRepositoryMock } from '@app/common/domain/__mocks__/base.repository';

import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Delete<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/delete/delete-<%= fileName %>.use-case';

type UseCaseSUT = {
  usecase: Delete<%= className %>UseCase;
  repositoryMock: jest.Mocked<I<%= className %>Repository>;
};

describe('Delete<%= className %>UseCase', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const repository = new BaseRepositoryMock();

    sut = {
      repositoryMock: repository,
      usecase: new Delete<%= className %>UseCase(repository),
    };
  });

  describe('execute', () => {
    it('given id should call "I<%= className %>Repository.delete" with it', async () => {
      const id = faker.datatype.uuid();

      await sut.usecase.execute(id);

      expect(sut.repositoryMock.delete).toHaveBeenNthCalledWith(1, id);
    });
  });
});
