import React, { useEffect, useRef } from 'react';
export function BrMeta({ children, meta }) {
    var _a;
    const head = useRef(null);
    const tail = useRef(null);
    useEffect(() => {
        var _a;
        if (!((_a = head.current) === null || _a === void 0 ? void 0 : _a.nextSibling) || !tail.current) {
            return undefined;
        }
        return meta === null || meta === void 0 ? void 0 : meta.render(head.current.nextSibling, tail.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meta, (_a = head.current) === null || _a === void 0 ? void 0 : _a.nextSibling, tail.current]);
    return (React.createElement(React.Fragment, null,
        meta && meta.length > 0 && React.createElement("span", { style: { display: 'none' }, ref: head }),
        children,
        meta && meta.length > 0 && React.createElement("span", { style: { display: 'none' }, ref: tail })));
}
//# sourceMappingURL=BrMeta.js.map