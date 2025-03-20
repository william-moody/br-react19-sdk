// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
export const withContextProvider = (context, children) => {
    const childContextTypes = () => context
        && Object.keys(context).reduce((obj, key) => {
            obj[key] = PropTypes.any;
            return obj;
        }, {});
    class ContextProvider extends React.Component {
        getChildContext() {
            return context;
        }
        render() {
            return children;
        }
    }
    ContextProvider.displayName = 'ContextProvider';
    ContextProvider.childContextTypes = childContextTypes();
    return React.createElement(ContextProvider, null);
};
//# sourceMappingURL=withContextProvider.js.map