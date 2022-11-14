import { faker } from '@faker-js/faker';

import { BaseRepositoryMock } from '@app/common/domain/__mocks__/base.repository';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Create<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/create/create-<%= fileName %>.input';
import { Create<%= className %>Output } from '@opr-api/<%= moduleName %>/application/use-case/create/create-<%= fileName %>.output';
import { Create<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/create/create-<%= fileName %>.use-case';

type UseCaseSUT = {
  usecase: Create<%= className %>UseCase;
  repositoryMock: jest.Mocked<I<%= className %>Repository>;
};

describe('Create<%= className %>UseCase', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const repository = new BaseRepositoryMock();

    sut = {
      repositoryMock: repository,
      usecase: new Create<%= className %>UseCase(repository),
    };
  });

  describe('execute', () => {
    it('should return an instance of Create<%= className %>Output', () => {
      const input = {} as Create<%= className %>Input;
      const <%= varName %>Expected = { id: faker.datatype.uuid() } as <%= className %>;
      sut.repositoryMock.save.mockResolvedValue(<%= varName %>Expected);
      sut.repositoryMock.create.mockReturnValue(<%= varName %>Expected);

      expect(sut.usecase.execute(input)).resolves.toBeInstanceOf(
        Create<%= className %>Output,
      );

      expect(sut.repositoryMock.create).toHaveBeenNthCalledWith(1, input);
      expect(sut.repositoryMock.save).toHaveBeenNthCalledWith(1, <%= varName %>Expected);
    });
  });
});
