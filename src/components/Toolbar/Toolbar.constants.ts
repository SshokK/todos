import * as elements from './elements';

export enum TOOLBAR_ELEMENT_TYPE {
  ACTION = 'action',
  BUTTON = 'button',
  SEPARATOR = 'separator',
  TEXTFIELD = 'textField',
  TYPOGRAPHY = 'typography',
  DATEPICKER = 'datePicker',
  SPACING = 'spacing',
}

export const TOOLBAR_ELEMENTS = {
  [TOOLBAR_ELEMENT_TYPE.BUTTON]: elements.ToolbarButton,
  [TOOLBAR_ELEMENT_TYPE.ACTION]: elements.ToolbarAction,
  [TOOLBAR_ELEMENT_TYPE.SEPARATOR]: elements.ToolbarSeparator,
  [TOOLBAR_ELEMENT_TYPE.TEXTFIELD]: elements.ToolbarTextField,
  [TOOLBAR_ELEMENT_TYPE.TYPOGRAPHY]: elements.ToolbarTypography,
  [TOOLBAR_ELEMENT_TYPE.DATEPICKER]: elements.ToolbarDatePicker,
  [TOOLBAR_ELEMENT_TYPE.SPACING]: elements.ToolbarSpacing,
};
