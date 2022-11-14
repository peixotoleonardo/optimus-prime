import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';

export class Get<%= className %>OutPut {
  readonly id: string;
  readonly name: string;

  static from(<%= varName %>: <%= className %>) {
    return new Get<%= className %>OutPut(<%= varName %>.id, <%= varName %>.name);
  }

  private constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
