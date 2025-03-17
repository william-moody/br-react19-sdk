import React, {JSX} from 'react';
import { BrProps } from '../component';

export function BrContainerNoMarkup({ children }: React.PropsWithChildren<BrProps>): JSX.Element {
  return <>{children}</>;
}