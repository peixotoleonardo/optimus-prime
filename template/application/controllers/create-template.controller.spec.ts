import {
  Create<%= className %>Input,
  Create<%= className %>UseCase,
} from '@opr-api/<%= moduleName %>/application/use-case';
import { Create<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/create-<%= fileName %>.controller';

const Create<%= className %>UseCaseMock = Create<%= className %>UseCase as jest.Mock<Create<%= className %>UseCase>;

type UseCaseSUT = {
  controller: Create<%= className %>Controller;
  usecaseMock: jest.Mocked<Create<%= className %>UseCase>;
};

jest.mock('@opr-api/<%= moduleName %>/application/use-case');

describe('Create<%= className %>Controller', () => {
  let sut: UseCaseSUT;

  beforeEach(() => {
    const usecase =
      new Create<%= className %>UseCaseMock() as jest.Mocked<Create<%= className %>UseCase>;

    sut = {
      usecaseMock: usecase,
      controller: new Create<%= className %>Controller(usecase),
    };
  });

  describe('execute', () => {
    it('given Create<%= className %>Input should call "Create<%= className %>UseCase.execute" with it', async () => {
      const input = {} as Create<%= className %>Input;

      await sut.controller.execute(input);

      expect(sut.usecaseMock.execute).toHaveBeenNthCalledWith(1, input);
    });
  });
});
