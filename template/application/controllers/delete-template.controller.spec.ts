import { faker } from '@faker-js/faker';

import { Delete<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case';
import { Delete<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/delete-<%= fileName %>.controller';

const Delete<%= className %>UseCaseMock = Delete<%= className %>UseCase as jest.Mock<Delete<%= className %>UseCase>;

type UseCaseSUT = {
  controller: Delete<%= className %>Controller;
  usecaseMock: jest.Mocked<Delete<%= className %>UseCase>;
};

jest.mock('@opr-api/<%= moduleName %>/application/use-case');

describe('Delete<%= className %>Controller', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const usecase =
      new Delete<%= className %>UseCaseMock() as jest.Mocked<Delete<%= className %>UseCase>;

    sut = {
      usecaseMock: usecase,
      controller: new Delete<%= className %>Controller(usecase),
    };
  });

  describe('execute', () => {
    it('given id should call "Delete<%= className %>UseCase.execute" with it', async () => {
      const id = faker.datatype.uuid();

      await sut.controller.execute(id);

      expect(sut.usecaseMock.execute).toHaveBeenNthCalledWith(1, id);
    });
  });
});
