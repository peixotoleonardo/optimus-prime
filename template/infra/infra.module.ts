import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';
import { <%= className %>Repository } from '@opr-api/<%= moduleName %>/infra/data-access/typeorm/<%= fileName %>.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([<%= className %>])],
  providers: [
    {
      provide: I<%= className %>Repository,
      useClass: <%= className %>Repository,
    },
  ],
  exports: [I<%= className %>Repository],
})
export class InfraModule {}
