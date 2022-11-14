import { ApiTags } from '@nestjs/swagger';
import { applyDecorators, Controller } from '@nestjs/common';

export const <%= className %>Controller = () =>
  applyDecorators(Controller('<%= varPluralName %>'), ApiTags('<%= className %>'));
