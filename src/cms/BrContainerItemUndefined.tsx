import React, {JSX} from 'react';
import { ContainerItem } from '@bloomreach/spa-sdk';
import { BrProps } from '../component';

export function BrContainerItemUndefined({ component }: React.PropsWithChildren<BrProps<ContainerItem>>): JSX.Element {
  return <div>{`Component "${component?.getType()}" is not defined.`}</div>;
}
