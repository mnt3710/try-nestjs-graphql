import { Dield, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum TodoStatus {
  NEW,
  IN_PROGRESS,
  COMPLETE,
}

registerEnumType(TodoStatus, {
  name: 'TodoStatus',
});

@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: string;


}
