import type * as apiTypes from './todos.api.types.ts';

import * as requestConstants from '../../../constants/request.constants.ts';
import * as fetch from '../../fetch';
import * as dateUtils from '../../date';
import * as apiHelpers from './todos.api.helpers.ts';

export const fetchTodos: apiTypes.FetchTodos = async (queryParams) => {
  const response = await fetch.fetch<apiTypes.FetchTodosResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos`,
    method: requestConstants.HTTP_METHODS.GET,
    queryParams: queryParams,
  });

  return apiHelpers.normalizeTodos(response.data);
};

export const fetchTodosCountAggregations: apiTypes.FetchTodosCountAggregations =
  async () => {
    const response =
      await fetch.fetch<apiTypes.FetchTodosCountsAggregationsResponse>({
        url: `${import.meta.env.VITE_API_URL}/v1/todos/count-aggregations`,
        method: requestConstants.HTTP_METHODS.GET,
        queryParams: {
          currentDate: dateUtils.getToday().toISOString(),
        },
      });

    return response.data;
  };

export const fetchTodosTotalCount: apiTypes.FetchTodosTotalCount = async (
  params,
) => {
  const response = await fetch.fetch<apiTypes.FetchTodosTotalCountResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos/count`,
    method: requestConstants.HTTP_METHODS.GET,
    queryParams: params,
  });

  return response.data;
};

export const createTodo: apiTypes.CreateTodo = async (todo) => {
  const response = await fetch.fetch<apiTypes.CreateTodoResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos`,
    method: requestConstants.HTTP_METHODS.POST,
    body: todo,
  });

  return apiHelpers.normalizeTodos([response.data])[0];
};

export const updateTodo: apiTypes.UpdateTodo = async (id, payload) => {
  const response = await fetch.fetch<apiTypes.UpdateTodoResponse>({
    url: `${import.meta.env.VITE_API_URL}/v1/todos/${id}`,
    method: requestConstants.HTTP_METHODS.PATCH,
    body: payload,
  });

  return apiHelpers.normalizeTodos([response.data])[0];
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
