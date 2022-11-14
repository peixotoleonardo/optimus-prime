import { Expose } from 'class-transformer';

export class Search<%= className %>Input {
  @Expose()
  readonly name: string;
}
