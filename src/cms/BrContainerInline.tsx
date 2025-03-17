import React, {JSX} from 'react';
import { BrProps } from '../component';

export function BrContainerInline(props: React.PropsWithChildren<BrProps>): JSX.Element {
  const { page, children } = props;

  return (
    <div className={page?.isPreview() ? 'hst-container' : undefined}>
      {React.Children.map(children, (child) => (
        <span className={page?.isPreview() ? 'hst-container-item' : undefined}>{child}</span>
      ))}
    </div>
  );
}