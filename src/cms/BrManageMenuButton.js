import React from 'react';
import { TYPE_MANAGE_MENU_BUTTON } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page/BrPageContext';
/**
 * The button component that opens a menu editor.
 */
export class BrManageMenuButton extends React.Component {
    render() {
        const { context, props: { menu }, } = this;
        return (context === null || context === void 0 ? void 0 : context.isPreview()) ? React.createElement(BrMeta, { meta: context.getButton(TYPE_MANAGE_MENU_BUTTON, menu) }) : null;
    }
}
BrManageMenuButton.contextType = BrPageContext;
//# sourceMappingURL=BrManageMenuButton.js.map