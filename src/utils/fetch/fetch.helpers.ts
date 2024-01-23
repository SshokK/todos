export const getJSON = async <T extends Record<string, unknown>>(
  response: Response,
): Promise<T> => {
  try {
    return await response.json();
  } catch (e) {
    return {} as T;
  }
};
