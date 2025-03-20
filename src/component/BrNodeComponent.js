import React from 'react';
import { BrMeta } from '../meta';
import { BrMappingContext } from './BrMappingContext';
export class BrNodeComponent extends React.Component {
    getMapping() {
        return this.props.component && this.context[this.props.component.getName()];
    }
    render() {
        var _a;
        const mapping = this.getMapping();
        const meta = (_a = this.props.component) === null || _a === void 0 ? void 0 : _a.getMeta();
        const children = mapping ? React.createElement(mapping, this.props) : this.props.children;
        return React.createElement(BrMeta, { meta }, children);
    }
}
BrNodeComponent.contextType = BrMappingContext;
//# sourceMappingURL=BrNodeComponent.js.map