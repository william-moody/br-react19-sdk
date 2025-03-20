import React from 'react';
import { BrComponentContext } from './BrComponentContext';
import { BrNode } from './BrNode';
/**
 * The brXM component.
 */
export class BrComponent extends React.Component {
    getComponents() {
        const { context, props: { path }, } = this;
        if (!context || Object.keys(context).length === 0) {
            return [];
        }
        if (!path) {
            return context.getChildren();
        }
        const component = context.getComponent(...path.split('/'));
        return component ? [component] : [];
    }
    renderComponents() {
        const { children } = this.props;
        return this.getComponents().map((component, index) => (
        // eslint-disable-next-line react/no-array-index-key
        React.createElement(BrNode, { key: index, component: component }, children)));
    }
    render() {
        return React.createElement(React.Fragment, null, this.renderComponents());
    }
}
BrComponent.contextType = BrComponentContext;
//# sourceMappingURL=BrComponent.js.map