import * as twMerge from 'tailwind-merge';

import classnames from 'classnames';

export const cn = (...args: classnames.ArgumentArray) => {
  return twMerge.twMerge(classnames(...args));
};
