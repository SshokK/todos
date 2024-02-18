import * as constants from './TodosCounts.constants.ts';

export type TodosCountsProps = {
  counts: Record<constants.TODOS_COUNT_TYPE, number>;

  isLoading?: boolean;

  classNames?: {
    container?: string;
  };
};
