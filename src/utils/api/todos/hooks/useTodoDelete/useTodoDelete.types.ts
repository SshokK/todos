import type * as api from '../../todos.api.ts';

export type TodoDeleteArgs = Parameters<typeof api.deleteTodo>;
