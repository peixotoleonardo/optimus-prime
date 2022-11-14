import { FindManyOptions } from 'typeorm';

import { Repository } from '@app/common/domain/base.repository';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';

export abstract class I<%= className %>Repository implements Repository<<%= className %>> {
  abstract save(entity: <%= className %>): Promise<<%= className %>>;
  abstract update(id: string, entity: Partial<<%= className %>>): Promise<void>;
  abstract create(entity: Partial<<%= className %>>): <%= className %>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<<%= className %>>;
  abstract findMany(options: FindManyOptions<<%= className %>>): Promise<[<%= className %>[], number]>;
}
