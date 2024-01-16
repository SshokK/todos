import type * as api from '../../todos.api.ts';

export type TodoBulkDeleteArgs = Parameters<typeof api.bulkDeleteTodos>;
