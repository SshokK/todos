import type * as api from '../../todos.api.ts';

export type TodoUpdateArgs = Parameters<typeof api.updateTodo>;
