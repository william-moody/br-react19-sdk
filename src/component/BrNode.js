import React from 'react';
import { isContainer, isContainerItem } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page';
import { BrComponentContext } from './BrComponentContext';
import { BrNodeContainer } from './BrNodeContainer';
import { BrNodeContainerItem } from './BrNodeContainerItem';
import { BrNodeComponent } from './BrNodeComponent';
export class BrNode extends React.Component {
    renderNode() {
        const { children, component } = this.props;
        if (React.Children.count(children)) {
            return React.createElement(BrMeta, { meta: component === null || component === void 0 ? void 0 : component.getMeta() }, children);
        }
        // eslint-disable-next-line react/no-array-index-key
        const childrenList = component === null || component === void 0 ? void 0 : component.getChildren().map((child, index) => React.createElement(BrNode, { key: index, component: child }));
        if (isContainer(component)) {
            return (React.createElement(BrNodeContainer, { component: component, page: this.context }, childrenList));
        }
        if (isContainerItem(component)) {
            return (React.createElement(BrNodeContainerItem, { component: component, page: this.context }, childrenList));
        }
        return (React.createElement(BrNodeComponent, { component: component, page: this.context }, childrenList));
    }
    render() {
        const { component } = this.props;
        return React.createElement(BrComponentContext.Provider, { value: component }, this.renderNode());
    }
}
BrNode.contextType = BrPageContext;
//# sourceMappingURL=BrNode.js.map