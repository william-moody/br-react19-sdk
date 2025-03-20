var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { destroy, initialize } from '@bloomreach/spa-sdk';
import { BrPageContext } from './BrPageContext';
import React from 'react';
import { BrMappingContext, BrNode } from '../component';
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
export class BrPage extends React.Component {
    /**
     * @param props {BrPageProps}
     */
    constructor(props) {
        super(props);
        this.state = { page: props.page && initialize(props.configuration, props.page) };
    }
    componentDidMount() {
        const { page } = this.props;
        if (!page) {
            this.initialize();
        }
        const { page: pageInState } = this.state;
        pageInState === null || pageInState === void 0 ? void 0 : pageInState.sync();
    }
    componentDidUpdate(prevProps, prevState) {
        const { configuration, page } = this.props;
        if (configuration !== prevProps.configuration || page !== prevProps.page) {
            this.destroy();
            this.initialize(page === prevProps.page);
        }
        const { page: pageInState } = this.state;
        if (pageInState !== prevState.page) {
            this.forceUpdate(() => pageInState === null || pageInState === void 0 ? void 0 : pageInState.sync());
        }
    }
    componentWillUnmount() {
        this.destroy();
    }
    initialize() {
        return __awaiter(this, arguments, void 0, function* (force = false) {
            const { page, configuration } = this.props;
            const model = force ? undefined : page;
            try {
                this.setState({
                    page: model ? initialize(configuration, model) : yield initialize(configuration),
                });
            }
            catch (error) {
                this.setState(() => {
                    throw error;
                });
            }
        });
    }
    destroy() {
        const { page } = this.state;
        if (!page) {
            return;
        }
        destroy(page);
    }
    render() {
        const { page } = this.state;
        const { configuration, mapping, children } = this.props;
        return (React.createElement(BrPageContext.Provider, { value: page },
            React.createElement(BrMappingContext.Provider, { value: mapping },
                !page && !configuration.NBRMode && null,
                (page || configuration.NBRMode) && React.createElement(BrNode, { component: page === null || page === void 0 ? void 0 : page.getComponent() }, children))));
    }
}
//# sourceMappingURL=BrPage.js.map