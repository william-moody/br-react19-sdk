import React from 'react';
export function BrContainerBox({ page, children }) {
    return (React.createElement("div", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container' : undefined }, React.Children.map(children, (child) => (React.createElement("div", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container-item' : undefined }, child)))));
}
//# sourceMappingURL=BrContainerBox.js.map