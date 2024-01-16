import type * as apiTypes from './todos.api.types.ts';

import * as requestConstants from '../../../constants/request.constants.ts';
import * as fetch from '../../fetch';
import * as dateUtils from '../../date';

export const fetchTodos: apiTypes.FetchTodos = async () => {
  const response = await fetch.fetch<apiTypes.FetchTodosResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos`,
    method: requestConstants.HTTP_METHODS.GET,
  });

  return response.data;
};

export const fetchTodosCounts: apiTypes.FetchTodosCounts = async () => {
  const response = await fetch.fetch<apiTypes.FetchTodosCountsResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos/count`,
    method: requestConstants.HTTP_METHODS.GET,
    queryParams: {
      currentDate: dateUtils.getToday().toISOString(),
    },
  });

  return response.data;
};

export const createTodo: apiTypes.CreateTodo = async (todo) => {
  const response = await fetch.fetch<apiTypes.CreateTodoResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos`,
    method: requestConstants.HTTP_METHODS.POST,
    body: todo,
  });

  return response.data;
};

export const updateTodo: apiTypes.UpdateTodo = async (id, payload) => {
  const response = await fetch.fetch<apiTypes.UpdateTodoResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos/${id}`,
    method: requestConstants.HTTP_METHODS.PATCH,
    body: payload,
  });

  return response.data;
};

export const deleteTodo: apiTypes.DeleteTodo = async (id) => {
  const response = await fetch.fetch<apiTypes.DeleteTodoResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos/${id}`,
    method: requestConstants.HTTP_METHODS.DELETE,
  });

  return response.data;
};

export const bulkDeleteTodos: apiTypes.BulkDeleteTodos = async (payload) => {
  const response = await fetch.fetch<apiTypes.BulkDeleteTodosResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos`,
    method: requestConstants.HTTP_METHODS.DELETE,
    body: payload,
  });

  return response.data;
};
