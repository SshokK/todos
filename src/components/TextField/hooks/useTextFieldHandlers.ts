import type { TextFieldProps } from '../TextField.types.ts';
import type { TextFieldData } from './useTextFieldData.types.ts';
import type { TextFieldHandlers } from './useTextFieldHandlers.types.ts';

import * as lodash from 'lodash';

import { useCallback, useMemo } from 'react';

export const useTextFieldHandlers = ({
  props,
  localActions,
}: {
  props: Pick<
    TextFieldProps,
    'changeCallbackThrottleTime' | 'onChange' | 'value'
  >;
  localActions: TextFieldData['localActions'];
}): TextFieldHandlers => {
  const { onChange } = props;

  const onThrottledChange = useMemo(() => {
    return lodash.throttle(
      (value: string) => {
        onChange?.(value);
      },
      props.changeCallbackThrottleTime ?? 0,
      {
        trailing: true,
      },
    );
  }, [onChange, props.changeCallbackThrottleTime]);

  const handleValueChange: TextFieldHandlers['handleValueChange'] = useCallback(
    (e) => {
      localActions.setValue(e.target.value);

      onThrottledChange(e.target.value);
    },
    [onThrottledChange, localActions],
  );

  const handleValuePropChange: TextFieldHandlers['handleValuePropChange'] =
    useCallback(() => {
      localActions.setValue(props.value ?? '');
    }, [localActions, props.value]);

  return {
    handleValueChange,
    handleValuePropChange,
  };
};
