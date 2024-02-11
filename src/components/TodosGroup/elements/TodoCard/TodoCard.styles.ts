import classnames from 'classnames';

export const CLASSNAMES = {
  todoCard: classnames('w-full', 'overflow-hidden', 'relative'),

  todoCardIndicatorContainer: classnames(
    'border-solid',
    'border-l',
    'border-l-secondary-400',
    'pl-4',
  ),

  todoCardIndicatorContainerIsToday: classnames('border-l-warning-100'),

  todoCardIndicatorContainerIsDone: classnames('border-l-success-100'),

  todoCardIndicatorContainerIsOverdue: classnames('border-l-error-100'),

  todoTitle: classnames('text-secondary-900'),

  todoDescription: classnames('text-secondary-500'),
};
