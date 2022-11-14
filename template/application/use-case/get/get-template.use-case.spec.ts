import { faker } from '@faker-js/faker';
import { NotFoundException } from '@nestjs/common';

import { BaseRepositoryMock } from '@app/common/domain/__mocks__/base.repository';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Get<%= className %>OutPut } from '@opr-api/<%= moduleName %>/application/use-case/get/get-<%= fileName %>.output';
import { Get<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/get/get-<%= fileName %>.use-case';

type UseCaseSUT = {
  usecase: Get<%= className %>UseCase;
  repositoryMock: jest.Mocked<I<%= className %>Repository>;
};

describe('Get<%= className %>UseCase', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const repository = new BaseRepositoryMock();

    sut = {
      repositoryMock: repository,
      usecase: new Get<%= className %>UseCase(repository),
    };
  });

  describe('execute', () => {
    it('given id should throw NotFoundException when <%= varName %> is not found', () => {
      expect(sut.usecase.execute(faker.datatype.uuid())).rejects.toThrow(
        new NotFoundException('<%= className %> not found.'),
      );
    });

    it('given id should return the instance Get<%= className %>OutPut when <%= varName %> is found', () => {
      const id = faker.datatype.uuid();
      sut.repositoryMock.findById.mockResolvedValue({
        id: id,
        name: faker.datatype.string(),
      } as <%= className %>);

      expect(sut.usecase.execute(id)).resolves.toBeInstanceOf(Get<%= className %>OutPut);

      expect(sut.repositoryMock.findById).toHaveBeenNthCalledWith(1, id);
    });
  });
});
