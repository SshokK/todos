import { useTodosList } from 'utils';

export const useAppCalendarQueries = () => {
  const todosList = useTodosList();

  return {
    todosList,
  };
};
