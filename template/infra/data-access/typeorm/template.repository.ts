import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as OrmRepository } from 'typeorm';

import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { TypeOrmRepository } from '@opr-api/common/infra/data-access/typeorm/typeorm.repository';
import { I<%= className %>Repository } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.repository';

@Injectable()
export class <%= className %>Repository
  extends TypeOrmRepository<<%= className %>>
  implements I<%= className %>Repository
{
  @InjectRepository(<%= className %>)
  protected readonly repository: OrmRepository<<%= className %>>;
}
