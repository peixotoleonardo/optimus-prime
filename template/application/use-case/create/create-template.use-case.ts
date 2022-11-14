import { Injectable } from '@nestjs/common';

import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Create<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/create/create-<%= fileName %>.input';
import { Create<%= className %>Output } from '@opr-api/<%= moduleName %>/application/use-case/create/create-<%= fileName %>.output';

@Injectable()
export class Create<%= className %>UseCase {
  constructor(private readonly repository: I<%= className %>Repository) {}

  async execute(input: Create<%= className %>Input) {
    return Create<%= className %>Output.from(
      await this.repository.save(this.repository.create({ ...input })),
    );
  }
}
