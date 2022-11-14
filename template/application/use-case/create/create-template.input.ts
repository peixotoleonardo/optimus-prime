import { Expose } from 'class-transformer';

export class Create<%= className %>Input {
  @Expose()
  name: string;
}
