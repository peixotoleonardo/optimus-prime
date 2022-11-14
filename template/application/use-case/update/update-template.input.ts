import { Expose } from 'class-transformer';

export class Update<%= className %>Input {
  @Expose()
  readonly name: string;
}
