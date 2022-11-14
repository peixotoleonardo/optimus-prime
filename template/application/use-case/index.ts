import { Create<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/create';
import { Delete<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/delete';
import { Get<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/get';
import { Search<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/search';
import { Update<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/update';

export * from '@opr-api/<%= moduleName %>/application/use-case/create';
export * from '@opr-api/<%= moduleName %>/application/use-case/get';
export * from '@opr-api/<%= moduleName %>/application/use-case/update';
export * from '@opr-api/<%= moduleName %>/application/use-case/delete';
export * from '@opr-api/<%= moduleName %>/application/use-case/search';

export const UseCaseProviders = [
  Create<%= className %>UseCase,
  Update<%= className %>UseCase,
  Get<%= className %>UseCase,
  Delete<%= className %>UseCase,
  Search<%= className %>UseCase,
];
