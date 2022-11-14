import { Delete, Param } from '@nestjs/common';

import { Delete<%= className %>UseCase } from '@opr-api/<%= moduleName %>/application/use-case';
import { <%= className %>Controller } from '@opr-api/<%= moduleName %>/application/controllers/<%= fileName %>.controller';

@<%= className %>Controller()
export class Delete<%= className %>Controller {
  constructor(private readonly usecase: Delete<%= className %>UseCase) {}

  /**
   * Delete a <%= className %>
   */
  @Delete(':id')
  execute(@Param('id') id: string) {
    return this.usecase.execute(id);
  }
}
