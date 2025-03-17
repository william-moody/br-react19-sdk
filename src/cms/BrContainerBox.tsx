import { BrProps } from '../component';
import React, {JSX} from 'react';

export function BrContainerBox({ page, children }: React.PropsWithChildren<BrProps>): JSX.Element {
    return (
      <div className={page?.isPreview() ? 'hst-container' : undefined}>
        {React.Children.map(children, (child) => (
          <div className={page?.isPreview() ? 'hst-container-item' : undefined}>{child}</div>
        ))}
      </div>
    );
}