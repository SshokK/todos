import type { AlertProps } from './Alert.types';

import * as react from 'react';
import * as constants from './Alert.constants';
import * as styles from './Alert.styles.ts';
import * as icons from '../Icons';
import * as reactToast from '@radix-ui/react-toast';

import { Typography, TYPOGRAPHY_TYPE } from '../Typography';

import classnames from 'classnames';

import { useAlertHandlers } from './hooks';

import { useEffect } from 'react';

import './styles.css';

const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <reactToast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
      <reactToast.Title className="ToastTitle">
        Scheduled: Catch up
      </reactToast.Title>
      <reactToast.Description asChild>
        <time
          className="ToastDescription"
          dateTime={eventDateRef.current.toISOString()}
        >
          {prettyDate(eventDateRef.current)}
        </time>
      </reactToast.Description>
      <reactToast.Action
        className="ToastAction"
        asChild
        altText="Goto schedule to undo"
      >
        <button className="Button small green">Undo</button>
      </reactToast.Action>
    </reactToast.Root>
  );
};

export const Alert = react.forwardRef<HTMLDivElement, AlertProps>(
  (
    { type, title, message, classNames, onClose, isClosable, children },
    ref,
  ) => {
    const handlers = useAlertHandlers({
      props: {
        onClose,
      },
    });

    return (
      <div
        ref={ref}
        className={classnames(
          styles.CLASSNAMES.alert,
          classNames?.container,
          styles.CLASSNAMES.alertType[type ?? constants.ALERT_TYPES.INFO],
        )}
      >
        <div className={classnames(styles.CLASSNAMES.contentWrapper)}>
          <div className={`BB-alert__body`}>
            {title && (
              <Typography
                type={TYPOGRAPHY_TYPE.TITLE_2}
                className="BB-alert__title"
              >
                {title}
              </Typography>
            )}
            <Typography type={TYPOGRAPHY_TYPE.CAPTION}>{message}</Typography>
          </div>
          {children}
        </div>
        {isClosable && (
          <icons.IconClose
            className={`BB-alert__close-icon`}
            onClick={handlers.handleClose}
          />
        )}
      </div>
    );
  },
);

Alert.defaultProps = {
  type: constants.ALERT_TYPES.INFO,
  title: undefined,
  message: '',
  classNames: {},
  isClosable: false,
  children: null,
};
