import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames(
    'flex',
    'items-center',
    'w-full',
    'justify-center',
    'gap-4',
  ),

  content: classnames(
    'flex',
    'p-2',
    'gap-4',
    'items-center',
    'flex-1',
    'h-12',
    'relative',
  ),
  actions: classnames('flex', 'gap-2'),

  stateToggleButtonCompleted: classnames('text-success-100'),

  stateToggleButtonOverdue: classnames('text-error'),
};
