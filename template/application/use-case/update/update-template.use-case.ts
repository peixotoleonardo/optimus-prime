import { Injectable } from '@nestjs/common';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Update<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/update/update-<%= fileName %>.input';

@Injectable()
export class Update<%= className %>UseCase {
  constructor(private readonly repository: I<%= className %>Repository) {}

  async execute(id: string, input: Update<%= className %>Input) {
    await this.repository.update(
      id,
      this.repository.create(input as unknown as <%= className %>),
    );
  }
}
