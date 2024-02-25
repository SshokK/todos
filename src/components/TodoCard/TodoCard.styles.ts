import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('w-full', 'overflow-hidden', 'relative'),

  todoCardIndicatorContainer: classnames(
    'border-solid',
    'border-l',
    'border-l-secondary-400',
    'pl-4',
    'flex',
    'flex-col',
  ),

  todoCardIndicatorContainerIsToday: classnames('border-l-warning-100'),

  todoCardIndicatorContainerIsDone: classnames('border-l-success-100'),

  todoCardIndicatorContainerIsOverdue: classnames('border-l-error-100'),

  todoTitle: classnames('text-secondary-900'),

  todoDescription: classnames('text-secondary-500'),

  todoTitleSkeleton: classnames('w-2/4', 'h-3', 'rounded-sm', 'my-2'),

  todoDescriptionSkeleton: classnames('w-3/4', 'h-3', 'rounded-sm', 'my-2'),
};
