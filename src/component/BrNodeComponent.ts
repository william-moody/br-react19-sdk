import { Component } from '@bloomreach/spa-sdk';
import React, {PropsWithChildren} from 'react';
import { BrMeta } from '../meta';
import { BrMappingContext } from './BrMappingContext';
import { BrProps } from './BrProps';

export class BrNodeComponent<T extends Component> extends React.Component<React.PropsWithChildren<BrProps<T>>> {
    static contextType = BrMappingContext;
  
    declare context: React.ContextType<typeof BrMappingContext>;
  
    protected getMapping(): React.ComponentType<BrProps> | undefined {
      return this.props.component && (this.context[this.props.component.getName()] as React.ComponentType<BrProps>);
    }
  
    render(): React.ReactNode {
      const mapping = this.getMapping();
      const meta = this.props.component?.getMeta();
  
      const children = mapping ? React.createElement(mapping, this.props) : this.props.children;
  
      return React.createElement(BrMeta, { meta }, children);
    }
  }