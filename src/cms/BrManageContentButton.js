import React from 'react';
import { TYPE_MANAGE_CONTENT_BUTTON } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page/BrPageContext';
/**
 * The button component that opens for editing a content.
 */
export class BrManageContentButton extends React.Component {
    render() {
        const { context } = this;
        return (context === null || context === void 0 ? void 0 : context.isPreview()) ? React.createElement(BrMeta, { meta: context.getButton(TYPE_MANAGE_CONTENT_BUTTON, this.props) }) : null;
    }
}
BrManageContentButton.contextType = BrPageContext;
//# sourceMappingURL=BrManageContentButton.js.map