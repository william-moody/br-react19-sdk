import React, { JSX, PropsWithChildren, useEffect, useRef } from 'react';
import { MetaCollection } from '@bloomreach/spa-sdk';


interface BrMetaProps {
    meta?: MetaCollection;
}
  
export function BrMeta ({ children, meta }: React.PropsWithChildren<BrMetaProps>): JSX.Element {
    const head = useRef<HTMLSpanElement>(null);
    const tail = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!head.current?.nextSibling || !tail.current) {
            return undefined;
        }

        return meta?.render(head.current.nextSibling, tail.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meta, head.current?.nextSibling, tail.current]);

    return (
        <>
        {meta && meta.length > 0 && <span style={{ display: 'none' }} ref={head} />}
        {children}
        {meta && meta.length > 0 && <span style={{ display: 'none' }} ref={tail} />}
        </>
    );
}
