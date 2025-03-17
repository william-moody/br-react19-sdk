import { Configuration, destroy, initialize, Page, PageModel } from '@bloomreach/spa-sdk';
import { BrPageContext } from './BrPageContext';
import React, {JSX} from 'react';
import { BrMappingContext, BrNode } from '../component';


interface BrPageProps {
  /**
   * The configuration of the SPA SDK.
   * @see https://www.npmjs.com/package/@bloomreach/spa-sdk#configuration
   */
  configuration: Configuration;

  /**
   * The brXM and React components mapping.
   */
  mapping: React.ContextType<typeof BrMappingContext>;

  /**
   * The pre-initialized page instance or prefetched page model.
   * Mostly this property should be used to transfer state from the server-side to the client-side.
   */
  // eslint-disable-next-line react/require-default-props
  page?: Page | PageModel;
}

interface BrPageState {
  page?: Page;
}

/**
 * @typedef {Object} BrPageProps
 * @property {Configuration} configuration The configuration of the SPA SDK.
 * @property {Object} mapping The brXM and React components mapping.
 * @property {Page | PageModel | undefined} page The pre-initialized page instance or prefetched page model.
 * Mostly this property should be used to transfer state from the server-side to the client-side.
 */

/**
 * The brXM page.
 */
export class BrPage extends React.Component<React.PropsWithChildren<BrPageProps>, BrPageState> {
  /**
   * @param props {BrPageProps}
   */
  constructor(props: BrPageProps) {
    super(props);

    this.state = { page: props.page && initialize(props.configuration, props.page) };
  }

  componentDidMount(): void {
    const { page } = this.props;

    if (!page) {
      this.initialize();
    }

    const { page: pageInState } = this.state;
    pageInState?.sync();
  }

  componentDidUpdate(prevProps: BrPageProps, prevState: BrPageState): void {
    const { configuration, page } = this.props;

    if (configuration !== prevProps.configuration || page !== prevProps.page) {
      this.destroy();
      this.initialize(page === prevProps.page);
    }

    const { page: pageInState } = this.state;

    if (pageInState !== prevState.page) {
      this.forceUpdate(() => pageInState?.sync());
    }
  }

  componentWillUnmount(): void {
    this.destroy();
  }

  private async initialize(force = false): Promise<void> {
    const { page, configuration } = this.props;
    const model = force ? undefined : page;

    try {
      this.setState({
        page: model ? initialize(configuration, model) : await initialize(configuration),
      });
    } catch (error) {
      this.setState(() => {
        throw error;
      });
    }
  }

  private destroy(): void {
    const { page } = this.state;

    if (!page) {
      return;
    }

    destroy(page);
  }

  render(): JSX.Element | null {
    const { page } = this.state;
    const { configuration, mapping, children } = this.props;

    return (
      <BrPageContext.Provider value={page}>
        <BrMappingContext.Provider value={mapping}>
          {!page && !configuration.NBRMode && null}
          {(page || configuration.NBRMode) && <BrNode component={page?.getComponent()}>{children}</BrNode>}
        </BrMappingContext.Provider>
      </BrPageContext.Provider>
    );
  }
}
