import * as requestConstants from '../../constants/request.constants.ts';

import queryString from 'query-string';

import * as errorUtils from '../errors';
import * as helpers from './fetch.helpers.ts';

export const fetch = async <T = unknown>(args: {
  url: string;
  method: requestConstants.HTTP_METHODS;
  queryParams?: Record<string, unknown>;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}): Promise<{
  data: T;
  status: number;
}> => {
  const stringifiedQueryParams = queryString.stringify(args.queryParams ?? {});

  const headers = new Headers({
    ...(args.headers ?? {}),
    ...(requestConstants.REQUESTS_WITH_BODY.includes(args.method) && {
      ...requestConstants.DEFAULT_HEADERS_FOR_REQUESTS_WITH_BODY,
    }),
  });

  const response = await window.fetch(
    `${args.url}${
      stringifiedQueryParams.length ? `?${stringifiedQueryParams}` : ''
    }`,
    {
      method: args.method,
      headers: headers,
      body: args.body ? JSON.stringify(args.body) : null,
    },
  );

  const data = (await helpers.getJSON(response)) as T;

  if (!response.ok) {
    throw new errorUtils.FetchError({
      data: data,
      status: response.status,
    });
  }

  return {
    data: data,
    status: response.status,
  };
};
