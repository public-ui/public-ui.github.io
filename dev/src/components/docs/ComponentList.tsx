import type { FC, MouseEvent, KeyboardEvent } from 'react';
import React, { Suspense, useEffect, useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { KolCard } from '@public-ui/react';

import type { Language } from '../../shares/language';
import type { Component } from '../samplePreviews';
import { components } from '../samplePreviews';

type Props = Language;

const LazyLoadComponent: FC<Component & Language> = ({ name, lang, loadComponent }) => {
    const history = useHistory();
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            })
        });
        observer.observe(ref.current as Element);
    }, []);

    const formattedComponentName = name.charAt(0).toUpperCase() + name.slice(1);

    const handleRedirect = useCallback((event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => {
        if (event.type === 'click' || (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Enter')) {
            event.preventDefault();
            history.push(`/docs/next/components/${formattedComponentName}`)
        }
        return event
    }, [formattedComponentName])

    const SampleComponent = loadComponent();
    if (!loadComponent) {
        throw new Error(`Example component for ${name} not found`);
    }
    return (
        <div ref={ref} className="components-overview-item">
            {isVisible && (
                <Suspense fallback={<div className="skeleton"></div>}>
                    <a
                        tabIndex={0}
                        onKeyDown={handleRedirect}
                        onClick={handleRedirect}
                    >
                        <KolCard _level={2} _label={formattedComponentName}>
                            <SampleComponent lang={lang} />
                        </KolCard>
                    </a>
                </Suspense>
            )}
        </div>
    );
};

export const ComponentList: FC<Props> = ({ lang }) => (
    <div className="components-overview">
        {components.map(({ name, loadComponent }) => (
            <LazyLoadComponent key={name} name={name} lang={lang} loadComponent={loadComponent} />
        ))}
    </div>
);