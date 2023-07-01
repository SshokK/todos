import type { FC } from 'react';
import type { RichTextEditorProps } from './RichTextEditor.types.ts';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RichTextEditor: FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <ReactQuill value={value} onChange={onChange} placeholder={placeholder} />
  );
};
