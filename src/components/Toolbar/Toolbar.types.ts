import type { ComponentProps, ReactNode } from 'react';

import type * as constants from './Toolbar.constants';
import type * as elements from './elements';

export type ToolbarProps = {
  config: ToolbarConfig;
  children?: ReactNode;
  isFullWidth?: boolean;
  className?: string;
};

export type ToolbarConfigBase = {
  key: string;
};

export type ToolbarButtonConfig = ToolbarConfigBase & {
  type: constants.TOOLBAR_ELEMENT_TYPE.BUTTON;
  props: ComponentProps<typeof elements.ToolbarButton>;
};

export type ToolbarActionConfig = ToolbarConfigBase & {
  type: constants.TOOLBAR_ELEMENT_TYPE.ACTION;
  props: ComponentProps<typeof elements.ToolbarAction>;
};

export type ToolbarSeparatorConfig = ToolbarConfigBase & {
  type: constants.TOOLBAR_ELEMENT_TYPE.SEPARATOR;
  props: ComponentProps<typeof elements.ToolbarSeparator>;
};

export type ToolbarTextFieldConfig = ToolbarConfigBase & {
  type: constants.TOOLBAR_ELEMENT_TYPE.TEXTFIELD;
  props: ComponentProps<typeof elements.ToolbarTextField>;
};

export type ToolbarTypographyConfig = ToolbarConfigBase & {
  type: constants.TOOLBAR_ELEMENT_TYPE.TYPOGRAPHY;
  props: ComponentProps<typeof elements.ToolbarTypography>;
};

export type ToolbarSpacingConfig = ToolbarConfigBase & {
  type: constants.TOOLBAR_ELEMENT_TYPE.SPACING;
  props: ComponentProps<typeof elements.ToolbarSpacing>;
};

export type ToolbarConfig = (
  | ToolbarButtonConfig
  | ToolbarActionConfig
  | ToolbarSeparatorConfig
  | ToolbarTextFieldConfig
  | ToolbarTypographyConfig
  | ToolbarSpacingConfig
)[];
