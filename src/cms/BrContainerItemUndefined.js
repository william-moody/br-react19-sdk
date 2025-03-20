import React from 'react';
export function BrContainerItemUndefined({ component }) {
    return React.createElement("div", null, `Component "${component === null || component === void 0 ? void 0 : component.getType()}" is not defined.`);
}
//# sourceMappingURL=BrContainerItemUndefined.js.map