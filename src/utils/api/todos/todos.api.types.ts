import type * as sortConstants from '../../../constants/sort-constants.ts';

export type TodoFromResponse = {
  id: string;
  title: string;
  content: string;
  order: number;
  isDone: boolean;
  date: string;
};

export type Todo = Omit<TodoFromResponse, 'date'> & {
  date: Date;
};

export type FetchTodosPayload = [
  params?: {
    limit: number;
    offset: number;
    id?: TodoFromResponse['id'][];
    sortField?: keyof Todo;
    sortOrder?: sortConstants.SORT_ORDER;
    dateRangeStart?: TodoFromResponse['date'];
    dateRangeEnd?: TodoFromResponse['date'];
    isDone?: TodoFromResponse['isDone'];
  },
];
export type FetchTodosResponse = TodoFromResponse[];
export type FetchTodosReturn = Todo[];
export type FetchTodos = (
  ...args: FetchTodosPayload
) => Promise<FetchTodosReturn>;

export type FetchTodosCountsAggregationsPayload = void[];
export type FetchTodosCountsAggregationsResponse = {
  doneCount: number;
  undoneCount: number;
  overdueCount: number;
};
export type FetchTodosCountAggregations = (
  ...args: FetchTodosCountsAggregationsPayload
) => Promise<FetchTodosCountsAggregationsResponse>;

export type FetchTodosTotalCountPayload = [
  params: Omit<FetchTodosPayload[0], 'limit' | 'offset'>,
];
export type FetchTodosTotalCountResponse = number;
export type FetchTodosTotalCount = (
  ...args: FetchTodosTotalCountPayload
) => Promise<FetchTodosTotalCountResponse>;

export type CreateTodoPayload = [
  todo: Omit<TodoFromResponse, 'isDone' | 'order'>,
];
export type CreateTodoResponse = TodoFromResponse;
export type CreateTodoReturn = Todo;
export type CreateTodo = (
  ...args: CreateTodoPayload
) => Promise<CreateTodoReturn>;

export type UpdateTodoPayload = [
  id: TodoFromResponse['id'],
  todo: Partial<Omit<TodoFromResponse, 'id'>>,
];
export type UpdateTodoResponse = TodoFromResponse;
export type UpdateTodoReturn = Todo;
export type UpdateTodo = (
  ...args: UpdateTodoPayload
) => Promise<UpdateTodoReturn>;

export type DeleteTodoPayload = [id: TodoFromResponse['id']];
export type DeleteTodoResponse = void;
export type DeleteTodo = (
  ...args: DeleteTodoPayload
) => Promise<DeleteTodoResponse>;

export type BulkDeleteTodosPayload = [
  body: {
    filters: {
      ids?: TodoFromResponse['id'][];
      isDone?: TodoFromResponse['isDone'];
      date?: {
        rangeStart?: TodoFromResponse['date'];
        rangeEnd?: TodoFromResponse['date'];
      };
    };
  },
];
export type BulkDeleteTodosResponse = {
  deletedCount: number;
};
export type BulkDeleteTodos = (
  ...args: BulkDeleteTodosPayload
) => Promise<BulkDeleteTodosResponse>;
