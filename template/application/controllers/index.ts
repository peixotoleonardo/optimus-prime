import { Update<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/update-<%= fileName %>.controller';
import { Create<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/create-<%= fileName %>.controller';
import { Delete<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/delete-<%= fileName %>.controller';
import { Search<%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/search-<%= fileName %>.controller';

export const controllers = [
  Update<%= className %>Controller,
  Create<%= className %>Controller,
  Delete<%= className %>Controller,
  Search<%= className %>Controller,
];
