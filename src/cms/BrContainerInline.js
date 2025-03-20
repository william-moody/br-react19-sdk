import React from 'react';
export function BrContainerInline(props) {
    const { page, children } = props;
    return (React.createElement("div", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container' : undefined }, React.Children.map(children, (child) => (React.createElement("span", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container-item' : undefined }, child)))));
}
//# sourceMappingURL=BrContainerInline.js.map