import type * as react from 'react';

export enum TYPOGRAPHY_SIZE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = '2xl',
}

export enum TYPOGRAPHY_TYPE {
  TITLE_1 = 'title1',
  TITLE_2 = 'title2',
  SUBTITLE = 'subtitle',
  CAPTION = 'caption',
  BODY = 'body',
  LINK = 'link',
}

export const TYPOGRAPHY_ELEMENTS: Record<TYPOGRAPHY_TYPE, react.FC> = {
  [TYPOGRAPHY_TYPE.TITLE_1]: (
    props: react.DetailedHTMLProps<
      react.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h1 {...props} />,
  [TYPOGRAPHY_TYPE.TITLE_2]: (
    props: react.DetailedHTMLProps<
      react.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h2 {...props} />,
  [TYPOGRAPHY_TYPE.SUBTITLE]: (
    props: react.DetailedHTMLProps<
      react.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => <h4 {...props} />,
  [TYPOGRAPHY_TYPE.BODY]: (
    props: react.DetailedHTMLProps<
      react.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => <p {...props} />,
  [TYPOGRAPHY_TYPE.CAPTION]: (
    props: react.DetailedHTMLProps<
      react.HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
  ) => <span {...props} />,
  [TYPOGRAPHY_TYPE.LINK]: (
    props: react.DetailedHTMLProps<
      react.HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
  ) => <a target="_blank" rel="noopener" {...props} />,
};
