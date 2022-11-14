import { <%= className %> } from '@opr-api/<%= moduleName %>/domain/<%= fileName %>.entity';
import { <%= className %>Output } from '@opr-api/<%= moduleName %>/application/use-case/search/<%= fileName %>.output';

export class Search<%= className %>Output {
  readonly count: number;

  readonly <%= varPluralName %>: <%= className %>Output[];

  static from(<%= varPluralName %>: <%= className %>[], count: number) {
    return new Search<%= className %>Output(<%= varPluralName %>, count);
  }

  constructor(<%= varPluralName %>: <%= className %>[], count: number) {
    this.count = count;

    this.<%= varPluralName %> = <%= varPluralName %>.map((<%= varName %>) => new <%= className %>Output(<%= varName %>.id, <%= varName %>.name));
  }
}
