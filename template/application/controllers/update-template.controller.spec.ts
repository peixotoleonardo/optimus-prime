import { faker } from '@faker-js/faker';

import {
  Update<%= className %>Input,
  Update<%= className %>UseCase,
} from '@opr-api/<%= moduleName %>/application/use-case';
import { Update<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/update-<%= fileName %>.controller';

const Update<%= className %>UseCaseMock = Update<%= className %>UseCase as jest.Mock<Update<%= className %>UseCase>;

type UseCaseSUT = {
  controller: Update<%= className %>Controller;
  usecaseMock: jest.Mocked<Update<%= className %>UseCase>;
};

jest.mock('@opr-api/<%= moduleName %>/application/use-case');

describe('Update<%= className %>Controller', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const usecaseMock =
      new Update<%= className %>UseCaseMock() as jest.Mocked<Update<%= className %>UseCase>;

    sut = {
      usecaseMock,
      controller: new Update<%= className %>Controller(usecaseMock),
    };
  });

  describe('execute', () => {
    it('given id and Update<%= className %>Input should call "Update<%= className %>UseCase.execute" with it', async () => {
      const id = faker.datatype.uuid();
      const input = {} as Update<%= className %>Input;

      await sut.controller.execute(id, input);

      expect(sut.usecaseMock.execute).toHaveBeenNthCalledWith(1, id, input);
    });
  });
});
