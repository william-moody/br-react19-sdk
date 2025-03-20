import { TYPE_CONTAINER_INLINE, TYPE_CONTAINER_NO_MARKUP, TYPE_CONTAINER_ORDERED_LIST, TYPE_CONTAINER_UNORDERED_LIST, } from '@bloomreach/spa-sdk';
import { BrNodeComponent } from './BrNodeComponent';
import { BrContainerBox, BrContainerInline, BrContainerNoMarkup, BrContainerOrderedList, BrContainerUnorderedList, } from '../cms';
export class BrNodeContainer extends BrNodeComponent {
    getMapping() {
        var _a;
        const type = (_a = this.props.component) === null || _a === void 0 ? void 0 : _a.getType();
        if (type && type in this.context) {
            return this.context[type];
        }
        switch (type) {
            case TYPE_CONTAINER_INLINE:
                return BrContainerInline;
            case TYPE_CONTAINER_NO_MARKUP:
                return BrContainerNoMarkup;
            case TYPE_CONTAINER_ORDERED_LIST:
                return BrContainerOrderedList;
            case TYPE_CONTAINER_UNORDERED_LIST:
                return BrContainerUnorderedList;
            default:
                return BrContainerBox;
        }
    }
}
//# sourceMappingURL=BrNodeContainer.js.map