import React from 'react';
export function BrContainerOrderedList({ page, children }) {
    return (React.createElement("ol", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container' : undefined }, React.Children.map(children, (child) => (React.createElement("li", { className: (page === null || page === void 0 ? void 0 : page.isPreview()) ? 'hst-container-item' : undefined }, child)))));
}
//# sourceMappingURL=BrContainerOrderedList.js.map