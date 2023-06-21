import type * as selectTypes from '../Select.types';
import type * as selectHandlersTypes from './useSelectHandlers.types';

export const useSelectHandlers = ({
  props,
}: {
  props: Pick<selectTypes.SelectProps, 'onChange' | 'options'>;
}): selectHandlersTypes.SelectHandlers => {
  const handleChange: selectHandlersTypes.SelectHandlers['handleChange'] = (
    key,
  ) => {
    const option = props.options.reduce((foundOption, group) => {
      const option = group.options?.find((option) => option.key === key);
      return option ?? foundOption;
    }, null as selectTypes.SelectOption | null);

    if (option) {
      props.onChange?.(key, option);
    }
  };

  return {
    handleChange,
  };
};
