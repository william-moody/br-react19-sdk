import React, {JSX} from 'react';
import { BrProps } from '../component';

export function BrContainerUnorderedList({ page, children }: React.PropsWithChildren<BrProps>): JSX.Element {
  return (
    <ul className={page?.isPreview() ? 'hst-container' : undefined}>
      {React.Children.map(children, (child) => (
        <li className={page?.isPreview() ? 'hst-container-item' : undefined}>{child}</li>
      ))}
    </ul>
  );
}