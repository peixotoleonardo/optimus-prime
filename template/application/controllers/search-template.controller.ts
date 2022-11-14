import { Get, Param, Query, UsePipes } from '@nestjs/common';

import { SearchInput } from '@app/common/search.input';

import { Get<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case';
import { ParseSearchPipe } from '@opr-api/common/pipes/parse-search.pipe';
import { Search<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case/search';
import { <%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/<%= fileName %>.controller';
import { Search<%= className %>Input } from '@opr-api/<%= moduleName %>/application/use-case/search/search-<%= fileName %>.input';

@<%= className %>Controller()
export class Search<%= className %>Controller {
  constructor(
    private readonly get<%= className %>UseCase: Get<%= className %>UseCase,
    private readonly search<%= className %>UseCase: Search<%= className %>UseCase,
  ) {}
  
  /**
   * Get a <%= className %> by id
   */
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.get<%= className %>UseCase.execute(id);
  }

  /**
   * Search <%= pluralize(className) %>
   */
  @Get()
  @UsePipes(new ParseSearchPipe(Search<%= className %>Input))
  search(@Query() search: SearchInput<Search<%= className %>Input>) {
    return this.search<%= className %>UseCase.execute(search);
  }
}
