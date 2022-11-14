import { faker } from '@faker-js/faker';

import { BaseRepositoryMock } from '@app/common/domain/__mocks__/base.repository';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Update<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/update/update-<%= fileName %>.input';
import { Update<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/update/update-<%= fileName %>.use-case';

type UseCaseSUT = {
  usecase: Update<%= className %>UseCase;
  repositoryMock: jest.Mocked<I<%= className %>Repository>;
};

describe('Update<%= className %>UseCase', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const repository = new BaseRepositoryMock();

    sut = {
      repositoryMock: repository,
      usecase: new Update<%= className %>UseCase(repository),
    };
  });

  describe('execute', () => {
    it('given id and Update<%= className %>Input should call "I<%= className %>Repository.update" with it', async () => {
      const id = faker.datatype.uuid();
      const input = {} as Update<%= className %>Input;
      sut.repositoryMock.create.mockReturnValue({} as <%= className %>);

      await sut.usecase.execute(id, input);

      expect(sut.repositoryMock.update).toHaveBeenNthCalledWith(1, id, input);
    });
  });
});
