export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TodosState = {
  todos: Record<string, Todo[]>;
  addTodo: (todo: Todo) => void;
  deleteTodo: (todoId: Todo['id']) => void;
  toggleTodo: (todoId: Todo['id'], isDone: Todo['isDone']) => void;
  setTodos: (todos: TodosState['todos']) => void;
  setTodoTitle: (todoId: Todo['id'], title: Todo['title']) => void;
  setTodoContent: (todoId: Todo['id'], content: Todo['content']) => void;
};
