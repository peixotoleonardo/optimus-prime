import { Post, Body } from '@nestjs/common';

import {
  Create<%= className %>Input,
  Create<%= className %>UseCase,
} from '@opr-api/<%= moduleName %>/application/use-case';
import { <%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/<%= fileName %>.controller';

@<%= className %>Controller()
export class Create<%= className %>Controller {
  constructor(private readonly usecase: Create<%= className %>UseCase) {}

  /**
   * Create a <%= className %>
   */
  @Post()
  execute(@Body() create<%= className %>Input: Create<%= className %>Input) {
    return this.usecase.execute(create<%= className %>Input);
  }
}
