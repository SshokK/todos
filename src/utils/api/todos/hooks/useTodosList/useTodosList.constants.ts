import type * as api from '../../todos.api.ts';

export const INITIAL_DATA: Awaited<ReturnType<typeof api.fetchTodos>> = [];
