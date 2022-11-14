import { Injectable, NotFoundException } from '@nestjs/common';

import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Get<%= className %>OutPut } from '@opr-api/<%= moduleName %>/application/use-case/get/get-<%= fileName %>.output';

@Injectable()
export class Get<%= className %>UseCase {
  constructor(private readonly repository: I<%= className %>Repository) {}

  async execute(id: string) {
    const <%= varName %> = await this.repository.findById(id);

    if (!<%= varName %>) {
      throw new NotFoundException('<%= className %> not found.');
    }

    return Get<%= className %>OutPut.from(<%= varName %>);
  }
}
