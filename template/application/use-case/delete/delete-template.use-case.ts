import { Injectable } from '@nestjs/common';

import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';

@Injectable()
export class Delete<%= className %>UseCase {
  constructor(private readonly repository: I<%= className %>Repository) {}

  execute(id: string) {
    return this.repository.delete(id);
  }
}
