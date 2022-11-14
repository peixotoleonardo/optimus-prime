import { Body, Param, Put } from '@nestjs/common';

import {
  Update<%= className %>Input,
  Update<%= className %>UseCase,
} from '@opr-api/<%= moduleName %>/application/use-case';
import { <%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/<%= fileName %>.controller';

@<%= className %>Controller()
export class Update<%= className %>Controller {
  constructor(private readonly usecase: Update<%= className %>UseCase) {}

  /**
   * Update a <%= className %> by id
   */
  @Put(':id')
  execute(@Param('id') id: string, @Body() input: Update<%= className %>Input) {
    return this.usecase.execute(id, input);
  }
}
