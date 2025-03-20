import { TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';
import { BrContainerItemUndefined } from '../cms';
import { BrNodeComponent } from './BrNodeComponent';
export class BrNodeContainerItem extends BrNodeComponent {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
    }
    componentDidMount() {
        var _a;
        (_a = this.props.component) === null || _a === void 0 ? void 0 : _a.on('update', this.onUpdate);
    }
    componentDidUpdate(prevProps) {
        var _a, _b;
        if (this.props.component !== prevProps.component) {
            (_a = prevProps.component) === null || _a === void 0 ? void 0 : _a.off('update', this.onUpdate);
            (_b = this.props.component) === null || _b === void 0 ? void 0 : _b.on('update', this.onUpdate);
        }
    }
    componentWillUnmount() {
        var _a;
        (_a = this.props.component) === null || _a === void 0 ? void 0 : _a.off('update', this.onUpdate);
    }
    getMapping() {
        var _a, _b;
        const type = (_a = this.props.component) === null || _a === void 0 ? void 0 : _a.getType();
        if (type && type in this.context) {
            return this.context[type];
        }
        return ((_b = this.context[TYPE_CONTAINER_ITEM_UNDEFINED]) !== null && _b !== void 0 ? _b : BrContainerItemUndefined);
    }
    onUpdate() {
        this.forceUpdate(() => { var _a; return (_a = this.props.page) === null || _a === void 0 ? void 0 : _a.sync(); });
    }
}
//# sourceMappingURL=BrNodeContainerItem.js.map