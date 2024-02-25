import type { ListQueryParams, SortQueryParams } from 'types';

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

export type TodosQueryParamsFilters = {
  id?: TodoFromResponse['id'][];
  title?: TodoFromResponse['title'];
  dateRangeStart?: TodoFromResponse['date'];
  dateRangeEnd?: TodoFromResponse['date'];
  isDone?: TodoFromResponse['isDone'];
};

export type TodoDateRangeFromResponse = {
  dateRangeStart: TodoFromResponse['date'];
  dateRangeEnd: TodoFromResponse['date'];
};

export type TodoCountByDayFromResponse = {
  date: TodoFromResponse['date'];
  count: number;
};

export type TodoDateRange = {
  dateRangeStart: Date;
  dateRangeEnd: Date;
};

export type TodoCountByDay = Omit<TodoCountByDayFromResponse, 'date'> & {
  date: Date;
  count: number;
};
export type FetchTodosPayload = [
  queryParams?: ListQueryParams &
    SortQueryParams<keyof Todo> &
    TodosQueryParamsFilters,
];
export type FetchTodosResponse = TodoFromResponse[];
export type FetchTodosReturn = Todo[];
export type FetchTodos = (
  ...args: FetchTodosPayload
) => Promise<FetchTodosReturn>;

export type FetchTodosCountByStatusPayload = [
  queryParams: TodosQueryParamsFilters & {
    dueDate: string;
  },
];
export type FetchTodosCountByStatusResponse = {
  doneCount: number;
  undoneCount: number;
  overdueCount: number;
};
export type FetchTodosCountByStatus = (
  ...args: FetchTodosCountByStatusPayload
) => Promise<FetchTodosCountByStatusResponse>;

export type FetchTodosCountByDaysPayload = [
  queryParams: ListQueryParams & TodosQueryParamsFilters,
];
export type FetchTodosCountByDaysResponse = TodoCountByDayFromResponse[];
export type FetchTodosCountByDaysReturn = TodoCountByDay[];
export type FetchTodosCountByDays = (
  ...args: FetchTodosCountByDaysPayload
) => Promise<FetchTodosCountByDaysReturn>;

export type FetchTodosTotalCountPayload = [
  queryParams: Omit<FetchTodosPayload[0], 'limit' | 'offset'>,
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
  queryParams: {
    id?: TodoFromResponse['id'][];
    isDone?: TodoFromResponse['isDone'];
    dateRangeStart?: TodoFromResponse['date'];
    dateRangeEnd?: TodoFromResponse['date'];
  },
];
export type BulkDeleteTodosResponse = {
  deletedCount: number;
};
export type BulkDeleteTodos = (
  ...args: BulkDeleteTodosPayload
) => Promise<BulkDeleteTodosResponse>;
