import React, {JSX} from 'react';
import { ManageContentButton, TYPE_MANAGE_CONTENT_BUTTON } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page/BrPageContext';

/**
 * The button component that opens for editing a content.
 */
export class BrManageContentButton extends React.Component<ManageContentButton> {
  static contextType = BrPageContext;

  context: React.ContextType<typeof BrPageContext>;

  render(): JSX.Element | null {
    const { context } = this;

    return context?.isPreview() ? <BrMeta meta={context.getButton(TYPE_MANAGE_CONTENT_BUTTON, this.props)} /> : null;
  }
}
