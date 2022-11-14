import { Module } from '@nestjs/common';

import { InfraModule } from '@opr-api/<%= moduleName %>/infra/infra.module';
import { ApplicationModule } from '@opr-api/<%= moduleName %>/application/application.module';

@Module({
  imports: [ApplicationModule, InfraModule],
})
export class <%= className %>Module {}
