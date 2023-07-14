import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('flex', 'flex-col', 'gap-8', 'flex-1'),

  searchInput: classnames('w-full'),

  todoCard: classnames('w-full'),

  todoTitle: classnames('text-secondary-900'),

  todoDescription: classnames('text-secondary-500'),

  separator: classnames('w-full'),

  upcomingTodosContainer: classnames(
    'flex-1',
    'flex',
    'flex-col',
    'items-center',
    'gap-4',
    'relative',
  ),

  upcomingTodoGroupsContainer: classnames(
    'flex',
    'flex-1',
    'flex-col',
    'items-center',
    'pt-12',
  ),

  upcomingTodosDate: classnames('text-secondary-800'),

  upcomingTodosList: classnames('flex', 'flex-col', 'gap-1'),

  upcomingTodosListItem: classnames('bg-secondary-100', 'p-4'),
};
