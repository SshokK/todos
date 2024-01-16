import type * as api from '../../todos.api.ts';

export type TodoCreateArgs = Parameters<typeof api.createTodo>;
