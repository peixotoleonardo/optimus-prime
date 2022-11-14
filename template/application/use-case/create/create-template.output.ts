import { Expose } from 'class-transformer';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';

export class Create<%= className %>Output {
  @Expose()
  readonly id: string;

  static from(<%= varName %>: <%= className %>): Create<%= className %>Output {
    return new Create<%= className %>Output(<%= varName %>.id);
  }

  private constructor(id: string) {
    this.id = id;
  }
}
