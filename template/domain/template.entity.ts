import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@app/common/domain/base.entity';

@Entity()
export class <%= className %> extends BaseEntity {
  @Column()
  name: string;
}
