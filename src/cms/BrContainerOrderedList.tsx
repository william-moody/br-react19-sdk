import React, {JSX} from 'react';
import { BrProps } from '../component';

export function BrContainerOrderedList({ page, children }: React.PropsWithChildren<BrProps>): JSX.Element {
  return (
    <ol className={page?.isPreview() ? 'hst-container' : undefined}>
      {React.Children.map(children, (child) => (
        <li className={page?.isPreview() ? 'hst-container-item' : undefined}>{child}</li>
      ))}
    </ol>
  );
}