import { Module } from '@nestjs/common';

import { controllers } from '@opr-api/<%= moduleName %>/application/controllers';
import { UseCaseProviders } from '@opr-api/<%= moduleName %>/application/use-case';

@Module({
  controllers,
  providers: [...UseCaseProviders],
})
export class ApplicationModule {}
