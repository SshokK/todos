export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  date: string;
};

export type FetchTodosPayload = void[];
export type FetchTodosResponse = {
  result: Todo[];
  totalCount: number;
};
export type FetchTodos = (
  ...args: FetchTodosPayload
) => Promise<FetchTodosResponse>;
