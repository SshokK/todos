import { useContext } from 'react';
import { TodosContext } from '../TodosContext';

export const useTodosContext = () => {
  return useContext(TodosContext);
};
