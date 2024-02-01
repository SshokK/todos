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
    id?: TodoFromResponse['id'][];
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
