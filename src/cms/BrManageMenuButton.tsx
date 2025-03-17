import React, {JSX} from 'react';
import { Menu, TYPE_MANAGE_MENU_BUTTON } from '@bloomreach/spa-sdk';
import { BrMeta } from '../meta';
import { BrPageContext } from '../page/BrPageContext';

interface BrManageMenuButtonProps {
  /**
   * The related menu model.
   */
  menu: Menu;
}

/**
 * The button component that opens a menu editor.
 */
export class BrManageMenuButton extends React.Component<BrManageMenuButtonProps> {
  static contextType = BrPageContext;

  context: React.ContextType<typeof BrPageContext>;

  render(): JSX.Element | null {
    const {
      context,
      props: { menu },
    } = this;

    return context?.isPreview() ? <BrMeta meta={context.getButton(TYPE_MANAGE_MENU_BUTTON, menu)} /> : null;
  }
}