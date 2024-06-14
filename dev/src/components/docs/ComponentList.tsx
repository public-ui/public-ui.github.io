import type { FC, MouseEvent, KeyboardEvent } from 'react';
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { KolCard } from '@public-ui/react';

import type { Component } from '../../shares/component';
import { components } from '../../shares/component';

// iFrame styles
const STYLES = {
    width: '100%',
    height: '250px',
    border: '0',
    overflow: 'hidden',
    pointerEvents: 'none' as 'none',
};

const LazyLoadComponent: FC<Component> = ({ name, sample }) => {
    const history = useHistory();
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    obs.disconnect();
                }
            })
        });
        observer.observe(ref.current as Element);
    }, []);

    const sampleUrl = `/sample-react/#/${name}/${sample}?hideMenus`;
    const formattedComponentName = name.charAt(0).toUpperCase() + name.slice(1);

    const handleRedirect = useCallback((event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => {
        if (event.type === 'click' || (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Enter')) {
            event.preventDefault();
            history.push(`/docs/next/components/${formattedComponentName}`)
        }
        return event
    }, [formattedComponentName])
    
    const iframe = useMemo(() => (
        <iframe
            src={sampleUrl}
            style={STYLES}
            tabIndex={-1}
            title="kolibri-public-ui-code-samples"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
    ), [sampleUrl]);
    return (
        <div ref={ref} className="components-overview-item">
            {isVisible ? (
                <a
                    tabIndex={0}
                    onKeyDown={handleRedirect}
                    onClick={handleRedirect}
                >
                    <KolCard _level={2} _label={formattedComponentName}>
                        {iframe}
                    </KolCard>
                </a>
            ) : <div className="skeleton"></div>}
        </div>
    );
};

export const ComponentList: FC = () => (
    <div className="components-overview">
        {components.map(({ name, sample }) => (
            <LazyLoadComponent key={name} name={name} sample={sample} />
        ))}
    </div>
);