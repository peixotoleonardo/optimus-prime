import { Injectable } from '@nestjs/common';

import { SearchInput } from '@app/common/search.input';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { Search<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/search/search-<%= fileName %>.input';
import { Search<%= className %>Output } from '@opr-api/<%= moduleName %>/application/use-case/search/search-<%= fileName %>.output';

@Injectable()
export class Search<%= className %>UseCase {
  constructor(private readonly repository: I<%= className %>Repository) {}

  async execute(search: SearchInput<Search<%= className %>Input>) {
    const [<%= varPluralName %>, total] = await this.repository.findMany({
      where: { ...search.q },
      skip: search.offset,
      take: search.limit,
      order: {
        [search.order.field ?? 'createAt']: search.order.direction,
      },
    });

    return Search<%= className %>Output.from(<%= varPluralName %>, total);
  }
}
