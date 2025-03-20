import React from 'react';
export function BrContainerUnorderedList({ page, children }) {
    return (React.createElement("ul", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container' : undefined }, React.Children.map(children, (child) => (React.createElement("li", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container-item' : undefined }, child)))));
}
//# sourceMappingURL=BrContainerUnorderedList.js.map