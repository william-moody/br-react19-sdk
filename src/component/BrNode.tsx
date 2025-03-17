import React, {PropsWithChildren, ContextType, ReactNode, Children, JSX} from 'react';
import { isContainer, isContainerItem, Component } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page';
import { BrComponentContext } from './BrComponentContext';
import { BrNodeContainer } from './BrNodeContainer';
import { BrNodeContainerItem } from './BrNodeContainerItem';
import { BrNodeComponent } from './BrNodeComponent';

interface BrNodeProps {
    component?: Component;
  }
  
  export class BrNode extends React.Component<React.PropsWithChildren<BrNodeProps>> {
    static contextType = BrPageContext;
  
    context: React.ContextType<typeof BrPageContext>;
  
    private renderNode(): JSX.Element | React.ReactNode {
      const { children, component } = this.props;
  
      if (React.Children.count(children)) {
        return <BrMeta meta={component?.getMeta()}>{children}</BrMeta>;
      }
  
      // eslint-disable-next-line react/no-array-index-key
      const childrenList = component?.getChildren().map((child, index) => <BrNode key={index} component={child} />);
  
      if (isContainer(component)) {
        return (
          <BrNodeContainer component={component} page={this.context!}>
            {childrenList}
          </BrNodeContainer>
        );
      }
  
      if (isContainerItem(component)) {
        return (
          <BrNodeContainerItem component={component} page={this.context!}>
            {childrenList}
          </BrNodeContainerItem>
        );
      }
  
      return (
        <BrNodeComponent component={component} page={this.context!}>
          {childrenList}
        </BrNodeComponent>
      );
    }
  
    render(): JSX.Element {
      const { component } = this.props;
  
      return <BrComponentContext.Provider value={component}>{this.renderNode()}</BrComponentContext.Provider>;
    }
  }