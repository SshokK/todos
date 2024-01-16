export type Todo = {
  id: string;
  title: string;
  content: string;
  order: number;
  isDone: boolean;
  date: string;
};

export type FetchTodosPayload = void[];
export type FetchTodosResponse = Todo[];
export type FetchTodos = (
  ...args: FetchTodosPayload
) => Promise<FetchTodosResponse>;

export type FetchTodosCountsPayload = void[];
export type FetchTodosCountsResponse = {
  doneCount: number;
  undoneCount: number;
  overdueCount: number;
  totalCount: number;
};
export type FetchTodosCounts = (
  ...args: FetchTodosCountsPayload
) => Promise<FetchTodosCountsResponse>;

export type CreateTodoPayload = [todo: Omit<Todo, 'isDone' | 'order'>];
export type CreateTodoResponse = Todo;
export type CreateTodo = (
  ...args: CreateTodoPayload
) => Promise<CreateTodoResponse>;

export type UpdateTodoPayload = [
  id: Todo['id'],
  todo: Partial<Omit<Todo, 'id'>>,
];
export type UpdateTodoResponse = Todo;
export type UpdateTodo = (
  ...args: UpdateTodoPayload
) => Promise<UpdateTodoResponse>;

export type DeleteTodoPayload = [id: Todo['id']];
export type DeleteTodoResponse = void;
export type DeleteTodo = (
  ...args: DeleteTodoPayload
) => Promise<DeleteTodoResponse>;

export type BulkDeleteTodosPayload = [
  body: {
    filters: {
      ids?: Todo['id'][];
      isDone?: Todo['isDone'];
      date?: {
        rangeStart?: Todo['date'];
        rangeEnd?: Todo['date'];
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
